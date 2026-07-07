<template>
  <div class="relative flex items-end justify-start min-h-screen px-6 py-10 sm:px-10 md:px-16 lg:px-20 overflow-hidden">
    <img src="/images/hero_image.jpg" alt="Hero Image"
      class="w-full object-cover min-h-auto h-screen absolute inset-0 select-none" draggable="false" />
    <p
      class="font-secondary italic text-2xl sm:text-3xl md:text-4xl absolute top-[20%] left-[8%] sm:top-[35%] sm:left-[20%] md:top-[40%] xl:left-[35%]">
      Hey!..
    </p>
    <div class="relative z-10 space-y-4 sm:space-y-5 pb-6 sm:pb-0">
      <section class="flex items-end flex-wrap md:gap-4 sm:gap-2 gap-0">
        <h1
          class="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-tertiary leading-none! bg-linear-to-r from-secondary to-primary bg-clip-text text-transparent">
          I’ll Be Back Soon!
        </h1>
        <p
          class="block sm:inline text-xl sm:text-2xl md:text-3xl font-secondary italic mt-2 sm:mt-0 text-nowrap text-secondary">
          I Promise...
        </p>
      </section>
      <p class="w-full sm:w-3/4 text-base sm:text-lg md:text-xl">
        It’s just that I am currently working on a fresh new version of this website... with better content, cleaner
        visuals,
        and updated project showcases.
      </p>
      <section class="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
        <a href="mailto:kin.webb.1024@gmail.com"
          class="rounded-full bg-white px-6 sm:px-8 py-3 flex items-center justify-center gap-2 hover:opacity-80 active:scale-95 duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" class="size-5 sm:size-6 text-primary shrink-0" viewBox="0 0 24 24">
            <path d="M0 0h24v24H0z" fill="none" />
            <path fill="currentColor"
              d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2zm-2 0l-8 5l-8-5zm0 12H4V8l8 5l8-5z" />
          </svg>
          <p class="font-semibold text-primary text-sm sm:text-base">LET'S CHAT</p>
        </a>
        <a href="https://old-kinwebb.netlify.app/" target="_blank"
          class="px-6 sm:px-8 py-3 border border-white/20 hover:border-white/60 duration-300 rounded-full flex items-center justify-center gap-2">
          <p class="font-semibold text-white text-sm sm:text-base">MY OLD WEBSITE</p>
          <svg xmlns="http://www.w3.org/2000/svg" class="size-5 sm:size-6 text-white shrink-0" viewBox="0 0 24 24">
            <path d="M0 0h24v24H0z" fill="none" />
            <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M7 17L17 7M7 7h10v10" />
          </svg>
        </a>
      </section>
    </div>
  </div>
</template>