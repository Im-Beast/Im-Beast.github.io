<script lang="ts">
	import { onMount } from "svelte";
	import { fade } from "svelte/transition";
	import Tab from "$lib/Tab.svelte";

	interface RepoCache {
		repos: Repo[];
		last: number;
	}

	interface Repo {
		license: {
			spdx_id: string;
		};
		stargazers_count: number;
		name: string;
		html_url: string;
		url: string;
		description: string;
	}

	async function getRepos() {
		const promises = [];
		promises.push(fetch("https://api.github.com/users/Im-Beast/repos"));
		const orgs = await (await fetch("https://api.github.com/users/Im-Beast/orgs")).json();
		for (const { url } of orgs) {
			promises.push(fetch(`${url}/repos`));
		}
		return (await Promise.all((await Promise.all(promises)).map((x) => x.json())))
			.flat()
			.sort((a: Repo, b: Repo) => b.stargazers_count - a.stargazers_count) as Repo[];
	}

	let position = 0;
	let loaded = false;
	let data: RepoCache = {
		last: 0,
		repos: []
	};

	const incrementPosition = () => {
		if (canIncrement) {
			position += displayAmount;
		}
	};

	const decrementPosition = () => {
		if (canDecrement) {
			position -= displayAmount;
		} else if (position !== 0) {
			position -= position;
		}
	};

	onMount(async () => {
		data = JSON.parse(localStorage.getItem("cached-repos") ?? "{}");

		if (!data.repos || Date.now() - data.last > 1000 * 60 * 60 * 3) {
			if (data.repos) loaded = true;
			data.repos ??= [];
			data.repos = await getRepos();
			data.last = Date.now();
			localStorage.setItem("cached-repos", JSON.stringify(data));
			loaded = true;
		} else loaded = true;
	});

	let curtime = 0;
	const interval = setInterval(() => {
		if (loaded) clearInterval(interval);
		curtime = Date.now();
	}, 100);

	let innerWidth = 0;
	$: displayAmount = ~~Math.min(Math.max(innerWidth / 300, 1), 3);
	$: canIncrement = position + displayAmount <= data.repos.length;
	$: canDecrement = position - displayAmount >= 0;
	$: currentRepos = data.repos.slice(position, position + displayAmount);
</script>

<svelte:window bind:innerWidth />

<section id="github-projects">
	<button
		id="go-left"
		style:opacity={canDecrement && loaded ? 1 : 0}
		style:cursor={canDecrement && loaded ? "pointer" : "inherit"}
		on:click|self={decrementPosition}>👈</button
	>
	<button
		id="go-right"
		style:opacity={canIncrement && loaded ? 1 : 0}
		style:cursor={canIncrement && loaded ? "pointer" : "inherit"}
		on:click|self={incrementPosition}>👉</button
	>

	{#if !loaded}
		<div id="loading" in:fade={{ delay: 250 }}>
			<h1>Loading projects{".".repeat(((curtime / 1000) % 3) + 1)}</h1>
			<h3>Here's spinning puppy while you wait as spinning circles are boring</h3>
			<p id="puppy">🐕</p>
		</div>
	{:else}
		<div id="repos-container" in:fade={{ duration: 150 }}>
			{#each currentRepos as repo}
				<Tab _class="repo-card">
					<p title="Repository name" slot="title">{repo.name}</p>
					<p title="Repository description" slot="description">
						{repo.description}
					</p>
					<div slot="footer">
						<p title="Repository stars">⭐ {repo.stargazers_count}</p>
						<div class="vertical-rule" />
						{#if repo.license?.spdx_id}
							<p title="License">
								📝 {repo.license?.spdx_id?.replace("NOASSERTION", "Other")}
							</p>
							<div class="vertical-rule" />
						{/if}
						<p title="Repository page">
							📦
							<a href={repo.html_url} rel="noreferrer" target="_blank">Repo</a>
						</p>
					</div>
				</Tab>
			{/each}
		</div>
	{/if}
</section>

<style>
	#go-left,
	#go-right {
		position: absolute;

		z-index: 10;
		font-size: 1.5rem;

		align-self: center;

		background-color: transparent;

		outline: none;
		border: none;
	}

	#go-left:hover,
	#go-right:hover {
		font-size: 1.75rem;
	}

	#go-left:active,
	#go-right:active {
		font-size: 1.5rem;
	}

	#go-left {
		left: 0;
	}

	#go-right {
		right: 0;
	}

	#loading {
		min-height: 15rem;
		pointer-events: none;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	#puppy {
		font-size: 6rem;
		animation: spin 5s infinite;
	}

	@keyframes spin {
		from {
			transform: rotate(0deg);
		}

		to {
			transform: rotate(360deg);
		}
	}

	#github-projects {
		position: relative;

		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-evenly;

		width: 100%;
		min-height: 16rem;
	}

	#repos-container {
		width: inherit;
		height: inherit;
		display: inherit;
	}

	:global(#repos-container > .repo-card) {
		min-height: 15rem;
	}
</style>
