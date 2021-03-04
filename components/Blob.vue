<template>
  <div id="blob"></div>
</template>

<script>
export default {}
</script>

<style lang="scss">
@import '../assets/scss/theme.scss';

#blob:before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  background: linear-gradient(135deg, $mainThemeColor, $secondaryThemeColor);
  width: 160vh;
  height: 110vh;
  transform: translate(-26vh, -31vh) skewX(-15deg) skewY(9deg) rotate(180deg);
  border-radius: 80% 100% 60% 60%/80% 115% 70%;
  z-index: -1;
}
</style>
