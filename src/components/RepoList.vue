<template>
	<div
		class="bg-light flex flex-row mx-auto rounded-4xl shadow-cool my-5 text-dark p-5 w-9/10 relative justify-center items-center overflow-hidden dark:bg-dark dark:text-light"
	>
		<div v-if="!fetched" class="text-center">
			<span
				class="text-dark text-center animate-spin text-6xl material-icons pointer-events-none select-none dark:text-light"
			>
				donut_large
			</span>
			<p class="text-4xl">Loading repos</p>
		</div>
		<div v-else-if="!repos.length" class="text-center">
			<span
				class="text-red-500 text-6xl material-icons pointer-events-none select-none"
			>
				cancel
			</span>
			<p class="text-4xl">Failed to fetch repos</p>
			<button class="mt-5" @mouseup="updateRepos">Try again</button>
		</div>
		<div v-else class="flex flex-row">
			<button
				:disabled="!prevPage"
				class="bg-primary ml-2 top-1/2 left-0 z-50 absolute material-icons"
				@click="page--"
			>
				navigate_before
			</button>

			<transition-group
				class="flex flex-row relative justify-center"
				name="slide"
				tag="div"
			>
				<div
					v-for="repo in currRepos"
					:key="repo.id"
					class="rounded-4xl h-50 shadow-cool my-3 mx-2 w-full p-5 slide-item"
				>
					<div class="relative h-full w-full">
						<!-- Repo name-->
						<h1 class="font-bold text-center text-xl truncate">{{ repo.name }}</h1>

						<!-- Repo description -->
						<p class="my-3 max-h-25 overflow-hidden">
							{{ repo.description }}
						</p>

						<!-- Repo url and main language -->
						<div class="flex flex-row items-center">
							<a
								class="text-left bottom-0 left-0 absolute self-start"
								target="_blank"
								:href="repo.html_url"
								>Github repo</a
							>

							<div
								class="flex flex-row ml-auto right-0 bottom-0 absolute justify-end items-center"
							>
								<span
									class="text-lg mr-1 material-icons"
									style="text-shadow: 0 0 5px white"
									:style="`color: ${
										(languageColors && languageColors[repo.language]) || '#FFF'
									}`"
								>
									circle
								</span>
								<p>
									{{ repo.language }}
								</p>
							</div>
						</div>
					</div>
				</div>
			</transition-group>

			<button
				:disabled="!nextPage"
				class="bg-primary mr-2 top-1/2 right-0 z-50 absolute material-icons"
				@click="page++"
			>
				navigate_next
			</button>
		</div>
	</div>
</template>

<script lang="ts">
import {
	computed,
	defineComponent,
	onMounted,
	onUnmounted,
	Ref,
	ref,
	watch,
} from 'vue'
import { GithubRepo, LanguageColors } from '../assets/types'

export default defineComponent({
	setup() {
		const fetched: Ref<boolean> = ref(false)

		const repos: Ref<GithubRepo[]> = ref([])

		const updateRepos = () => {
			fetched.value = false
			repos.value = []

			// Thanks github for your api https://docs.github.com/en/rest
			fetch('https://api.github.com/users/Im-Beast/repos?type=private')
				.then((res) => res.json())
				.then((json) => {
					fetched.value = true
					repos.value = json.filter((v: GithubRepo) => v.language) as GithubRepo[]
				})
				.catch((err) => {
					fetched.value = true
					console.warn('Failed to fetch repos', err)
				})
		}

		updateRepos()

		const languageColors: Ref<LanguageColors> = ref({})

		// Thanks to https://github.com/LeeReindeer/github-colors (fork of https://github.com/ozh/github-colors)
		fetch(
			'https://raw.githubusercontent.com/LeeReindeer/github-colors/go/color.json'
		)
			.then((res) => res.json())
			.then((json) => {
				languageColors.value = json as LanguageColors
			})
			.catch((err) => {
				console.warn('Failed to fetch language colors', err)
			})

		const elPerPage: Ref<number> = ref(3)

		const refreshSizing = () => {
			const width = window.innerWidth
			elPerPage.value = Math.min(Math.max(Math.floor(width / 300), 1), 3)
			page.value = 0
		}

		onMounted(() => {
			refreshSizing()
			window.addEventListener('resize', refreshSizing, false)
		})

		onUnmounted(() => window.removeEventListener('resize', refreshSizing, false))

		const page: Ref<number> = ref(0)

		const currRepos = computed(() => {
			return repos.value.slice(
				page.value * elPerPage.value,
				elPerPage.value * (page.value + 1)
			)
		})

		const maxPage = computed(
			() => Math.ceil(repos.value.length / elPerPage.value) - 1
		)

		const prevPage = computed(() => page.value > 0)
		const nextPage = computed(() => page.value < maxPage.value)

		const setCSSProperty = (key: string, val: string) => {
			;(document.querySelector(':root') as HTMLElement).style.setProperty(key, val)
		}

		watch(page, (val, oldval) => {
			setCSSProperty('--change-percentage', `${(oldval - val) * 100}%`)
			page.value = val > maxPage.value ? maxPage.value : val < 0 ? 0 : val
		})

		return {
			prevPage,
			nextPage,
			updateRepos,
			languageColors,
			currRepos,
			elPerPage,
			fetched,
			repos,
			page,
		}
	},
})
</script>

<style>
:root {
	--change-percentage: 100%;
}

.slide-item {
	transition: all 1s ease-in-out;
}

.slide-enter-from {
	opacity: 0;
	transform: translateX(var(--change-percentage));
}

.slide-leave-to {
	transition: 0.5s ease-in-out;
	opacity: 0;
	transform: translateX(calc(var(--change-percentage) * -1)) translateY(100%);
}

.slide-leave-active {
	position: absolute;
	transition: 1s;
}
</style>
