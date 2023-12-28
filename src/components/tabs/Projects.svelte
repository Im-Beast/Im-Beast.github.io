<script context="module" lang="ts">
	export interface GithubRepository {
		license?: { spdx_id?: string };
		language: string;
		stargazers_count: number;
		name: string;
		description: string;
		fork: boolean;
		html_url: string;
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
		language: string;
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
	import Icon from "@iconify/svelte";

	import { repositories, filteredRepositories } from "@stores/repositories";

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
				return userCache.expireTime < Date.now() ? null : userCache.repositories;
			}
		} catch {
			localStorage.removeItem("cached-repositories");
		}

		return null;
	}

	function parseRepository(repository: GithubRepository): ParsedRepository {
		return {
			name: repository.name,
			description: repository.description,
			fork: repository.fork,
			githubUrl: repository.html_url,
			stars: repository.stargazers_count,
			license: normalizeLicense(repository.license?.spdx_id),
			language: repository.language,
		};
	}

	async function parseRepositories(response: Response): Promise<ParsedRepository[]> {
		const repositories: GithubRepository[] = await response.json();
		const parsedRepos: ParsedRepository[] = [];

		for (const repo of repositories) {
			parsedRepos.push(await parseRepository(repo));
		}

		return parsedRepos;
	}

	async function retrieveUserRepos(user: string): Promise<ParsedRepository[]> {
		const userRepos = await fetch(`${GITHUB_USERS_API}/${user}/repos`).then(parseRepositories);

		const organizations = await (await fetch(`${GITHUB_USERS_API}/${user}/orgs`)).json();
		for (const organization of organizations) {
			const orgRepos = await fetch(organization.repos_url).then(parseRepositories);
			userRepos.push(...orgRepos);
		}

		userRepos.sort((a, b) => b.stars - a.stars);

		const repositoryCache: RepositoryCache = JSON.parse(localStorage.getItem("cached-repositores") ?? "{}");
		repositoryCache[user] = {
			repositories: userRepos,
			expireTime: Date.now() + 1000 * 60 * 60 * 3, // 3 hours
		};

		localStorage.setItem("cached-repositories", JSON.stringify(repositoryCache));

		return userRepos;
	}

	async function getUserRepos(user: string): Promise<ParsedRepository[]> {
		return getCachedUserRepos(user) ?? retrieveUserRepos(user);
	}

	async function updateRepositories(): Promise<void> {
		if ($repositories.length) return;
		$repositories = await getUserRepos("Im-Beast");
	}
</script>

{#await updateRepositories()}
	<div id="projects-message" class="loading">
		<h1 class="title">Loading repositories...</h1>
		<Icon icon="mingcute:loading-3-fill" class="icon" />
	</div>
{:then}
	<Paginator>
		{#each $filteredRepositories as repository}
			<ProjectCard
				language={repository.language}
				license={repository.license}
				githubUrl={repository.githubUrl}
				stars={repository.stars}
			>
				<svelte:fragment slot="title">
					{repository.name}
				</svelte:fragment>

				<svelte:fragment slot="description">
					{repository.description}
				</svelte:fragment>
			</ProjectCard>
		{/each}
	</Paginator>
{:catch error}
	{void console.error(error) ?? ""}
	<div id="projects-message" class="error">
		<h1 class="title">Failed to update repositories!</h1>
		<p class="message">Check console for more info</p>
		<Icon icon="mingcute:alert-fill" class="icon" />
	</div>
{/await}

<style>
	@keyframes -global-spin {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}

	#projects-message {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		padding: 1rem;

		width: 100%;

		&.loading {
			& > .icon {
				font-size: 4rem;
				color: #60a5fa;
				animation: spin 1s linear infinite;
			}

			& > .title {
				margin-bottom: 0.5rem;
			}
		}

		&.error {
			& > .icon {
				font-size: 4rem;
				color: #efc744;
			}

			& > .title {
				color: #efc744;
			}
		}

		& > .title {
			margin-top: 0.5rem;
			font-size: 1.1rem;
		}

		& > .message {
			margin-bottom: 0.5rem;
		}
	}
</style>
