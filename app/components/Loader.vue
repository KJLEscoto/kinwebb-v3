<template>
  <div class="fixed inset-0 z-10000 flex flex-col gap-4 items-center justify-center bg-black/60 backdrop-blur-xl">
    <img src="/gif/loader.gif" alt="Loading" class="size-42" />
    <p class="text-sm text-white flex items-center">
      Any minute now
      <span class="inline-flex ml-0.5">
        <span class="dot">.</span>
        <span class="dot">.</span>
        <span class="dot">.</span>
      </span>
    </p>
  </div>
</template>

<style scoped>
.dot {
  opacity: 0.2;
  animation: blink 1.4s infinite;
}

.dot:nth-child(1) {
  animation-delay: 0s;
}

.dot:nth-child(2) {
  animation-delay: 0.2s;
}

.dot:nth-child(3) {
  animation-delay: 0.4s;
}

@keyframes blink {

  0%,
  80%,
  100% {
    opacity: 0;
  }

  40% {
    opacity: 1;
  }
}
</style>