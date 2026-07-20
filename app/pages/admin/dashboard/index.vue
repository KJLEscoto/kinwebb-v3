<script setup lang="ts">
definePageMeta({
  layout: 'admin', // see layouts/admin.vue below, or drop this if you're not using a layout
})

const stats = [
  { icon: 'file', label: 'Total Pages', value: 24, delta: '+3 this week' },
  { icon: 'edit', label: 'Published Content', value: 186, delta: '+12 this week' },
  { icon: 'image', label: 'Media Files', value: '1,248', delta: '+56 this week' },
  { icon: 'mail', label: 'New Messages', value: 18, delta: '+5 this week' },
]

const chartData = [
  { label: 'Jul 14', value: 120 },
  { label: 'Jul 15', value: 152 },
  { label: 'Jul 16', value: 98 },
  { label: 'Jul 17', value: 180 },
  { label: 'Jul 18', value: 210 },
  { label: 'Jul 19', value: 165 },
  { label: 'Jul 20', value: 198 },
]

const quickActions = [
  { icon: 'plus', label: 'New Page', description: 'Create a new page', to: '/admin/pages/new' },
  { icon: 'edit', label: 'Add Content', description: 'Create new content', to: '/admin/content/new' },
  { icon: 'upload', label: 'Upload Media', description: 'Add files to library', to: '/admin/media' },
]

const activities = [
  { page: 'Home', icon: 'file', action: 'Page updated', user: 'Administrator', avatarColor: 'bg-primary text-white', date: 'Jul 20, 2026 10:24 AM' },
  { page: 'About Us', icon: 'file', action: 'Content published', user: 'Jane Smith', avatarColor: 'bg-white/10 text-foreground', date: 'Jul 20, 2026 09:15 AM' },
  { page: 'hero-banner.jpg', icon: 'image', action: 'Media uploaded', user: 'Mike Johnson', avatarColor: 'bg-white/10 text-foreground', date: 'Jul 19, 2026 04:42 PM' },
  { page: 'Services', icon: 'file', action: 'Page created', user: 'Administrator', avatarColor: 'bg-primary text-white', date: 'Jul 19, 2026 11:08 AM' },
  { page: 'Contact Form Submission', icon: 'mail', action: 'New message received', user: 'Sarah Williams', avatarColor: 'bg-white/10 text-foreground', date: 'Jul 18, 2026 03:33 PM' },
]
</script>

<template>
  <div class="flex-1 p-8">
    <AdminTopbar title="Dashboard" subtitle="Welcome back, Admin." />

    <div class="grid grid-cols-4 gap-4 mb-6">
      <AdminStatCard v-for="s in stats" :key="s.label" v-bind="s" />
    </div>

    <div class="grid grid-cols-[1fr_360px] gap-4 mb-6">
      <div class="bg-white/[0.03] border border-white/10 rounded-2xl p-6">
        <div class="flex items-center justify-between mb-4">
          <h2 class="font-tertiary text-lg">Content Performance</h2>
          <button type="button"
            class="flex items-center gap-2 text-sm bg-white/5 border border-white/10 rounded-lg px-3 py-1.5 text-muted hover:text-foreground transition-colors">
            Last 7 days
            <AdminIcon name="chevronDown" class="size-4" />
          </button>
        </div>
        <AdminPerformanceChart :data="chartData" />
      </div>

      <div class="bg-white/[0.03] border border-white/10 rounded-2xl p-4">
        <h2 class="font-tertiary text-lg px-2 mb-2">Quick Actions</h2>
        <AdminQuickActionItem v-for="a in quickActions" :key="a.label" v-bind="a" />
      </div>
    </div>

    <AdminRecentActivityTable :activities="activities" />
  </div>
</template>