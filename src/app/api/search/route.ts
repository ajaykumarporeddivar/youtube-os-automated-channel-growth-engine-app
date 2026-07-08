import { NextRequest, NextResponse } from 'next/server';
import { ChannelMemory, Topic, Script } from '@/lib/types';
import { channelMemories, topics, scripts } from '@/lib/data';

export async function GET(req: NextRequest): Promise<NextResponse> {
  console.log(JSON.stringify({ route: '/api/search', method: 'GET', ts: Date.now() }));
  try {
    const { searchParams } = new URL(req.url);
    const query = searchParams.get('q') || '';
    const type = searchParams.get('type') || ''; // Optional: 'channelMemory', 'topic', 'script'
    const lowerCaseQuery = query.toLowerCase();

    let allResults: (ChannelMemory | Topic | Script & { _type: string })[] = [];

    if (query) {
      if (type === 'channelMemory' || type === '') {
        allResults = allResults.concat(
          channelMemories
            .filter(item =>
              item.channelName.toLowerCase().includes(lowerCaseQuery) ||
              item.niche.toLowerCase().includes(lowerCaseQuery) ||
              item.audience.toLowerCase().includes(lowerCaseQuery) ||
              item.offers.some(offer => offer.toLowerCase().includes(lowerCaseQuery)) ||
              item.contentPillars.some(pillar => pillar.toLowerCase().includes(lowerCaseQuery))
            )
            .map(item => ({ ...item, _type: 'channelMemory' }))
        );
      }
      if (type === 'topic' || type === '') {
        allResults = allResults.concat(
          topics
            .filter(item =>
              item.title.toLowerCase().includes(lowerCaseQuery) ||
              item.pillar.toLowerCase().includes(lowerCaseQuery) ||
              item.trendSource.toLowerCase().includes(lowerCaseQuery) ||
              item.audienceQuestions.some(q => q.toLowerCase().includes(lowerCaseQuery))
            )
            .map(item => ({ ...item, _type: 'topic' }))
        );
      }
      if (type === 'script' || type === '') {
        allResults = allResults.concat(
          scripts
            .filter(item =>
              item.title.toLowerCase().includes(lowerCaseQuery) ||
              item.hook.toLowerCase().includes(lowerCaseQuery) ||
              item.callToAction.toLowerCase().includes(lowerCaseQuery)
            )
            .map(item => ({ ...item, _type: 'script' }))
        );
      }
    } else {
      // If query is empty, return first 5 items across all types
      const defaultResults: (ChannelMemory | Topic | Script & { _type: string })[] = [];
      const addIfUnique = (item: ChannelMemory | Topic | Script, itemType: string) => {
        if (!defaultResults.some(r => r.id === item.id)) {
          defaultResults.push({ ...item, _type: itemType });
        }
      };

      for (let i = 0; i < channelMemories.length && defaultResults.length < 5; i++) {
        addIfUnique(channelMemories[i], 'channelMemory');
      }
      for (let i = 0; i < topics.length && defaultResults.length < 5; i++) {
        addIfUnique(topics[i], 'topic');
      }
      for (let i = 0; i < scripts.length && defaultResults.length < 5; i++) {
        addIfUnique(scripts[i], 'script');
      }
      allResults = defaultResults;
    }

    // Deduplicate results by ID and limit to 20
    const uniqueResultsMap = new Map<string, ChannelMemory | Topic | Script & { _type: string }>();
    allResults.forEach(item => uniqueResultsMap.set(item.id, item));
    const results = Array.from(uniqueResultsMap.values()).slice(0, 20);

    return NextResponse.json({ ok: true, data: { results, total: results.length, query } });
  } catch (e: unknown) {
    console.error(JSON.stringify({ route: '/api/search', error: String(e), ts: Date.now() }));
    return NextResponse.json({ ok: false, error: String(e) }, { status: 500 });
  }
}