<template>
  <div ref="cloud" class="cloud fixed top-0 left-0 w-full h-full">
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
    --test: 0%;
    --move-y: 0;

    left: var(--test);

    animation: fallingSnow linear infinite 10s;
  }

  @keyframes fallingSnow {
    0% {
      top: 0;
    }

    33% {
      transform: translateX(-3rem) translateY(var(--move-y));
    }

    66% {
      transform: translateX(5rem) translateY(var(--move-y));
    }

    99% {
      transform: translateX(-3rem) translateY(var(--move-y));
    }

    100% {
      top: 100%;
    }
  }
</style>

<script setup lang="ts">
  import { onMounted, ref } from "vue";

  const cloud = ref({} as HTMLElement);
  const snowflake = ref({} as HTMLElement);

  onMounted(() => {
    for (let i = 0; i < 100; ++i) {
      const clone = snowflake.value?.cloneNode(true) as HTMLElement;

      clone.style.setProperty("--test", `${~~(Math.random() * 100)}%`);
      clone.style.setProperty("--move-y", `${~~(Math.random() * 100)}vh`);

      setTimeout(() => cloud.value.append(clone), i * 90);
    }
  });
</script>
