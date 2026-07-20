<script setup lang="ts">
defineProps<{
  icon: string
  label: string
  description: string
  to: string
}>()
</script>

<template>
  <NuxtLink :to="to"
    class="group flex items-center justify-between gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors">
    <span class="flex items-center gap-3">
      <span class="size-11 shrink-0 rounded-xl bg-primary flex items-center justify-center">
        <AdminIcon :name="icon" class="size-5 text-white" />
      </span>
      <span class="text-left">
        <span class="block text-sm font-semibold">{{ label }}</span>
        <span class="block text-xs text-muted">{{ description }}</span>
      </span>
    </span>
    <AdminIcon name="chevronRight" class="size-4 text-muted group-hover:text-foreground transition-colors" />
  </NuxtLink>
</template>