<template>
  <div id="app">
    <header>
      <img
        class="pfp"
        src="https://avatars.githubusercontent.com/u/47059999?s=9999&u=428ed352363da0755e92c8cf5a0b88d1c29aac69&v=4"
        alt="Im-Beast profile picture"
      />
      <div>
        <h1>Im-Beast</h1>
        <p>Hi, I'm Beast and this is my main website</p>
        <br />
        <p>
          Down there you can see some of my projects that I was or I am working
          on
        </p>
      </div>
    </header>
    <main>
      <div v-if="pages.length > 1" id="pageButtons">
        <button :disabled="disabledLeft" @click="page--">&lt;</button>
        <p>Page {{ page + 1 }}/{{ pages.length }}</p>
        <button :disabled="disabledRight" @click="page++">&gt;</button>
      </div>
      <div id="projects" :class="slideClass">
        <Project v-for="item in items" :key="item.id" :item="item" />
      </div>
    </main>
  </div>
</template>

<script>
import Project from '../components/Project.vue'
export default {
  components: { Project },
  layout: 'default',
  data() {
    return {
      page: 0,
      lastPage: 0,
      slideClass: '',
      disabledLeft: false,
      disabledRight: false,
      pages: [],
      items: [],
    }
  },
  watch: {
    page(val) {
      const limit = this.pages.length

      this.slideClass =
        val > this.lastPage
          ? 'slideLeft'
          : val < this.lastPage
          ? 'slideRight'
          : ''

      this.page = val >= this.pages.length ? limit - 1 : val < 0 ? 0 : val

      this.disabledLeft = this.page <= 0
      this.disabledRight = this.page >= limit - 1

      this.items = this.pages[this.page]
      this.lastPage = val
    },
  },
  async mounted() {
    const items = await (
      await fetch('https://api.github.com/users/Im-Beast/repos')
    ).json()

    for (let i = 0; i < items.length; i = i + 6) {
      this.pages.push([...items.splice(0, 6)])
    }

    this.disabledLeft = this.page <= 0
    this.disabledRight = this.page >= this.pages.length - 1

    this.items = this.pages[this.page]
  },
}
</script>

<style lang="scss">
@import '../assets/scss/theme.scss';

@keyframes slide-left {
  from {
    transform: translate(-500px, 0);
    opacity: 0;
  }
  to {
    transform: translate(0, 0);
    opacity: 1;
  }
}

@keyframes slide-right {
  from {
    transform: translate(500px, 0);
    opacity: 0;
  }
  to {
    transform: translate(0, 0);
    opacity: 1;
  }
}

.slideLeft {
  animation: slide-left 1s;
}

.slideRight {
  animation: slide-right 1s;
}

header {
  background-color: var(--backgroundColor);
  color: var(--textColor);

  display: flex;

  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;

  padding: 20px;

  margin: 10px;

  border-radius: 25px;

  box-shadow: 0 0 25px rgba(0, 0, 0, 0.5);

  > * {
    margin: 15px;
    justify-content: center;
    display: flex;
    flex-direction: column;
  }

  .pfp {
    width: 14rem;
    border-radius: 50%;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
  }
}

#projects,
#pageButtons {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
}
</style>
