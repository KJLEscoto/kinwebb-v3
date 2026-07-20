<script setup lang="ts">
type DataPoint = { label: string, value: number }

const props = defineProps<{
  data: DataPoint[]
}>()

const width = 820
const height = 260
const padding = { top: 20, right: 10, bottom: 30, left: 40 }
const chartW = width - padding.left - padding.right
const chartH = height - padding.top - padding.bottom

const maxValue = computed(() => Math.ceil(Math.max(...props.data.map(d => d.value)) / 50) * 50 + 50)
const yTicks = computed(() => {
  const step = maxValue.value / 5
  return Array.from({ length: 6 }, (_, i) => Math.round(step * i))
})

function xFor(i: number) {
  return padding.left + (i / (props.data.length - 1)) * chartW
}
function yFor(value: number) {
  return padding.top + chartH - (value / maxValue.value) * chartH
}

const linePath = computed(() =>
  props.data.map((d, i) => `${i === 0 ? 'M' : 'L'} ${xFor(i)} ${yFor(d.value)}`).join(' ')
)

const areaPath = computed(() => {
  const last = props.data.length - 1
  return `${linePath.value} L ${xFor(last)} ${padding.top + chartH} L ${xFor(0)} ${padding.top + chartH} Z`
})
</script>

<template>
  <svg :viewBox="`0 0 ${width} ${height}`" class="w-full h-auto">
    <defs>
      <linearGradient id="chartFade" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="var(--color-primary)" stop-opacity="0.35" />
        <stop offset="100%" stop-color="var(--color-primary)" stop-opacity="0" />
      </linearGradient>
    </defs>

    <!-- gridlines + y labels -->
    <g v-for="tick in yTicks" :key="tick">
      <line :x1="padding.left" :x2="width - padding.right" :y1="yFor(tick)" :y2="yFor(tick)" stroke="white"
        stroke-opacity="0.06" />
      <text :x="padding.left - 12" :y="yFor(tick) + 4" text-anchor="end" class="fill-muted" font-size="11">
        {{ tick }}
      </text>
    </g>

    <!-- x labels -->
    <text v-for="(d, i) in data" :key="d.label" :x="xFor(i)" :y="height - 6" text-anchor="middle" class="fill-muted"
      font-size="11">
      {{ d.label }}
    </text>

    <!-- area + line -->
    <path :d="areaPath" fill="url(#chartFade)" />
    <path :d="linePath" fill="none" stroke="var(--color-primary)" stroke-width="2.5" />

    <!-- points + value labels -->
    <g v-for="(d, i) in data" :key="'pt-' + d.label">
      <circle :cx="xFor(i)" :cy="yFor(d.value)" r="4" fill="var(--color-primary)" stroke="var(--color-black)"
        stroke-width="2" />
      <text :x="xFor(i)" :y="yFor(d.value) - 14" text-anchor="middle" fill="var(--color-primary)" font-size="12"
        font-weight="700">
        {{ d.value }}
      </text>
    </g>
  </svg>
</template>