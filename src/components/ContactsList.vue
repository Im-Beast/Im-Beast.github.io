<template>
  <div
    class="
      flex flex-row flex-shrink
      w-full
      relative
      overflow-x-auto overflow-y-hidden
    "
  >
    <contact-div
      platform="Discord"
      url="https://discord.com/users/415926077144432642"
      handle="Beast#6968"
      image="discord.svg"
      active="Daily"
    />
    <contact-div
      platform="Github"
      url="https://github.com/Im-Beast"
      handle="Im-Beast"
      image="github.svg"
      active="Daily"
    />
    <contact-div
      platform="Steam"
      url="https://steamcommunity.com/id/im_beast"
      handle="Im_Beast"
      image="steam.svg"
      active="Often"
    />
    <contact-div
      platform="Twitter"
      url="https://twitter.com/1m_Beast"
      handle="1m_Beast"
      image="twitter.svg"
      active="Rarely"
    />
  </div>
</template>

<script setup lang="ts">
  import ContactDiv from "./ContactTab.vue";
</script>
