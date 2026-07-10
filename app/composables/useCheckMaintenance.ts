export function useCheckMaintenance() {
  const isMaintenance = useState<boolean>('maintenance-status', () => false)
  const isChecking = useState<boolean>('maintenance-checking', () => false)

  let pollInterval: ReturnType<typeof setInterval> | null = null

  async function checkMaintenanceStatus() {
    if (isChecking.value) return // avoid overlapping requests
    isChecking.value = true

    try {
      const data = await $fetch<{ isMaintenance: boolean }>('/api/maintenance')
      isMaintenance.value = data.isMaintenance
    } catch (err) {
      console.error('Failed to check maintenance status:', err)
    } finally {
      isChecking.value = false
    }
  }

  function startPolling(intervalMs = 30000) {
    if (pollInterval) return // already polling, don't double up
    checkMaintenanceStatus()
    pollInterval = setInterval(checkMaintenanceStatus, intervalMs)
  }

  function stopPolling() {
    if (pollInterval) {
      clearInterval(pollInterval)
      pollInterval = null
    }
  }

  return {
    isMaintenance,
    isChecking,
    checkMaintenanceStatus,
    startPolling,
    stopPolling,
  }
}