<script context="module" lang="ts">
	export interface Repository {
		license: { spdx_id?: string };
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
	import Paginator from "@components/Paginator.svelte";
	import ProjectCard from "@components/cards/ProjectCard.svelte";

	import { repositories } from "@stores/repositories";

	async function getRepositories(user: string): Promise<Repository[]> {
		const cached = localStorage.getItem("repo-cache");
		let json: RespositoryCache;
		if (cached && (json = JSON.parse(cached)).expireTime - Date.now() > 0) {
			return json.repositories;
		}

		const repositories: Repository[] = (
			await (await fetch(`https://api.github.com/users/${user}/repos`)).json()
		).filter(({ fork }: Repository) => !fork);

		const organizations: Organization[] = await (
			await fetch(`https://api.github.com/users/${user}/orgs`)
		).json();

		for (const organization of organizations) {
			const organizationRepos: Repository[] = (
				await (await fetch(organization.repos_url)).json()
			).filter(({ fork }: Repository) => !fork);

			repositories.push(...organizationRepos);
		}

		repositories.sort((a, b) => b.stargazers_count - a.stargazers_count);

		const cache: RespositoryCache = {
			repositories,
			expireTime: Date.now() + 1000 * 60 * 60 * 3, // 3 hours
		};
		localStorage.setItem("repo-cache", JSON.stringify(cache));

		return repositories;
	}

	async function updateRepositories(): Promise<Repository[]> {
		if ($repositories.length) return $repositories;
		$repositories = await getRepositories("Im-Beast");
		return $repositories;
	}
</script>

<Paginator>
	{#await updateRepositories()}
		<div class="p-4 w-full flex flex-col justify-center items-center">
			<p class="my-2">Loading repositories...</p>
			<!-- FIXME: firefox only, blur filter is required to fix spotty box outline around this icon for some reason -->
			<span class=" i-mingcute-loading-3-fill text-6xl animate-spin text-blue-400 filter-blur" />
		</div>
	{:then repositories}
		{#each repositories as repository}
			<ProjectCard
				license={repository.license?.spdx_id}
				repositoryUrl={repository.html_url}
				stars={repository.stargazers_count}
			>
				<svelte:fragment slot="title">
					{repository.name}
				</svelte:fragment>

				<svelte:fragment slot="description">
					{repository.description}
				</svelte:fragment>
			</ProjectCard>
		{/each}
	{:catch}
		<div class="p-4 w-full flex flex-col justify-center items-center">
			<strong class="mt-1">Failed to update repositories!</strong>
			<p class="mb-1">Check console for more info</p>
			<span class="i-mingcute-alert-fill text-6xl text-yellow-400" />
		</div>
	{/await}
</Paginator>
