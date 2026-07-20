<script setup lang="ts">
defineProps<{
  icon: string
  label: string
  value: string | number
  delta: string
}>()
</script>

<template>
  <div class="bg-white/[0.03] border border-white/10 rounded-2xl p-5">
    <div class="flex items-center gap-3 mb-4">
      <span class="size-11 shrink-0 rounded-xl bg-primary/15 flex items-center justify-center">
        <AdminIcon :name="icon" class="size-5 text-primary" />
      </span>
      <span class="text-sm text-muted">{{ label }}</span>
    </div>

    <div class="text-3xl font-bold mb-1">{{ value }}</div>

    <div class="flex items-center gap-1 text-sm text-primary">
      {{ delta }}
      <svg class="size-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
        stroke-linecap="round" stroke-linejoin="round">
        <line x1="7" y1="17" x2="17" y2="7" />
        <polyline points="7 7 17 7 17 17" />
      </svg>
    </div>
  </div>
</template>