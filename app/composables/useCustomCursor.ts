type CursorType = 'default' | 'pointer' | 'not-allowed' | 'text' | 'wait'

const STORAGE_KEY = 'custom-cursor-pos'
const ACTIVE_CLASS = 'custom-cursor-active'

// module-level state = singleton, shared by every consumer of the composable
const x = ref(0)
const y = ref(0)
const isVisible = ref(false)
const isTouch = ref(false)
const showHelp = ref(false)
const cursorType = ref<CursorType>('default')

let initialized = false

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

function updateCursorFromPoint(clientX: number, clientY: number) {
  const target = document.elementFromPoint(clientX, clientY) as HTMLElement | null
  if (!target) return

  cursorType.value = resolveCursorType(target)
  showHelp.value = !!target.closest('[data-cursor-help]')
}

function handleMouseMove(e: MouseEvent) {
  x.value = e.clientX
  y.value = e.clientY
  isVisible.value = true

  const target = e.target as HTMLElement
  cursorType.value = resolveCursorType(target)
  showHelp.value = !!target.closest('[data-cursor-help]')

  sessionStorage.setItem(STORAGE_KEY, JSON.stringify({ x: e.clientX, y: e.clientY }))
}

function handleMouseLeave() {
  isVisible.value = false
}

function init() {
  if (initialized || import.meta.server) return
  initialized = true

  isTouch.value = window.matchMedia('(pointer: coarse)').matches
  if (isTouch.value) return

  // this class, not a CSS media query, is the single source of truth
  // for hiding the native cursor — keeps JS + CSS from disagreeing
  document.documentElement.classList.add(ACTIVE_CLASS)

  const saved = sessionStorage.getItem(STORAGE_KEY)
  if (saved) {
    try {
      const { x: savedX, y: savedY } = JSON.parse(saved)
      x.value = savedX
      y.value = savedY
      isVisible.value = true
      updateCursorFromPoint(savedX, savedY)
    } catch {
      // ignore malformed storage value
    }
  }

  window.addEventListener('mousemove', handleMouseMove)
  document.addEventListener('mouseleave', handleMouseLeave)
}

function cleanup() {
  if (!initialized) return
  initialized = false

  document.documentElement.classList.remove(ACTIVE_CLASS)
  window.removeEventListener('mousemove', handleMouseMove)
  document.removeEventListener('mouseleave', handleMouseLeave)
}

export function useCustomCursor() {
  return {
    x,
    y,
    isVisible,
    isTouch,
    showHelp,
    cursorType,
    init,
    cleanup,
  }
}