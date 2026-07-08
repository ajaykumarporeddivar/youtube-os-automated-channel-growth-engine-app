import { DemoUser, ChannelMemory, Topic, Script, RecentActivity, Stat, ChartData } from './types';

// Utility to generate a UUID-like string
const generateId = (): string => Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);

// --- MOCK USER ---
export const DEMO_USER: DemoUser = {
  id: 'usr_12345',
  name: 'Jane Doe',
  email: 'jane.doe@example.com',
  role: 'Agency Manager',
  plan: 'Agency Tier',
  avatar: 'https://api.dicebear.com/8.x/lorelei/svg?seed=JaneDoe',
  joinedAt: '2023-01-15T10:00:00Z',
};

// --- MOCK CHANNEL MEMORIES ---
export const MOCK_CHANNEL_MEMORIES: ChannelMemory[] = [
  {
    id: generateId(),
    channelName: 'GrowthHack TV',
    niche: 'SaaS Marketing',
    audience: 'Startup Founders, Marketing Managers',
    offers: ['SaaS Growth Blueprint', 'Email Marketing Masterclass'],
    brandVoice: 'Authoritative, Educational, Actionable',
    competitors: ['SaaS Insights Channel', 'Marketing Mastery TV'],
    contentPillars: ['Product-Led Growth', 'SEO for SaaS', 'Conversion Rate Optimization'],
    publishingCadence: 'Weekly',
    callsToAction: ['Download our blueprint', 'Book a free strategy session'],
    conversionGoals: ['Blueprint downloads', 'Strategy session bookings'],
    status: 'active',
    createdAt: '2023-03-01T10:00:00Z',
    updatedAt: '2024-06-10T14:30:00Z',
  },
  {
    id: generateId(),
    channelName: 'Creative Flow Studio',
    niche: 'Digital Art Tutorials',
    audience: 'Aspiring Digital Artists, Illustrators',
    offers: ['Procreate Brush Pack', 'Concept Art Course'],
    brandVoice: 'Inspirational, Friendly, Detailed',
    competitors: ['Art School Online', 'Drawing Daily'],
    contentPillars: ['Character Design', 'Environment Painting', 'Software Tips'],
    publishingCadence: 'Bi-weekly',
    callsToAction: ['Grab your free brushes', 'Enroll in the course'],
    conversionGoals: ['Brush pack downloads', 'Course enrollments'],
    status: 'active',
    createdAt: '2023-04-10T11:00:00Z',
    updatedAt: '2024-06-08T09:15:00Z',
  },
  {
    id: generateId(),
    channelName: 'FitLife Transformation',
    niche: 'Personal Fitness Coaching',
    audience: 'Busy Professionals, Fitness Newbies',
    offers: ['30-Day Home Workout Plan', 'Nutrition Guide PDF'],
    brandVoice: 'Motivating, Empathetic, Expert',
    competitors: ['Home Workout Guru', 'Fitness Journey Pro'],
    contentPillars: ['HIIT Workouts', 'Healthy Meal Prep', 'Mindset for Health'],
    publishingCadence: 'Weekly',
    callsToAction: ['Get your workout plan', 'Download nutrition guide'],
    conversionGoals: ['Workout plan sign-ups', 'Nutrition guide downloads'],
    status: 'active',
    createdAt: '2023-05-20T12:00:00Z',
    updatedAt: '2024-06-05T16:00:00Z',
  },
  {
    id: generateId(),
    channelName: 'EcoLiving Guides',
    niche: 'Sustainable Home & Lifestyle',
    audience: 'Eco-Conscious Consumers, Families',
    offers: ['Zero Waste Starter Kit Guide', 'DIY Natural Cleaners Ebook'],
    brandVoice: 'Informative, Gentle, Community-focused',
    competitors: ['Green Home Tips', 'Sustainable Living Channel'],
    contentPillars: ['Composting & Gardening', 'Sustainable Fashion', 'Energy Saving Tips'],
    publishingCadence: 'Monthly',
    callsToAction: ['Explore zero waste products', 'Get the DIY ebook'],
    conversionGoals: ['Affiliate link clicks', 'Ebook downloads'],
    status: 'draft',
    createdAt: '2023-06-01T09:00:00Z',
    updatedAt: '2024-06-01T10:00:00Z',
  },
  {
    id: generateId(),
    channelName: 'Gamer Nexus Reviews',
    niche: 'PC Hardware & Gaming Tech',
    audience: 'PC Enthusiasts, Gamers',
    offers: ['PC Build Checklist', 'Gaming Gear Buying Guide'],
    brandVoice: 'Technical, Critical, Enthusiastic',
    competitors: ['Tech Unboxed', 'Hardware Haven'],
    contentPillars: ['CPU Benchmarks', 'GPU Reviews', 'Gaming Peripheral Tests'],
    publishingCadence: 'Weekly',
    callsToAction: ['Read full reviews', 'Check latest prices'],
    conversionGoals: ['Affiliate purchases', 'Website traffic'],
    status: 'archived',
    createdAt: '2022-11-01T14:00:00Z',
    updatedAt: '2023-10-20T11:00:00Z',
  },
  {
    id: generateId(),
    channelName: 'The Coding Dojo',
    niche: 'Web Development Tutorials',
    audience: 'Junior Developers, Career Changers',
    offers: ['Frontend Roadmap PDF', 'Fullstack Bootcamp Discount'],
    brandVoice: 'Clear, Encouraging, Practical',
    competitors: ['Dev Mentor', 'Learn Code Online'],
    contentPillars: ['React & Next.js', 'Node.js & Express', 'Database Fundamentals'],
    publishingCadence: 'Bi-weekly',
    callsToAction: ['Download the roadmap', 'Join the bootcamp'],
    conversionGoals: ['PDF downloads', 'Course sign-ups'],
    status: 'active',
    createdAt: '2023-07-15T10:00:00Z',
    updatedAt: '2024-06-09T18:00:00Z',
  },
  {
    id: generateId(),
    channelName: 'Mindful Living Today',
    niche: 'Mindfulness & Wellness',
    audience: 'Stress-prone Individuals, Wellness Seekers',
    offers: ['Guided Meditation Series', 'Daily Gratitude Journal'],
    brandVoice: 'Calm, Soothing, Insightful',
    competitors: ['Calm Spirit', 'Zen Moments'],
    contentPillars: ['Meditation Techniques', 'Stress Reduction', 'Mindful Habits'],
    publishingCadence: 'Monthly',
    callsToAction: ['Start your meditation journey', 'Get the journal'],
    conversionGoals: ['App sign-ups', 'Journal purchases'],
    status: 'draft',
    createdAt: '2023-08-01T13:00:00Z',
    updatedAt: '2024-05-25T11:00:00Z',
  },
  {
    id: generateId(),
    channelName: 'DIY Home Hacks',
    niche: 'Home Improvement & Repairs',
    audience: 'Homeowners, DIY Enthusiasts',
    offers: ['Essential Tool Checklist', 'Budget Renovation Guide'],
    brandVoice: 'Practical, Resourceful, Friendly',
    competitors: ['Handy Home Helper', 'Renovation Roadmap'],
    contentPillars: ['Kitchen Upgrades', 'Bathroom Remodels', 'Basic Repairs'],
    publishingCadence: 'Bi-weekly',
    callsToAction: ['Get your tool list', 'Download renovation guide'],
    conversionGoals: ['Tool sales (affiliate)', 'Guide downloads'],
    status: 'active',
    createdAt: '2023-09-01T09:30:00Z',
    updatedAt: '2024-06-11T10:00:00Z',
  },
  {
    id: generateId(),
    channelName: 'Travelogue Explorer',
    niche: 'Adventure Travel Guides',
    audience: 'Backpackers, Adventure Seekers',
    offers: ['Ultimate Packing List', 'Budget Travel Ebook'],
    brandVoice: 'Adventurous, Inspiring, Detailed',
    competitors: ['Wanderlust Journeys', 'Global Nomad'],
    contentPillars: ['Hiking & Trekking', 'Cultural Experiences', 'Travel Photography'],
    publishingCadence: 'Monthly',
    callsToAction: ['Plan your next trip', 'Explore new destinations'],
    conversionGoals: ['Tour bookings', 'Ebook sales'],
    status: 'archived',
    createdAt: '2023-10-10T11:45:00Z',
    updatedAt: '2024-01-05T15:00:00Z',
  },
];

// --- MOCK TOPICS ---
export const MOCK_TOPICS: Topic[] = [
  {
    id: generateId(),
    channelMemoryId: MOCK_CHANNEL_MEMORIES[0].id,
    title: 'The Future of AI in SaaS Marketing',
    pillar: 'Product-Led Growth',
    trendSource: 'YouTube Trends',
    searchDemand: 'High',
    audienceQuestions: ['How will AI change SaaS marketing?', 'What AI tools are best for startups?'],
    offerPriority: 'SaaS Growth Blueprint',
    status: 'approved',
    createdAt: '2024-06-01T08:00:00Z',
    updatedAt: '2024-06-01T09:00:00Z',
  },
  {
    id: generateId(),
    channelMemoryId: MOCK_CHANNEL_MEMORIES[0].id,
    title: 'Optimizing Your SaaS Free Trial Conversion Rates',
    pillar: 'Conversion Rate Optimization',
    trendSource: 'Google Search',
    searchDemand: 'Medium',
    audienceQuestions: ['How to convert free trial users?', 'Best practices for SaaS free trials?'],
    offerPriority: 'Email Marketing Masterclass',
    status: 'pending',
    createdAt: '2024-06-03T10:00:00Z',
    updatedAt: '2024-06-03T10:00:00Z',
  },
  {
    id: generateId(),
    channelMemoryId: MOCK_CHANNEL_MEMORIES[1].id,
    title: 'Mastering Dynamic Poses in Digital Character Design',
    pillar: 'Character Design',
    trendSource: 'Audience Questions',
    searchDemand: 'High',
    audienceQuestions: ['How to draw dynamic characters?', 'Tips for pose anatomy?'],
    offerPriority: 'Concept Art Course',
    status: 'approved',
    createdAt: '2024-06-02T14:00:00Z',
    updatedAt: '2024-06-02T15:00:00Z',
  },
  {
    id: generateId(),
    channelMemoryId: MOCK_CHANNEL_MEMORIES[2].id,
    title: '5 HIIT Workouts You Can Do At Home (No Equipment)',
    pillar: 'HIIT Workouts',
    trendSource: 'YouTube Trends',
    searchDemand: 'High',
    audienceQuestions: ['Best home HIIT workouts?', 'HIIT for beginners?'],
    offerPriority: '30-Day Home Workout Plan',
    status: 'generated',
    createdAt: '2024-06-05T09:00:00Z',
    updatedAt: '2024-06-05T10:00:00Z',
  },
  {
    id: generateId(),
    channelMemoryId: MOCK_CHANNEL_MEMORIES[2].id,
    title: 'Simple Meal Prep Ideas for Busy Professionals',
    pillar: 'Healthy Meal Prep',
    trendSource: 'Google Search',
    searchDemand: 'Medium',
    audienceQuestions: ['Easy meal prep for work?', 'Healthy lunches for office?'],
    offerPriority: 'Nutrition Guide PDF',
    status: 'pending',
    createdAt: '2024-06-06T11:00:00Z',
    updatedAt: '2024-06-06T11:00:00Z',
  },
];

// --- MOCK SCRIPTS ---
export const MOCK_SCRIPTS: Script[] = [
  {
    id: generateId(),
    topicId: MOCK_TOPICS[0].id,
    title: 'The Future of AI in SaaS Marketing',
    scriptContent: 'Welcome to GrowthHack TV! Today, we\'re diving deep into how Artificial Intelligence is revolutionizing SaaS marketing...',
    status: 'draft',
    createdAt: '2024-06-02T10:00:00Z',
    updatedAt: '2024-06-02T11:00:00Z',
  },
  {
    id: generateId(),
    topicId: MOCK_TOPICS[2].id,
    title: 'Mastering Dynamic Poses in Digital Character Design',
    scriptContent: 'Hey artists! Welcome back to Creative Flow Studio. Ever struggled with making your characters look alive? Today, we unlock the secrets of dynamic posing...',
    status: 'ready_for_review',
    createdAt: '2024-06-03T16:00:00Z',
    updatedAt: '2024-06-04T09:00:00Z',
  },
];

// --- MOCK STATS FOR DASHBOARD KPIs ---
export const STATS: Record<string, Stat> = {
  totalChannels: {
    label: 'Total Channels',
    value: MOCK_CHANNEL_MEMORIES.length,
    change: +5.2,
    changeType: 'positive',
    description: 'Channels actively managed',
  },
  activeStrategies: {
    label: 'Active Strategies',
    value: MOCK_TOPICS.filter(t => t.status === 'approved').length,
    change: +12.8,
    changeType: 'positive',
    description: 'Weekly strategies approved',
  },
  scriptsGenerated: {
    label: 'Scripts Generated',
    value: MOCK_SCRIPTS.length,
    change: +8.1,
    changeType: 'positive',
    description: 'New scripts produced this month',
  },
  avgCtr: {
    label: 'Avg. CTR',
    value: 7.2,
    unit: '%',
    change: +0.5,
    changeType: 'positive',
    description: 'Average click-through rate',
  },
  conversionRate: {
    label: 'Conversion Rate',
    value: 3.1,
    unit: '%',
    change: -0.2,
    changeType: 'negative',
    description: 'Average offer conversion',
  },
};

// --- MOCK SPARKLINE DATA ---
export const SPARKLINE_DATA: Record<string, number[]> = {
  totalChannels: [2, 3, 3, 4, 5, 5, 6, 7, 8, 8, 9, 9],
  activeStrategies: [10, 12, 15, 13, 16, 18, 20, 22, 25, 24, 28, 30],
  scriptsGenerated: [5, 7, 8, 10, 12, 11, 14, 16, 18, 19, 22, 25],
  avgCtr: [6.5, 6.8, 7.0, 6.9, 7.1, 7.3, 7.2, 7.5, 7.4, 7.6, 7.8, 7.7],
  conversionRate: [3.5, 3.4, 3.2, 3.3, 3.1, 3.0, 2.9, 2.8, 3.0, 3.1, 3.2, 3.1],
};

// --- MOCK RECENT ACTIVITY ---
export const RECENT_ACTIVITY: RecentActivity[] = [
  {
    id: generateId(),
    userId: DEMO_USER.id,
    userName: 'Alex Johnson',
    userAvatar: 'https://api.dicebear.com/8.x/lorelei/svg?seed=AlexJohnson',
    action: 'approved script for "AI in SaaS Marketing"',
    timestamp: '2024-06-12T10:30:00Z',
  },
  {
    id: generateId(),
    userId: DEMO_USER.id,
    userName: 'Sarah Lee',
    userAvatar: 'https://api.dicebear.com/8.x/lorelei/svg?seed=SarahLee',
    action: 'created new Channel Memory: "EcoLiving Guides"',
    timestamp: '2024-06-12T09:15:00Z',
  },
  {
    id: generateId(),
    userId: DEMO_USER.id,
    userName: 'Mark Chen',
    userAvatar: 'https://api.dicebear.com/8.x/lorelei/svg?seed=MarkChen',
    action: 'generated topics for "FitLife Transformation"',
    timestamp: '2024-06-11T16:00:00Z',
  },
  {
    id: generateId(),
    userId: DEMO_USER.id,
    userName: 'Jane Doe',
    userAvatar: DEMO_USER.avatar,
    action: 'updated "Creative Flow Studio" brand voice',
    timestamp: '2024-06-11T11:00:00Z',
  },
  {
    id: generateId(),
    userId: DEMO_USER.id,
    userName: 'Emily White',
    userAvatar: 'https://api.dicebear.com/8.x/lorelei/svg?seed=EmilyWhite',
    action: 'submitted script draft for "Mastering Dynamic Poses"',
    timestamp: '2024-06-10T14:00:00Z',
  },
];

// --- MOCK CHART DATA ---
export const CHART_DATA: ChartData = {
  labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12'],
  weekly: [
    { label: 'Topics Generated', data: [12, 15, 10, 18, 14, 20, 16, 22, 19, 25, 21, 28], color: '#6366f1' }, // Indigo-500
    { label: 'Scripts Drafted', data: [8, 10, 7, 12, 9, 14, 11, 16, 13, 18, 15, 20], color: '#f59e0b' }, // Amber-500
    { label: 'Content Published', data: [5, 7, 6, 8, 7, 9, 8, 10, 9, 11, 10, 12], color: '#22c55e' }, // Emerald-500
  ],
};

export const metrics = [
  { id: 'pipeline', label: 'Pipeline Value', value: '$486K', change: '+18.4%', trend: 'up', detail: 'Expansion-ready value this quarter' },
  { id: 'cycle', label: 'Cycle Time', value: '2.1d', change: '-31%', trend: 'down', detail: 'Median time from intake to decision' },
]

export const records = [
  { id: 'rec_001', name: 'Primary workflow intake', customer: 'Current workspace', status: 'queued', owner: 'Operations', value: 82000, priority: 'high', confidence: 96, cycleTime: '1.8d', nextStep: 'Prepare owner-ready output', notes: 'Generated contract fallback preserved deploy compatibility.', createdAt: '2026-05-01' },
  { id: 'rec_002', name: 'Risk review queue', customer: 'Current workspace', status: 'in_review', owner: 'Revenue', value: 64000, priority: 'medium', confidence: 88, cycleTime: '2.4d', nextStep: 'Resolve missing evidence', notes: 'Canonical record shape supports dashboard and feature screens.', createdAt: '2026-05-03' },
  { id: 'rec_003', name: 'Client-ready package', customer: 'Current workspace', status: 'approved', owner: 'Success', value: 41000, priority: 'medium', confidence: 91, cycleTime: '2.0d', nextStep: 'Export report', notes: 'Workflow output is ready for buyer review.', createdAt: '2026-05-04' },
]

export const activity = [
  { id: 'evt_1', title: 'Workflow intake normalized', actor: 'NEXUS OS', timestamp: '2026-05-23T10:30:00Z', status: 'queued' },
  { id: 'evt_2', title: 'Deploy contract checked', actor: 'BUILD gate', timestamp: '2026-05-23T10:45:00Z', status: 'approved' },
]
