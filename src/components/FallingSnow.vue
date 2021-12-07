<template>
  <div ref="cloud" class="z-5 cloud fixed top-0 left-0 w-full h-full">
    <div
      ref="snowflake"
      class="snowflake select-none pointer-events-none top-0 absolute"
    >
      ❄️
    </div>
  </div>
</template>

<style scoped>
  .snowflake {
    --move-x: 0%;
    --move-y: 0;

    left: var(--move-x);

    animation: fallingSnow linear infinite 10s;
  }

  @keyframes fallingSnow {
    0% {
      top: -5vh;
    }

    33% {
      transform: translateX(-3rem) translateY(var(--move-y)) rotate(90deg);
    }

    66% {
      transform: translateX(3rem) translateY(var(--move-y)) rotate(180deg);
    }

    100% {
      transform: translateX(-3rem) translateY(var(--move-y)) rotate(360deg);
      top: 100%;
    }
  }
</style>

<script setup lang="ts">
  import { onMounted, ref } from "vue";

  const cloud = ref({} as HTMLElement);
  const snowflake = ref({} as HTMLElement);

  onMounted(() => {
    const snowPr = window.devicePixelRatio;

    for (let i = 0; i < 75 / snowPr; ++i) {
      const clone = snowflake.value?.cloneNode(true) as HTMLElement;

      const moveFlake = () => {
        clone.style.setProperty("--move-x", `${~~(Math.random() * 100)}%`);
        clone.style.setProperty("--move-y", `${~~(Math.random() * 100)}vh`);
      };

      moveFlake();
      setTimeout(() => cloud.value.append(clone), i * 90 * snowPr);
      clone.addEventListener("animationiteration", moveFlake);
    }
  });
</script>
