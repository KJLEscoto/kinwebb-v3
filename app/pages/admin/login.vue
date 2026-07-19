<script setup lang="ts">
definePageMeta({
  layout: false,
})
</script>

<template>
  <div class="min-h-screen h-full w-full flex flex-col items-center justify-center p-8 relative z-10">
    <video autoplay muted loop playsinline webkit-playsinline preload="auto" disablepictureinpicture
      controlslist="nodownload noplaybackrate noremoteplayback" aria-hidden="true"
      class="absolute inset-0 w-full min-h-full h-screen object-cover">
      <source src="/videos/404.mp4" type="video/mp4" />
    </video>

    <main class="relative z-10 h-full flex items-center justify-center p-8 w-full">
      <form class="w-full max-w-sm">
        <div class="flex flex-col gap-4 w-full p-8 rounded-2xl bg-[#1f1f1f]/80 backdrop-blur-xs">
          <h1 class="text-2xl font-semibold text-center">Admin Login</h1>
          <input type="email" placeholder="Email Address"
            class="px-4 py-3 border border-white/5 rounded-full focus:outline-none focus:ring-2 focus:ring-primary" />
          <input type="password" placeholder="Password"
            class="px-4 py-3 border border-white/5 rounded-full focus:outline-none focus:ring-2 focus:ring-primary" />
          <button type="submit"
            class="px-4 py-3 bg-primary text-white rounded-full hover:bg-primary transition hover:opacity-80 active:scale-95 duration-200">Login</button>
      </div>
      </form>
    </main>
  </div>

</template>