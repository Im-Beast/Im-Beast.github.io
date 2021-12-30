<template>
  <div
    ref="modal"
    class="
      h-full
      w-full
      top-0
      left-0
      z-5
      modal
      fixed
      select-none
      pointer-events-none
    "
  >
    <div
      ref="firework"
      class="top-0 firework select-none pointer-events-none absolute"
    >
      💥
    </div>
  </div>
</template>

<style scoped>
  .firework {
    --move-x: 0%;
    --move-y: 0;

    left: var(--move-x);

    animation: fallingSnow ease-in-out infinite 3s;
  }

  @keyframes fallingSnow {
    0% {
      top: 100%;
      transform: scale(0%);
    }

    33% {
      transform: translateX(-4rem) translateY(var(--move-y)) rotate(90deg)
        scale(0%);
    }

    50% {
      transform: scale(0%);
    }

    66% {
      transform: translateX(4rem) translateY(var(--move-y)) rotate(180deg)
        scale(0%);
    }

    100% {
      transform: translateX(-4rem) translateY(var(--move-y)) rotate(360deg)
        scale(150%);
      top: -5vh;
    }
  }
</style>

<script setup lang="ts">
  import { onMounted, ref } from "vue";

  const modal = ref({} as HTMLElement);
  const firework = ref({} as HTMLElement);

  onMounted(() => {
    const pr = window.devicePixelRatio;

    for (let i = 0; i < 40 / pr; ++i) {
      const clone = firework.value?.cloneNode(true) as HTMLElement;

      const moveFlake = () => {
        clone.style.setProperty("--move-x", `${~~(Math.random() * 100)}%`);
        clone.style.setProperty("--move-y", `${~~(Math.random() * 100)}vh`);
      };

      moveFlake();
      setTimeout(() => modal.value.append(clone), i * 90 * pr);
      clone.addEventListener("animationiteration", moveFlake);
    }
  });
</script>
