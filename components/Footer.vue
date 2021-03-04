<template>
  <footer>
    <p>
      Made by
      <a href="https://github.com/Im-Beast" target="_blank"> Im-Beast </a>
      with ❤️
    </p>
    <ThemeSwitcher />
  </footer>
</template>

<script>
export default {}
</script>

<style lang="scss">
@import '../assets/scss/theme.scss';
footer {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;

  border-radius: 25px;

  margin-top: 30px;
  margin-left: 10px;
  margin-right: 10px;

  box-shadow: 0 0 25px rgba(0, 0, 0, 0.5);

  padding: 20px;

  color: var(--textColor);
  background-color: var(--backgroundColor);

  p {
    text-align: center;
  }

  * {
    margin-left: auto;
  }
}
</style>
