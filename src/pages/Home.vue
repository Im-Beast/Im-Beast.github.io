<template>
  <app-blob />

  <home-hello />

  <flying-fireworks />

  <main>
    <section
      class="
        rounded-lg
        flex flex-col
        bg-dark-400
        border-3 border-dark-800
        mx-3
        mt-5
        max-w-200
        p-3
        -translate-x-1/2
        items-center
        md:flex-row md:mx-auto md:items-start
        lg:transform lg:w-3/4
      "
    >
      <section class="min-w-max">
        <img
          @pointerenter="hovered = true"
          @pointerleave="hovered = false"
          class="rounded-lg h-full h-max-45 mr-3"
          src="https://avatars.githubusercontent.com/u/47059999?v=4"
          alt="Im-Beast avatar (Mat, not Pat)"
          title="This is actually Mat, not Pat"
        />
      </section>

      <section
        class="text-lg ml-3 text-blue-300 whitespace-pre-line hyphens-auto"
      >
        <p
          class="
            text-center text-purple-300
            pb-2
            font-bold
            border-b-3 border-dark-800
          "
        >
          🎉 Happy
          <span v-if="new Date().getFullYear() !== 2022">
            (soon – <span id="ny-time">{{ newYearTime }}</span
            >)
          </span>
          new year
          <span style="display: inline-block; transform: scaleX(-1)">🎉</span>
        </p>
        <p class="font-bold my-2 text-xl text-center p-3 md:text-left md:p-0">
          Hello, my name is Mateusz
          <abbr title="also known as">aka</abbr>
          Beast.
        </p>
        <p class="my-2">
          I'm 16 years old high school student which really enjoys programming,
          I started learning it since I was 9 years old.
        </p>
        <p>
          Currently school is holding me back from spending much time on it.
        </p>
      </section>
    </section>

    <section
      class="
        rounded-lg
        flex flex-col
        font-semibold
        bg-dark-400
        border-3 border-dark-800
        mx-3
        mt-5
        text-white
        max-w-200
        p-3
        -translate-x-1/2
        items-center
        md:mx-auto md:items-start
        lg:transform lg:w-3/4
      "
    >
      <p class="border-b-3 border-b-dark-800 text-lg w-full p-2 pt-0">
        Github projects
      </p>
      <repo-list />
    </section>

    <section
      class="
        rounded-lg
        flex flex-col
        font-semibold
        bg-dark-400
        border-3 border-dark-800
        mx-3
        mt-5
        text-white
        max-w-200
        p-3
        -translate-x-1/2
        items-center
        md:mx-auto md:items-start
        lg:transform lg:w-3/4
      "
    >
      <p class="border-b-3 border-b-dark-800 text-lg w-full p-2 pt-0">
        Contact
      </p>
      <contacts-list />
    </section>
  </main>

  <app-footer />
</template>

<script setup lang="ts">
  import { onMounted, ref } from "vue";

  import FlyingFireworks from "../components/FlyingFireworks.vue";
  import AppBlob from "../components/AppBlob.vue";
  import HomeHello from "../components/HomeHello.vue";
  import RepoList from "../components/RepoList.vue";
  import ContactsList from "../components/ContactsList.vue";
  import AppFooter from "../components/AppFooter.vue";

  let hovered = false;

  const newYearTime = ref("Eternity!");
  const is2022 = ref(false);

  onMounted(() => {
    const time = document.querySelector("#ny-time") as HTMLElement;
    const interval = setInterval(() => {
      const newYear = new Date("Jan 1 2022").getTime();
      // seconds
      let currentTill = (newYear - Date.now()) / 1000;
      let text = "";

      if (currentTill <= 0) {
        is2022.value = true;
        clearInterval(interval);
        return;
      }

      if (currentTill < 60) time.style.color = "rgb(255,110,110)";
      else if (currentTill < 10 * 60) time.style.color = "rgb(255,155,110)";
      else if (currentTill < 60 * 60) time.style.color = "rgb(255,255,110)";

      // hours
      if (currentTill > 60 * 60) {
        const hours = ~~(currentTill / (60 * 60));
        text += `${hours}h `.padStart(4, "0");
        currentTill -= hours * 60 * 60;
      }

      // minutes
      if (currentTill > 60) {
        const minutes = ~~(currentTill / 60);
        text += `${minutes}m `.padStart(4, "0");
        currentTill -= minutes * 60;
      }

      // seconds
      if (currentTill > 0) {
        const seconds = ~~currentTill;
        text += `${seconds}s`.padStart(3, "0");
        currentTill -= seconds * 60;
      }

      newYearTime.value = text;
    }, 250);
  });
</script>
