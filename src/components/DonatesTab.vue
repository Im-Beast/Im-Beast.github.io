<template>
  <div class="flex flex-row w-full relative">
    <custom-tab class="min-h-59 md:max-w-1/3">
      <template v-slot:title>
        <img :src="'monero.svg'" class="inline h-4.5 mr-1" alt="monero logo" />
        Monero
      </template>
      <template v-slot:description>
        <p class="p-1">
          <a
            href="https://www.reddit.com/r/Monero/comments/niie3s/comment/gz3hdpp/?utm_source=share&utm_medium=web2x&context=3"
            ><q
              >I'm not a huge fan of crypto but lesser evil is definitely better
              than greater evil</q
            ></a
          >
          <br />
          ~ Genghis Khan or smth
        </p>
      </template>
      <template v-slot:footer>
        <div class="w-full flex flex-row">
          <code id="monero-address" class="overflow-x-auto"
            >89BoVWjqdGVe68wdxbYurXR8sXaEb96eWKYRPxdT6wSCfZYK6XSHoj5ZRXQLtd7GzL2B2PD7Lb7GSKupkXMWjQVFAEb1CK8</code
          >
          <button
            class="px-2 m-0 ml-3"
            @click="copyContents('#monero-address')"
          >
            📋
          </button>
          <button class="px-2 m-0 ml-1" @click="openQRCode">QR</button>
        </div>
      </template>
    </custom-tab>
  </div>
</template>

<script lang="ts" setup>
  import { ref } from "vue";
  import CustomTab from "./CustomTab.vue";

  const copyContents = (selector: string): void => {
    const element = document.querySelector(selector);
    if (!element)
      throw new Error("Element not found, couldn't copy its content");

    navigator.clipboard.writeText(element.textContent as string);
  };

  const openQRCode = () => {
    window.open("monero-qr-code.png", "_blank");
  };
</script>
