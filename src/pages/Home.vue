<template>
	<header
		class="flex flex-col md:flex-row items-center mx-auto w-9/10 p-5 rounded-4xl my-5 shadow-cool text-dark bg-light dark:text-light dark:bg-dark"
	>
		<img
			src="https://avatars.githubusercontent.com/u/47059999?v=4"
			class="rounded-full w-65 md:w-50 shadow-cool my-2 mx-5"
			alt="Im-Beast's github pfp"
		/>

		<section>
			<h1 class="text-2xl font-bold mb-3">Im-Beast</h1>
			<p>
				Hi! my name is Mateusz. <br /><br />
				I'm 16 years old and I really enjoy programming, I do it since 4th grade of
				elementary school. <br />
				Since right now I'm in high school I do it in my free time.
				<br />
				<br />
				Down there you can see some of my github repos. <br />
				However most of stuff I do are prototypes and private projects.
			</p>
		</section>
	</header>
	<main>
		<repo-list />
	</main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import RepoList from '../components/RepoList.vue'

export default defineComponent({
	components: {
		RepoList,
	},
})
</script>
