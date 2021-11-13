<template>
    <div class="rounded-lg bg-dark-300 border-r-3 border-r-dark-800 my-2 mx-1 w-full p-3">
        <h2
            class="border-b flex flex-row border-b-2 border-b-dark-800 text-lg p-1 truncate items-center"
        >
            <img v-if="$props.image" :src="$props.image" :alt="$props.platform" class="h-5 pr-1" />
            {{ $props.platform }}
        </h2>
        <p class="h-full py-3 px-1">
            <a v-if="$props.url" rel="noreferrer" :href="$props.url" target="_blank">{{ $props.handle }}</a>
            <p v-else>
            {{ $props.handle }}
            </p>
        </p>
        <div
            class="rounded-lg flex flex-row flex-wrap bg-dark-100 p-2 transform -translate-y-4/2 justify-evenly truncate"
        >Active {{ $props.active }}</div>
    </div>
</template>

<script setup lang="ts">
defineProps(["platform", "handle", "active", "image", "url"])
</script>