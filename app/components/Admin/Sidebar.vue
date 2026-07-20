<script setup lang="ts">
type NavItem = {
  label: string
  icon: string
  to: string
  badge?: number
}

const navItems: NavItem[] = [
  { label: 'Dashboard', icon: 'dashboard', to: '/admin' },
  { label: 'Pages', icon: 'pages', to: '/admin/pages' },
  { label: 'Content', icon: 'content', to: '/admin/content' },
  { label: 'Media Library', icon: 'media', to: '/admin/media' },
  { label: 'Messages', icon: 'messages', to: '/admin/messages', badge: 18 },
  { label: 'Users', icon: 'users', to: '/admin/users' },
  { label: 'Settings', icon: 'settings', to: '/admin/settings' },
]

const route = useRoute()
</script>

<template>
  <aside class="w-64 shrink-0 h-screen sticky top-0 flex flex-col bg-black border-r border-white/10 px-4 py-6">
    <!-- brand -->
    <div class="flex items-center gap-2 px-2 mb-8">
      <svg class="size-6 text-primary" viewBox="0 0 24 24" fill="currentColor">
        <path d="M8 5v14l11-7z" />
      </svg>
      <span class="font-tertiary text-lg">CMS Admin</span>
    </div>

    <!-- nav -->
    <nav class="flex-1 flex flex-col gap-1">
      <NuxtLink v-for="item in navItems" :key="item.to" :to="item.to"
        class="group flex items-center justify-between gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors" :class="route.path === item.to
          ? 'bg-primary/10 text-primary'
          : 'text-muted hover:bg-white/5 hover:text-foreground'">
        <span class="flex items-center gap-3">
          <AdminIcon :name="item.icon" class="size-5" />
          {{ item.label }}
        </span>
        <span v-if="item.badge" class="text-xs font-bold px-1.5 py-0.5 rounded-md"
          :class="route.path === item.to ? 'bg-primary text-white' : 'bg-primary/90 text-white'">
          {{ item.badge }}
        </span>
      </NuxtLink>
    </nav>

    <!-- logout -->
    <button type="button"
      class="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-muted hover:bg-white/5 hover:text-foreground transition-colors">
      <svg class="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
        stroke-linejoin="round">
        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
        <polyline points="16 17 21 12 16 7" />
        <line x1="21" y1="12" x2="9" y2="12" />
      </svg>
      Log out
    </button>
  </aside>
</template>