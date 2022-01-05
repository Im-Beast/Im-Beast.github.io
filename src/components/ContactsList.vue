<template>
  <div
    class="
      flex flex-row flex-shrink
      w-full
      relative
      overflow-x-auto overflow-y-hidden
    "
  >
    <custom-tab>
      <template v-slot:title>
        <img :src="'discord.svg'" class="h-4.5 mr-1" alt="discord logo" />
        Discord
      </template>
      <template v-slot:description>
        <a href="https://discord.com/users/415926077144432642">Beast#6968</a>
      </template>
      <template v-slot:footer> Active daily </template>
    </custom-tab>

    <custom-tab>
      <template v-slot:title>
        <img :src="'github.svg'" class="h-4.5 mr-1" alt="github logo" /> Github
      </template>
      <template v-slot:description>
        <a href="https://github.com/Im-Beast">Im-Beast</a>
      </template>
      <template v-slot:footer> Active daily </template>
    </custom-tab>

    <custom-tab>
      <template v-slot:title>
        <img :src="'steam.svg'" class="h-4.5 mr-1" alt="steam logo" /> Steam
      </template>
      <template v-slot:description>
        <a href="https://steamcommunity.com/id/im_beast">Im_Beast</a>
      </template>
      <template v-slot:footer> Active Often </template>
    </custom-tab>

    <custom-tab>
      <template v-slot:title>
        <img :src="'twitter.svg'" class="h-4.5 mr-1" alt="twitter logo" />
        Twitter
      </template>
      <template v-slot:description>
        <a href="https://twitter.com/1m_Beast">1m_Beast</a>
      </template>
      <template v-slot:footer> Active Rarely </template>
    </custom-tab>
  </div>
</template>

<script setup lang="ts">
  import CustomTab from "./CustomTab.vue";
</script>
