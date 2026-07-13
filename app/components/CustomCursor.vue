<script setup lang="ts">
type CursorType = 'default' | 'pointer' | 'not-allowed' | 'text' | 'wait'

const x = ref(0)
const y = ref(0)
const isVisible = ref(false)
const isTouch = ref(false)
const showHelp = ref(false)
const cursorType = ref<CursorType>('default')

function hasDirectText(el: HTMLElement): boolean {
  return Array.from(el.childNodes).some(
    (node) => node.nodeType === Node.TEXT_NODE && !!node.textContent?.trim()
  )
}

function resolveCursorType(target: HTMLElement): CursorType {
  if (target.closest('[data-cursor-wait]')) {
    return 'wait'
  }

  const interactive = target.closest('button, a, [role="button"], summary') as HTMLElement | null

  if (interactive) {
    if (interactive.hasAttribute('disabled') || interactive.getAttribute('aria-disabled') === 'true') {
      return 'not-allowed'
    }
    return 'pointer'
  }

  if (target.closest('input, textarea, [contenteditable="true"]')) {
    return 'text'
  }

  if (hasDirectText(target)) {
    return 'text'
  }

  return 'default'
}

function handleMouseMove(e: MouseEvent) {
  x.value = e.clientX
  y.value = e.clientY
  isVisible.value = true

  const target = e.target as HTMLElement
  cursorType.value = resolveCursorType(target)
  showHelp.value = !!target.closest('[data-cursor-help]')
}

function handleMouseLeave() {
  isVisible.value = false
}

onMounted(() => {
  isTouch.value = window.matchMedia('(pointer: coarse)').matches
  if (isTouch.value) return

  window.addEventListener('mousemove', handleMouseMove)
  document.addEventListener('mouseleave', handleMouseLeave)
})

onUnmounted(() => {
  window.removeEventListener('mousemove', handleMouseMove)
  document.removeEventListener('mouseleave', handleMouseLeave)
})
</script>

<template>
  <div v-if="!isTouch"
    class="fixed top-0 left-0 z-9999 pointer-events-none md:flex items-center gap-1 transition-opacity duration-150 hidden"
    :class="isVisible ? 'opacity-100' : 'opacity-0'" :style="{ transform: `translate(${x}px, ${y}px)` }">

    <!-- default -->
    <svg v-if="cursorType === 'default'" xmlns="http://www.w3.org/2000/svg"
      class="size-7 shrink-0 -translate-y-0.5 text-secondary" viewBox="0 0 24 24">
      <path d="M0 0h24v24H0z" fill="none" />
      <path fill="currentColor" stroke="white" stroke-width="2" stroke-linejoin="round" paint-order="stroke fill"
        d="M7.921 2.3C6.936 1.532 5.5 2.234 5.5 3.482v17.009c0 1.422 1.795 2.046 2.677.93l4.19-5.3a1.65 1.65 0 0 1 1.295-.626h6.852c1.428 0 2.049-1.808.921-2.684z" />
    </svg>

    <!-- pointer -->
    <div v-else-if="cursorType === 'pointer'" class="relative">
      <svg xmlns="http://www.w3.org/2000/svg" class="size-7 shrink-0 -translate-y-0.5 text-secondary relative"
        viewBox="0 0 256 256">
        <path d="M0 0h256v256H0z" fill="none" />
        <path fill="currentColor" stroke="white" stroke-width="20" stroke-linejoin="round" paint-order="stroke fill"
          d="M224 104v50.93c0 46.2-36.85 84.55-83 85.06a83.7 83.7 0 0 1-60.4-24.59C58.79 192.33 34.15 136 34.15 136a16 16 0 0 1 6.53-22.23c7.66-4 17.1-.84 21.4 6.62l21 36.44a6.09 6.09 0 0 0 6 3.09h.12a8.19 8.19 0 0 0 6.8-8.18V32a16 16 0 0 1 16.77-16c8.61.4 15.23 7.82 15.23 16.43V104a8 8 0 0 0 8.53 8a8.17 8.17 0 0 0 7.47-8.25V88a16 16 0 0 1 16.77-16c8.61.4 15.23 7.82 15.23 16.43V112a8 8 0 0 0 8.53 8a8.17 8.17 0 0 0 7.47-8.25v-7.28c0-8.61 6.62-16 15.23-16.43A16 16 0 0 1 224 104" />
      </svg>

      <!-- help bubble, only shown alongside pointer -->
      <!-- <button data-cursor-help>Learn more</button> -->
      <svg v-if="showHelp" xmlns="http://www.w3.org/2000/svg"
        class="size-7 shrink-0 -translate-y-0.5 text-secondary absolute -right-3.5 -top-2" viewBox="0 0 24 24">
        <path d="M0 0h24v24H0z" fill="none" />
        <path fill="currentColor" stroke="white" stroke-width="1.5" stroke-linejoin="round" paint-order="stroke fill"
          d="M15.333 9.5A3.5 3.5 0 0 0 8.8 7.75a1 1 0 0 0 1.733 1a1.5 1.5 0 0 1 1.3-.75a1.5 1.5 0 1 1 0 3h-.003a1 1 0 0 0-.19.039a1 1 0 0 0-.198.04a1 1 0 0 0-.155.105a1 1 0 0 0-.162.11a1 1 0 0 0-.117.174a1 1 0 0 0-.097.144a1 1 0 0 0-.043.212a1 1 0 0 0-.035.176v1l.002.011v.491a1 1 0 0 0 1 .998h.003a1 1 0 0 0 .998-1.002l-.002-.662A3.49 3.49 0 0 0 15.333 9.5m-4.203 6.79a1 1 0 0 0 .7 1.71a1.04 1.04 0 0 0 .71-.29a1.015 1.015 0 0 0 0-1.42a1.034 1.034 0 0 0-1.41 0" />
      </svg>
    </div>

    <!-- not allowed -->
    <svg v-else-if="cursorType === 'not-allowed'" xmlns="http://www.w3.org/2000/svg"
      class="size-7 shrink-0 -translate-y-0.5 text-secondary" viewBox="0 0 32 32">
      <path d="M0 0h32v32H0z" fill="none" />
      <path fill="currentColor" stroke="white" stroke-width="2" stroke-linejoin="round" paint-order="stroke fill"
        d="M16 3.667C9.19 3.667 3.667 9.187 3.667 16S9.19 28.333 16 28.333c6.812 0 12.333-5.52 12.333-12.333S22.813 3.667 16 3.667m0 3c1.85 0 3.572.548 5.024 1.48L8.147 21.024A9.26 9.26 0 0 1 6.667 16c0-5.146 4.187-9.333 9.333-9.333m0 18.666a9.27 9.27 0 0 1-5.024-1.48l12.876-12.877A9.26 9.26 0 0 1 25.332 16c0 5.146-4.186 9.333-9.332 9.333" />
    </svg>

    <!-- text -->
    <svg v-else-if="cursorType === 'text'" xmlns="http://www.w3.org/2000/svg" class="size-7 shrink-0 -translate-y-0.5"
      viewBox="0 0 24 24">
      <path d="M0 0h24v24H0z" fill="none" />
      <path fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"
        d="M10 12h4M9 4a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3m6-16a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3" />
      <path class="text-secondary" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
        stroke-width="2" d="M10 12h4M9 4a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3m6-16a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3" />
    </svg>

    <svg v-else-if="cursorType === 'wait'" xmlns="http://www.w3.org/2000/svg"
      class="size-7 shrink-0 -translate-y-0.5 text-secondary" viewBox="0 0 56 56">
      <path d="M0 0h56v56H0z" fill="none" />
      <path fill="currentColor" stroke="white" stroke-width="3" stroke-linejoin="round" paint-order="stroke fill"
        d="M16.516 49.574h22.757c2.391 0 3.82-1.312 3.82-3.843v-.61c.024-6.469-6.866-11.719-9.89-14.578c-.844-.797-1.289-1.523-1.289-2.578s.445-1.758 1.29-2.578c3-2.907 9.89-7.828 9.89-14.555v-.562c0-2.532-1.43-3.844-3.82-3.844H16.515c-2.344 0-3.633 1.312-3.633 3.633v.773c0 6.727 6.89 11.648 9.914 14.555c.844.82 1.289 1.523 1.289 2.578s-.445 1.781-1.29 2.578c-3.023 2.86-9.913 8.11-9.913 14.578v.82c0 2.32 1.289 3.633 3.633 3.633m.867-36.14h21.234c.89 0 1.031.703.516 1.664c-2.11 3.797-9.211 9.89-11.133 9.89s-9.023-6.047-11.133-9.89c-.515-.961-.375-1.664.516-1.664" />
    </svg>

    <span
      class="absolute -bottom-6.5 left-4 px-3 py-1.5 rounded-full bg-secondary text-white text-xs font-bold whitespace-nowrap shadow-md">
      YOU
    </span>
  </div>
</template>