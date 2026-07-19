<!-- error.vue (Nuxt root error page) -->
<script setup lang="ts">
import { useError, clearError } from '#app'

const error = useError()
console.log(error)

const router = useRouter()
const goBack = () => clearError().then(() => router.back())
</script>

<template>
  <CustomCursor />
  <div class="min-h-screen h-full w-full flex flex-col items-center justify-center p-8 relative z-10">
    <video autoplay muted loop playsinline webkit-playsinline preload="auto" disablepictureinpicture
      controlslist="nodownload noplaybackrate noremoteplayback" aria-hidden="true"
      class="absolute inset-0 w-full min-h-full h-screen object-cover">
      <source src="/videos/404.mp4" type="video/mp4" />
    </video>
    <img src="/meta/white_icon.png" alt="Loading" class="size-8 sm:size-10 shrink-0 absolute z-20 top-6 object-cover" />
    <div class="relative z-10 sm:gap-8 gap-4 flex flex-col items-center justify-center w-full">
      <section class="space-y-2 sm:space-y-5">
        <h1
          class="text-6xl text-center sm:text-6xl md:text-7xl lg:text-8xl font-tertiary leading-none! bg-linear-to-r from-secondary to-primary bg-clip-text text-transparent">
          {{ error?.statusCode ?? '?' }}
        </h1>
        <h1 class="font-secondary text-center italic text-2xl sm:text-3xl md:text-4xl text-primary">
          {{ error?.statusMessage ?? 'Something went wrong' }}
        </h1>
      </section>
      <p class="w-full lg:w-1/3 text-center text-base sm:text-lg md:text-xl">Oops! The page you’re looking for doesn’t
        exist, may have
        been moved, or is temporarily unavailable.</p>
      <button @click="goBack"
        class="px-6 sm:px-8 py-3 border border-white/20 hover:border-white/60 duration-300 rounded-full flex items-center justify-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" class="size-5 sm:size-6 text-white shrink-0" viewBox="0 0 24 24">
          <path d="M0 0h24v24H0z" fill="none" />
          <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M5 12h14M5 12l6 6m-6-6l6-6" />
        </svg>
        <p class="font-semibold text-white text-sm sm:text-base">GO BACK</p>
      </button>
    </div>
  </div>
</template>