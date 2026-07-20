<script setup lang="ts">
defineProps<{
  title: string
  subtitle: string
}>()

const search = ref('')
</script>

<template>
  <div class="flex items-center justify-between mb-8">
    <div>
      <h1 class="font-tertiary text-3xl">{{ title }}</h1>
      <p class="text-muted mt-1">{{ subtitle }}</p>
    </div>

    <button type="button"
      class="flex items-center gap-2 pl-1 pr-2 py-1 rounded-lg hover:bg-white/5 transition-colors">
      <span class="size-9 rounded-full bg-primary flex items-center justify-center text-sm font-bold">A</span>
      <span class="text-sm">Administrator</span>
      <AdminIcon name="chevronDown" class="size-4 text-muted" />
    </button>
  </div>
</template>