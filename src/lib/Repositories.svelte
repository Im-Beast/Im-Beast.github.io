<script context="module" lang="ts">
	export interface Repository {
		license: { spdx_id: string };
		stargazers_count: number;
		name: string;
		html_url: string;
		description: string;
		fork: boolean;
	}

	export interface Organization {
		repos_url: string;
	}

	export interface RespositoryCache {
		repositories: Repository[];
		expireTime: number;
	}
</script>

<script lang="ts">
	import { onMount } from "svelte";

	import { repositories } from "./store";
	import Tab from "./Tab.svelte";
	import Tooltip from "./Tooltip.svelte";
	import Carousel from "./Carousel.svelte";

	async function getRepositories(user: string): Promise<Repository[]> {
		const cached = localStorage.getItem("repo-cache");
		if (cached) {
			const json = JSON.parse(cached) as RespositoryCache;
			if (json.expireTime - Date.now() < 0) {
				localStorage.removeItem("repo-cache");
			} else {
				return json.repositories;
			}
		}

		let repositories = (await fetch(`https://api.github.com/users/${user}/repos`).then((r) =>
			r.json(),
		)) as Repository[];

		const organizations = (await fetch(`https://api.github.com/users/${user}/orgs`).then((r) =>
			r.json(),
		)) as Organization[];

		for (const org of organizations) {
			const orgRepositories = (await fetch(org.repos_url).then((r) => r.json())) as Repository[];
			repositories.push(...orgRepositories);
		}

		repositories = repositories
			.filter(({ fork }) => !fork)
			.map((value) => ({
				description: value.description,
				html_url: value.html_url,
				license: value.license,
				name: value.name,
				stargazers_count: value.stargazers_count,
				fork: false,
			}))
			.sort((a, b) => b.stargazers_count - a.stargazers_count);

		const cache: RespositoryCache = {
			repositories,
			expireTime: Date.now() + 1000 * 60 * 60 * 3, // 3 hours
		};

		localStorage.setItem("repo-cache", JSON.stringify(cache));
		return repositories;
	}

	let loaded = false;
	let failed = false;
	onMount(async () => {
		$repositories = await getRepositories("Im-Beast").catch((error) => {
			console.error(error);
			failed = true;
			return [];
		});
		loaded = true;
	});
</script>

{#if loaded && $repositories}
	<Carousel disabled={false}>
		{#each $repositories as { name, description, stargazers_count, license, html_url }}
			<Tab>
				<svelte:fragment slot="title">{name}</svelte:fragment>

				<svelte:fragment slot="description">{description}</svelte:fragment>

				<svelte:fragment slot="bottom">
					<p class="stars">⭐ {stargazers_count}</p>

					{#if license?.spdx_id}
						<div class="vertical-rule" />
						<p class="license">📝 {license?.spdx_id}</p>
					{/if}

					<div class="vertical-rule" />

					<Tooltip message="Github repository">
						<a href={html_url} target="_blank" class="repo-url">📦 Repo</a>
					</Tooltip>
				</svelte:fragment>
			</Tab>
		{/each}
	</Carousel>
{:else}
	<div class="loading">
		{#if failed}
			<p>Failed loading repositories</p>
			<img
				src="/images/sync-problem.svg"
				alt="Two arrows and exclamation mark that represent synchronisation problem"
				class="sync-problem" />
		{:else}
			<p>Loading repositories</p>
			<img src="/images/sync.svg" alt="Two arrows going in circles representing synchronisation" class="sync" />
		{/if}
	</div>
{/if}

<style lang="scss">
	.loading {
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		> .sync,
		> .sync-problem {
			height: 10rem;
		}

		> .sync {
			@keyframes spin {
				from {
					transform: rotate(0);
				}

				to {
					transform: rotate(-360deg);
				}
			}

			animation: 1s spin infinite ease-in-out;
		}
	}
</style>
