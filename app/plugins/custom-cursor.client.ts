export default defineNuxtPlugin(() => {
  const { init, cleanup } = useCustomCursor()

  const nuxtApp = useNuxtApp()

  nuxtApp.hook('app:mounted', () => {
    init()
  })

  if (import.meta.hot) {
    import.meta.hot.dispose(() => cleanup())
  }
})