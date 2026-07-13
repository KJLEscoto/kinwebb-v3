<script setup lang="ts">
const { isMaintenance, startPolling, stopPolling } = useCheckMaintenance()

onMounted(() => startPolling())
onUnmounted(() => stopPolling())
</script>

<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtLayout>
      <CustomCursor />
      <Maintenance v-if="isMaintenance" />
      <NuxtPage v-else />
    </NuxtLayout>
  </div>
</template>
