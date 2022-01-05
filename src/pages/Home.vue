<template>
  <app-blob />

  <home-hello />

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
          class="rounded-lg h-full h-max-40 mr-3"
          src="https://avatars.githubusercontent.com/u/47059999?v=4"
          alt="Im-Beast avatar (Mat, not Pat)"
          title="This is actually Mat, not Pat"
        />
      </section>

      <section
        class="text-lg ml-3 text-blue-300 whitespace-pre-line hyphens-auto"
      >
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
      <section class="flex flex-row w-full">
        <button class="!ml-0" @click="currentTab = tabs.githubProjects">
          Github projects
        </button>
        <button @click="currentTab = tabs.donates">Donate</button>
      </section>
      <hr class="border-dark-800 border-b-2 w-full ring-0" />
      <section id="tab" class="w-full h-full">
        <component :is="currentTab"></component>
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
        Contact
      </p>
      <contacts-list />
    </section>
  </main>

  <app-footer />
</template>

<script setup lang="ts">
  import AppBlob from "../components/AppBlob.vue";
  import HomeHello from "../components/HomeHello.vue";
  import ContactsList from "../components/ContactsList.vue";
  import AppFooter from "../components/AppFooter.vue";

  import GithubProjectsTab from "../components/GithubProjectsTab.vue";
  import DonatesTab from "../components/DonatesTab.vue";

  import { shallowRef } from "vue";

  const tabs = {
    githubProjects: GithubProjectsTab,
    donates: DonatesTab,
  };

  const currentTab = shallowRef(tabs.githubProjects as any);
</script>
