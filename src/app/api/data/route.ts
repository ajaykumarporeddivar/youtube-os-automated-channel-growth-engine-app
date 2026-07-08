import { NextResponse } from 'next/server';
import { channelMemories, topics, scripts, STATS } from '@/lib/data';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

export async function GET(): Promise<NextResponse> {
  console.log(JSON.stringify({ route: '/api/data', method: 'GET', ts: Date.now() }));
  try {
    const data = {
      channelMemories: channelMemories,
      topics: topics,
      scripts: scripts,
      stats: STATS,
      totalChannelMemories: channelMemories.length,
      totalTopics: topics.length,
      totalScripts: scripts.length,
    };
    return NextResponse.json({ ok: true, data }, { headers: corsHeaders });
  } catch (e: unknown) {
    console.error(JSON.stringify({ route: '/api/data', error: String(e), ts: Date.now() }));
    return NextResponse.json({ ok: false, error: String(e) }, { status: 500, headers: corsHeaders });
  }
}

export async function POST(req: Request): Promise<NextResponse> {
  console.log(JSON.stringify({ route: '/api/data', method: 'POST', ts: Date.now() }));
  try {
    const body = await req.json();
    return NextResponse.json(
      { ok: true, message: 'Demo mode — data not persisted', received: body },
      { headers: corsHeaders }
    );
  } catch (e: unknown) {
    console.error(JSON.stringify({ route: '/api/data', error: String(e), ts: Date.now() }));
    return NextResponse.json({ ok: false, error: String(e) }, { status: 500, headers: corsHeaders });
  }
}

export async function OPTIONS(): Promise<NextResponse> {
  return NextResponse.json({}, { status: 200, headers: corsHeaders });
}