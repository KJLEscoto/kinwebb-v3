<script setup lang="ts">
const facebook = 'https://www.facebook.com/kentoy.newt'
const linkedin = 'https://www.linkedin.com/in/kent-joemar-escoto-646b92265'
const instagram = 'https://www.instagram.com/_itskjle/'
const dribbble = 'https://dribbble.com/kinwebb'
const github = 'https://github.com/KJLEscoto'

const isScrolled = ref(false)

function handleScroll() {
  isScrolled.value = window.scrollY > 10
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <div class="fixed top-0 left-0 right-0 z-50 px-6 py-6 sm:px-10 md:px-16 lg:px-20 transition-colors duration-300"
    :class="isScrolled ? 'bg-white/20 backdrop-blur-xs' : 'bg-transparent'">
    <div class="flex items-center gap-4 justify-between">
      <a href="/" class="w-fit h-fit">
        <ClientOnly>
          <img src="/meta/red_icon.png" alt="KinWebb Logo"
            class="size-8 sm:size-10 inline-block active:scale-95 duration-200 hover:opacity-80" />
        </ClientOnly>
      </a>

      <div class="flex gap-4 items-center">

        <a :href="dribbble" target="_blank">
          <svg xmlns="http://www.w3.org/2000/svg" class="size-7 hover:opacity-80 active:scale-95 duration-200"
            viewBox="0 0 24 24">
            <path d="M0 0h24v24H0z" fill="none" />
            <g fill="none">
              <path
                d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
              <path fill="currentColor"
                d="M13.774 14.439a32.8 32.8 0 0 1 1.536 7A10 10 0 0 1 12 22a9.95 9.95 0 0 1-5.567-1.692a12.03 12.03 0 0 1 7.34-5.87Zm7.799.463a10.02 10.02 0 0 1-4.355 5.63a35 35 0 0 0-1.46-6.468a12.06 12.06 0 0 1 5.815.838m-9.428-4.417q.499 1.018.93 2.073a14.03 14.03 0 0 0-8.207 6.451a10.08 10.08 0 0 1-2.827-7.922c3.343.708 6.87.502 10.104-.602m7.575-4.841a10.07 10.07 0 0 1 2.24 7.26a14.1 14.1 0 0 0-6.9-.77a35 35 0 0 0-1.055-2.398a19 19 0 0 0 5.715-4.092M7.266 3.19a33 33 0 0 1 3.93 5.502a17.13 17.13 0 0 1-8.776.43A10.03 10.03 0 0 1 7.266 3.19M12 2c2.388 0 4.581.837 6.3 2.234a17 17 0 0 1-5.22 3.726a35 35 0 0 0-3.86-5.568A10 10 0 0 1 12 2" />
            </g>
          </svg>
        </a>

        <a :href="github" target="_blank">
          <svg xmlns="http://www.w3.org/2000/svg" class="size-7 hover:opacity-80 active:scale-95 duration-200"
            viewBox="0 0 24 24">
            <path d="M0 0h24v24H0z" fill="none" />
            <path fill="currentColor" fill-rule="evenodd"
              d="M12 2C6.475 2 2 6.475 2 12a9.99 9.99 0 0 0 6.838 9.488c.5.087.687-.213.687-.476c0-.237-.013-1.024-.013-1.862c-2.512.463-3.162-.612-3.362-1.175c-.113-.288-.6-1.175-1.025-1.413c-.35-.187-.85-.65-.013-.662c.788-.013 1.35.725 1.538 1.025c.9 1.512 2.338 1.087 2.912.825c.088-.65.35-1.087.638-1.337c-2.225-.25-4.55-1.113-4.55-4.938c0-1.088.387-1.987 1.025-2.687c-.1-.25-.45-1.275.1-2.65c0 0 .837-.263 2.75 1.024a9.3 9.3 0 0 1 2.5-.337c.85 0 1.7.112 2.5.337c1.912-1.3 2.75-1.024 2.75-1.024c.55 1.375.2 2.4.1 2.65c.637.7 1.025 1.587 1.025 2.687c0 3.838-2.337 4.688-4.562 4.938c.362.312.675.912.675 1.85c0 1.337-.013 2.412-.013 2.75c0 .262.188.574.688.474A10.02 10.02 0 0 0 22 12c0-5.525-4.475-10-10-10" />
          </svg>
        </a>

        <a :href="facebook" target="_blank">
          <svg xmlns="http://www.w3.org/2000/svg" class="size-7 hover:opacity-80 active:scale-95 duration-200"
            viewBox="0 0 24 24">
            <path d="M0 0h24v24H0z" fill="none" />
            <path fill="currentColor"
              d="M12 2.04c-5.5 0-10 4.49-10 10.02c0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89c1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02" />
          </svg>
        </a>

        <a :href="instagram" target="_blank">
          <svg xmlns="http://www.w3.org/2000/svg" class="size-7 hover:opacity-80 active:scale-95 duration-200"
            viewBox="0 0 24 24">
            <path d="M0 0h24v24H0z" fill="none" />
            <path fill="currentColor"
              d="M13.028 2c1.125.003 1.696.009 2.189.023l.194.007c.224.008.445.018.712.03c1.064.05 1.79.218 2.427.465c.66.254 1.216.598 1.772 1.153a4.9 4.9 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428c.012.266.022.487.03.712l.006.194c.015.492.021 1.063.023 2.188l.001.746v1.31a79 79 0 0 1-.023 2.188l-.006.194c-.008.225-.018.446-.03.712c-.05 1.065-.22 1.79-.466 2.428a4.9 4.9 0 0 1-1.153 1.772a4.9 4.9 0 0 1-1.772 1.153c-.637.247-1.363.415-2.427.465l-.712.03l-.194.006c-.493.014-1.064.021-2.189.023l-.746.001h-1.309a78 78 0 0 1-2.189-.023l-.194-.006a63 63 0 0 1-.712-.031c-1.064-.05-1.79-.218-2.428-.465a4.9 4.9 0 0 1-1.771-1.153a4.9 4.9 0 0 1-1.154-1.772c-.247-.637-.415-1.363-.465-2.428l-.03-.712l-.005-.194A79 79 0 0 1 2 13.028v-2.056a79 79 0 0 1 .022-2.188l.007-.194c.008-.225.018-.446.03-.712c.05-1.065.218-1.79.465-2.428A4.9 4.9 0 0 1 3.68 3.678a4.9 4.9 0 0 1 1.77-1.153c.638-.247 1.363-.415 2.428-.465c.266-.012.488-.022.712-.03l.194-.006a79 79 0 0 1 2.188-.023zM12 7a5 5 0 1 0 0 10a5 5 0 0 0 0-10m0 2a3 3 0 1 1 .001 6a3 3 0 0 1 0-6m5.25-3.5a1.25 1.25 0 0 0 0 2.5a1.25 1.25 0 0 0 0-2.5" />
          </svg>
        </a>

        <a :href="linkedin" target="_blank">
          <svg xmlns="http://www.w3.org/2000/svg" class="size-7 hover:opacity-80 active:scale-95 duration-200"
            viewBox="0 0 16 16">
            <path d="M0 0h16v16H0z" fill="none" />
            <path fill="currentColor" fill-rule="evenodd"
              d="M3 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zm1.102 4.297a1.195 1.195 0 1 0 0-2.39a1.195 1.195 0 0 0 0 2.39m1 7.516V6.234h-2v6.579zM6.43 6.234h2v.881c.295-.462.943-1.084 2.148-1.084c1.438 0 2.219.953 2.219 2.766c0 .087.008.484.008.484v3.531h-2v-3.53c0-.485-.102-1.438-1.18-1.438c-1.079 0-1.17 1.198-1.195 1.982v2.986h-2z"
              clip-rule="evenodd" />
          </svg>
        </a>

      </div>
    </div>
  </div>
</template>