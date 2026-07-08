'use client'
import { useParams } from 'next/navigation'
import { useState } from 'react'
import { Card, CardHeader, CardTitle, CardContent, Badge, Button } from '@/components/ui'
import { AppHeader } from '@/components/layout'
import { formatDate } from '@/lib/utils'
import { MOCK_CHANNEL_MEMORIES, MOCK_TOPICS, MOCK_SCRIPTS } from '@/lib/data'
import { Search, Plus, Eye, LayoutGrid, TrendingUp, FileText } from 'lucide-react'
import { cn } from '@/components/ui'

export default function FeaturePage() {
  const params = useParams()
  const slug = (params.feature as string) ?? ''
  const [search, setSearch] = useState('')
  const [statusFilter, setStatusFilter] = useState('')
  const [selectedId, setSelectedId] = useState<string | null>(null)

  const getStatusBadgeClasses = (status: string, entityType: 'channelMemory' | 'topic' | 'script'): string => {
    switch (entityType) {
      case 'channelMemory':
        if (status === 'active') return 'bg-emerald-50 text-emerald-600 border-emerald-200';
        if (status === 'draft') return 'bg-amber-50 text-amber-600 border-amber-200';
        return 'bg-zinc-50 text-zinc-600 border-zinc-200'; // archived
      case 'topic':
        if (status === 'approved') return 'bg-emerald-50 text-emerald-600 border-emerald-200';
        if (status === 'pending') return 'bg-amber-50 text-amber-600 border-amber-200';
        return 'bg-red-50 text-red-600 border-red-200'; // rejected
      case 'script':
        if (status === 'ready_for_review') return 'bg-emerald-50 text-emerald-600 border-emerald-200';
        if (status === 'generated') return 'bg-amber-50 text-amber-600 border-amber-200';
        return 'bg-zinc-50 text-zinc-600 border-zinc-200'; // draft
      default:
        return 'bg-zinc-50 text-zinc-600 border-zinc-200';
    }
  }

  // ── Feature 1: Channel Memory Setup ──
  if (slug === 'channel-memory-setup') {
    const items = MOCK_CHANNEL_MEMORIES.filter(i =>
      (!search || i.channelName.toLowerCase().includes(search.toLowerCase()) || i.niche.toLowerCase().includes(search.toLowerCase())) &&
      (!statusFilter || i.status === statusFilter