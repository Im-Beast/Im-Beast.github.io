<template>
  <div class="flex flex-row w-full relative">
    <button class="-right-2 handy-button" @click="changePage(1)">👉</button>
    <button class="-left-2 handy-button" @click="changePage(-1)">👈</button>

    <div
      class="
        flex flex-col
        rounded-lg
        bg-dark-300
        border-r-3 border-r-dark-800
        my-2
        mx-1
        min-h-53
        w-full
        p-3
      "
      v-for="{ name, description, license, stars, html_url } in repoPages[
        repoPage
      ]"
      :key="html_url"
    >
      <h2 class="border-b border-b-2 border-b-dark-800 text-lg p-1 truncate">
        {{ name }}
      </h2>
      <p class="p-1">{{ description }}</p>
      <div
        class="
          mt-auto
          rounded-lg
          flex flex-row
          text-center
          bg-dark-100
          p-2
          transform
          justify-evenly
        "
      >
        <p title="Repository stars">⭐ {{ stars }}</p>
        <p v-if="license" title="License">📝 {{ license }}</p>
        <p title="Repository page">
          📦
          <a :href="html_url" rel="noreferrer" target="_blank">Repo</a>
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .handy-button {
    @apply outline-none text-xl transform top-1/2 -translate-y-1/2 duration-50 absolute hover:text-2xl;
  }
</style>

<script lang="ts">
  import { ref, Ref, watch } from "vue";

  interface Repo {
    license: string;
    stars: number;
    name: string;
    html_url: string;
    url: string;
    description: string;
  }

  const repos: Ref<Repo[]> = ref(
    JSON.parse(localStorage.getItem("cached-repos") || "[]")
  );

  const cacheRepos = () => {
    repos.value = repos.value
      .reverse()
      .filter((v, i, a) => a.findIndex((t) => t.url === v.url) === i)
      .sort((a, b) => b.stars - a.stars);
    localStorage.setItem("cached-repos", JSON.stringify(repos.value));
  };

  void (async function () {
    try {
      const _orgs = await (
        await fetch("https://api.github.com/users/Im-Beast/orgs")
      ).json();
      const _repos = await (
        await fetch("https://api.github.com/users/Im-Beast/repos")
      ).json();

      for (const { url } of _orgs) {
        _repos.push(...(await (await fetch(`${url}/repos`)).json()));
      }

      for (const {
        name,
        url,
        html_url,
        description,
        fork,
        license,
        stargazers_count: stars,
      } of _repos) {
        const license_name = license?.spdx_id || "";

        if (!fork)
          repos.value.push({
            name,
            html_url,
            url,
            description,
            license: license_name === "NOASSERTION" ? "Other" : license_name,
            stars,
          });
      }
      cacheRepos();
    } catch (err) {
      console.error("Something happened", err);
    }
  })();

  const repoPage = ref(0);
  let reposPerPage = 3;

  function* chunkify<T>(array: T[], n: number) {
    for (let i = 0; i < array.length; i += n) {
      yield array.slice(i, i + n);
    }
  }

  const repoPages = ref([...chunkify<Repo>(repos.value, reposPerPage)]);

  const changePage = (diff: number) => {
    repoPage.value = (repoPage.value + diff) % repoPages.value.length;
    if (repoPage.value < 0) repoPage.value += repoPages.value.length;
  };

  watch(repos, () => {
    repoPages.value = [...chunkify(repos.value, reposPerPage)];
  });

  const adaptSize = () => {
    reposPerPage = Math.floor(
      Math.min(Math.max(window.innerWidth / 300, 1), 3)
    );
    repoPages.value = [...chunkify(repos.value, reposPerPage)];
  };

  window.addEventListener("resize", adaptSize);
  adaptSize();

  export default {
    data() {
      return {
        repos,
        repoPage,
        repoPages,
        changePage,
      };
    },
  };
</script>
