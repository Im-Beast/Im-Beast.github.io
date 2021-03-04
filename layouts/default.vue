<template>
  <div>
    <Blob />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
export default {
  mounted() {
    document.body.classList.add(document.cookie === 'true' ? 'light' : 'dark')
  },
}
</script>

<style lang="scss">
@import '../assets/scss/theme.scss';

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  display: flex;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
}

button {
  cursor: pointer;
  transition: background-color 0.3s;
  background-color: var(--backgroundColor);
  border: none;
  outline: none;
  color: white;
  padding: 12px 24px;
  margin: 5px;
  font-size: 15px;
  border-radius: 25px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.7);
}

button:hover {
  background-color: $mainThemeColor;
}

button:disabled {
  background-color: #848484;
}

body {
  max-width: 1250px;

  overflow-x: hidden;

  background-color: var(--backgroundColor);
  color: var(--textColor);
}

a {
  transition: color 0.3s;
  color: $secondaryThemeColor;
  text-decoration: none;
}

a:hover {
  color: $mainThemeColor;
  text-decoration: underline;
}

::-webkit-scrollbar {
  width: 6px;

  &-thumb {
    background-color: #23a0ff;
    border-radius: 25px;
  }
  &-track {
    background: rgba(0, 0, 0, 0);
  }
}
</style>
