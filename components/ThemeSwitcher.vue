<template>
  <div id="themeSwitch">
    <img
      v-if="!light"
      src="../static/light.svg"
      alt="Theme switcher"
      @click="light = !light"
    />
    <img
      v-if="light"
      src="../static/dark.svg"
      alt="Theme switcher"
      @click="light = !light"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      light: false,
    }
  },
  watch: {
    light() {
      document.body.className = this.light ? 'light' : 'dark'
      document.cookie = this.light
    },
  },
  mounted() {
    this.light = document.cookie === 'true'
  },
}
</script>

<style lang="scss" scoped>
#themeSwitch {
  position: relative;
  cursor: pointer;
}
</style>
