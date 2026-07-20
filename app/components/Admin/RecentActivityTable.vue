<script setup lang="ts">
type Activity = {
  page: string
  icon: string
  action: string
  user: string
  avatarColor: string
  date: string
}

defineProps<{
  activities: Activity[]
}>()
</script>

<template>
  <div class="bg-white/[0.03] border border-white/10 rounded-2xl p-6">
    <h2 class="font-tertiary text-lg mb-5">Recent Activity</h2>

    <table class="w-full text-sm">
      <thead>
        <tr class="text-muted text-left border-b border-white/10">
          <th class="font-normal pb-3">Page</th>
          <th class="font-normal pb-3">Action</th>
          <th class="font-normal pb-3">User</th>
          <th class="font-normal pb-3">Date</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="a in activities" :key="a.page + a.date" class="border-b border-white/5 last:border-0">
          <td class="py-3.5">
            <span class="flex items-center gap-2.5">
              <AdminIcon :name="a.icon" class="size-4 text-muted" />
              {{ a.page }}
            </span>
          </td>
          <td class="py-3.5 text-muted">{{ a.action }}</td>
          <td class="py-3.5">
            <span class="flex items-center gap-2.5">
              <span class="size-6 rounded-full flex items-center justify-center text-[11px] font-bold"
                :class="a.avatarColor">
                {{ a.user.charAt(0) }}
              </span>
              {{ a.user }}
            </span>
          </td>
          <td class="py-3.5 text-muted">{{ a.date }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>