<script setup lang="ts">
const { isMaintenance, startPolling, stopPolling } = useCheckMaintenance()

const isBooting = ref(true)
const isRouteLoading = ref(false)
const MIN_BOOT_TIME = 8500 // ms

const router = useRouter()
const route = useRoute()

const isRootPath = computed(() => route.path === '/')

router.beforeEach((to) => {
  if (to.path === '/') {
    isRouteLoading.value = true
  }
})

router.afterEach(() => {
  isRouteLoading.value = false
})

onMounted(() => {
  startPolling()

  if (route.path !== '/') {
    isBooting.value = false
    return
  }

  const start = Date.now()
  const elapsed = Date.now() - start
  setTimeout(() => {
    isBooting.value = false
  }, Math.max(0, MIN_BOOT_TIME - elapsed))
})

onUnmounted(() => stopPolling())
</script>

<template>
  <div>
    <NuxtRouteAnnouncer />
    <Loader v-if="isRootPath && (isBooting || isRouteLoading)" />
    <NuxtLayout>
      <CustomCursor />
      <Maintenance v-if="isMaintenance" />
      <NuxtPage v-else />
    </NuxtLayout>
  </div>
</template>