export type ApiResponse<T> = { ok: boolean; data?: T; error?: string };
export type SortDir = 'asc' | 'desc';

export interface DemoUser {
  id: string;
  name: string;
  email: string;
  role: string;
  plan: string;
  avatar: string;
  joinedAt: string;
}

export interface ChannelMemory {
  id: string;
  channelName: string;
  niche: string;
  audience: string;
  offers: string[];
  brandVoice: string;
  competitors: string[];
  contentPillars: string[];
  publishingCadence: 'Weekly' | 'Bi-weekly' | 'Monthly' | 'Ad-hoc';
  callsToAction: string[];
  conversionGoals: string[];
  status: 'draft' | 'active' | 'archived';
  createdAt: string;
  updatedAt: string;
}

export interface Topic {
  id: string;
  channelId: string;
  title: string;
  keywords: string[];
  trendsScore: number;
  searchDemand: number;
  competitorGap: string[];
  audienceQuestions: string[];
  offerPriorities: string[];
  status: 'draft' | 'approved' | 'rejected';
  generatedAt: string;
}

export interface Script {
  id: string;
  topicId: string;
  channelId: string;
  title: string;
  scriptText: string;
  hook: string;
  retentionBeats: string[];
  storytellingArc: string;
  ctas: string[];
  shortsCutdowns: string[];
  chapterMarkers: { time: string; title: string }[];
  status: 'draft' | 'in_review' | 'approved';
  generatedAt: string;
}

export interface Thumbnail {
  id: string;
  scriptId: string;
  channelId: string;
  concept: string;
  textOverlays: string[];
  visualHierarchy: string[];
  variants: { id: string; url: string; ctrPrediction: number }[];
  status: 'draft' | 'in_review' | 'approved';
  generatedAt: string;
}

export interface SEO {
  id: string;
  scriptId: string;
  channelId: string;
  videoTitle: string;
  description: string;
  tags: string[];
  hashtags: string[];
  chapters: { time: string; title: string }[];
  playlistRecommendations: string[];
  endScreenRecommendations: string[];
  status: 'draft' | 'in_review' | 'approved';
  generatedAt: string;
}

export interface Production {
  id: string;
  scriptId: string;
  channelId: string;
  assetChecklist: string[];
  ttsVideoPrompts: string[];
  shootList: string[];
  editingNotes: string[];
  status: 'draft' | 'ready_for_production' | 'in_production';
  generatedAt: string;
}

export interface CalendarItem {
  id: string;
  channelId: string;
  scriptId: string;
  seoId: string;
  thumbnailId: string;
  scheduledDate: string; // ISO string
  status: 'scheduled' | 'published' | 'pending_approval' | 'canceled';
  platform: 'youtube';
  videoLink?: string;
}

export interface AnalyticsReport {
  id: string;
  channelId: string;
  calendarItemId: string;
  videoTitle: string;
  views: number;
  ctr: number;
  averageViewDuration: number; // in seconds
  watchTimeHours: number;
  subscribersGained: number;
  comments: number;
  conversionSignals: number; // e.g., clicks on CTA in description
  reportDate: string;
  learnings: string;
}

export interface RecentActivity {
  id: string;
  channelId: string;
  timestamp: string;
  type: 'channel_memory_updated' | 'topic_generated' | 'script_approved' | 'video_published' | 'analytics_reviewed';
  description: string;
  itemId?: string;
  itemType?: string;
}

export interface Stat {
  id: string;
  channelId: string;
  label: string;
  value: string | number;
  change?: string;
  changeType?: 'positive' | 'negative' | 'neutral';
}

export interface ChartDataPoint {
  name: string;
  value: number;
}

export interface ChartData {
  id: string;
  channelId: string;
  title: string;
  type: 'bar' | 'donut' | 'line';
  data: ChartDataPoint[];
}

export interface DataRecord {
  id: string;
  name: string;
  type: 'topic' | 'script' | 'thumbnail' | 'seo' | 'production' | 'calendar' | 'analytics';
  status: 'draft' | 'approved' | 'in_review' | 'published' | 'scheduled' | 'completed' | 'blocked' | 'rejected';
  priority: 'low' | 'medium' | 'high';
  createdAt: string;
  updatedAt: string;
}