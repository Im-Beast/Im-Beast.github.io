<template>
	<header
		class="bg-light flex flex-col mx-auto rounded-4xl shadow-cool my-5 text-dark p-5 w-9/10 items-center md:flex-row dark:bg-dark dark:text-light"
	>
		<img
			src="https://avatars.githubusercontent.com/u/47059999?v=4"
			class="rounded-full shadow-cool my-2 mx-5 w-65 md:w-50"
			alt="Im-Beast's github pfp"
		/>

		<section>
			<h1 class="font-bold mb-3 text-2xl">Im-Beast</h1>
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
		<contact-list />
	</main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import RepoList from '../components/RepoList.vue'
import ContactList from '../components/ContactList.vue'

export default defineComponent({
	components: {
		RepoList,
		ContactList,
	},
})
</script>
