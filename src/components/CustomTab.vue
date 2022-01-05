<template>
  <div
    class="
      flex flex-col
      rounded-lg
      bg-dark-300
      border-r-3 border-r-dark-800
      my-2
      mx-1
      w-full
      p-2
    "
  >
    <h2
      class="
        border-b
        flex flex-row
        border-b-2 border-b-dark-800
        text-lg
        pt-1
        pb-3
        pl-2
        m-1
        truncate
        items-center
      "
    >
      <slot name="title"></slot>
    </h2>
    <p class="h-full p-1 pl-2">
      <slot name="description"></slot>
    </p>
    <div
      class="
        mt-auto
        rounded-lg
        flex flex-row
        text-center
        bg-dark-100
        p-2
        transform
        justify-evenly
      "
    >
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
  defineProps(["title", "handle", "active", "image", "url"]);
</script>
