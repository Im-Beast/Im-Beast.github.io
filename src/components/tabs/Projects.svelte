<script context="module" lang="ts">
	export interface GithubRepository {
		license?: { spdx_id?: string };
		stargazers_count: number;
		name: string;
		html_url: string;
		description: string;
		fork: boolean;
	}

	export interface GithubOrganization {
		repos_url: string;
	}

	export interface ParsedRepository {
		name: string;
		fork: boolean;
		stars: number;
		license?: string;
		githubUrl: string;
		description: string;
	}

	export interface RepositoryCache {
		[user: string]: UserRepositoryCache;
	}

	export interface UserRepositoryCache {
		repositories: ParsedRepository[];
		expireTime: number;
	}
</script>

<script lang="ts">
	import Paginator from "@components/Paginator.svelte";
	import ProjectCard from "@components/cards/ProjectCard.svelte";

	import { repositories, filters, filteredRepositories } from "@stores/repositories";

	const GITHUB_USERS_API = "https://api.github.com/users";

	function normalizeLicense(license: string | undefined): string | undefined {
		switch (license) {
			case undefined:
				return undefined;
			case "NOASSERTION":
				return "Custom";
			default:
				return license;
		}
	}

	function getCachedUserRepos(user: string): ParsedRepository[] | null {
		const cache = localStorage.getItem("cached-repositories");
		if (!cache) {
			return null;
		}

		try {
			const parsed: RepositoryCache = JSON.parse(cache);
			if (user in parsed) {
				const userCache = parsed[user];
				return userCache.expireTime > Date.now() ? null : userCache.repositories;
			}
		} catch {
			localStorage.removeItem("cached-repositories");
		}

		return null;
	}

	async function retrieveUserRepos(user: string): Promise<ParsedRepository[]> {
		const userCache: UserRepositoryCache = {
			repositories: [],
			expireTime: Date.now() + 60 * 60 * 3, // 3 hours
		};

		if (userCache.repositories.length > 0) {
			return userCache.repositories;
		}

		const userRepos: GithubRepository[] = await fetch(`${GITHUB_USERS_API}/${user}/repos`).then((r) => r.json());

		const organizations: GithubOrganization[] = await fetch(`${GITHUB_USERS_API}/${user}/orgs`).then((r) => r.json());
		for (const organization of organizations) {
			const orgRepos: GithubRepository[] = await fetch(organization.repos_url).then((r) => r.json());
			userRepos.push(...orgRepos);
		}

		userRepos.sort((a, b) => b.stargazers_count - a.stargazers_count);

		const parsedRepos: ParsedRepository[] = userRepos.map((repo) => ({
			name: repo.name,
			description: repo.description,
			fork: repo.fork,
			githubUrl: repo.html_url,
			license: normalizeLicense(repo.license?.spdx_id),
			stars: repo.stargazers_count,
		}));
		userCache.repositories.push(...parsedRepos);

		const repositoryCache: RepositoryCache = JSON.parse(localStorage.getItem("cached-repositores") ?? "{}");
		repositoryCache[user] = userCache;
		localStorage.setItem("cached-repositories", JSON.stringify(repositoryCache));

		return parsedRepos;
	}

	async function getUserRepos(user: string): Promise<ParsedRepository[]> {
		return getCachedUserRepos(user) ?? retrieveUserRepos(user);
	}

	async function updateRepositories(): Promise<void> {
		if ($repositories.length) return;
		$repositories = await getUserRepos("Im-Beast");
	}
</script>

<Paginator>
	{#await updateRepositories()}
		<div class="p-4 w-full flex flex-col justify-center items-center">
			<p class="my-2">Loading repositories...</p>
			<span class=" i-mingcute-loading-3-fill text-6xl animate-spin text-blue-400" />
		</div>
	{:then}
		{#each $filteredRepositories as repository}
			<ProjectCard license={repository.license} repositoryUrl={repository.githubUrl} stars={repository.stars}>
				<svelte:fragment slot="title">
					{repository.name}
				</svelte:fragment>

				<svelte:fragment slot="description">
					{repository.description}
				</svelte:fragment>
			</ProjectCard>
		{/each}
	{:catch error}
		{void console.error(error) ?? ""}
		<div class="p-4 w-full flex flex-col justify-center items-center">
			<strong class="mt-1">Failed to update repositories!</strong>
			<p class="mb-1">Check console for more info</p>
			<span class="i-mingcute-alert-fill text-6xl text-yellow-400" />
		</div>
	{/await}
</Paginator>
