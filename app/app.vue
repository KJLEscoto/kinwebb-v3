<script setup lang="ts">
const { isMaintenance, startPolling, stopPolling } = useCheckMaintenance()

onMounted(() => startPolling())
onUnmounted(() => stopPolling())
</script>

<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtLayout>
      <Maintenance v-if="isMaintenance" />
      <NuxtPage v-else />
    </NuxtLayout>
  </div>
</template>
