<script context="module" lang="ts">
	import type { ComponentType } from "svelte";

	enum Tab {
		Projects,
		Donate,
		Experience,
	}

	type Tabs = {
		[key in Tab]: ComponentType;
	};
</script>

<script lang="ts">
	import IconLink from "@components/ContactLink.svelte";
	import Modal from "@components/Modal.svelte";
	import TabButton from "@components/TabButton.svelte";
	import Donate from "@components/tabs/Donate.svelte";
	import Projects from "@components/tabs/Projects.svelte";
	import Icon from "@iconify/svelte";

	const age = Math.floor((Date.now() - new Date("05/17/2005").getTime()) / (1000 * 60 * 60 * 24 * 365.25));

	const tabs: Tabs = {
		[Tab.Projects]: Projects,
		[Tab.Donate]: Donate,
		[Tab.Experience]: Modal, // TODO: experience tab
	};

	let currentTab = Tab.Projects;

	let discordModalOpened = false;
</script>

<header>
	<img height="10rem" width="auto" src="avatar.jpg" alt="Beast's avatar – Mat from Czech cartoon Pat & Mat" />
	<section id="introduction">
		<section>
			<!-- TODO: little guy climbing in and replacing "Im-Beast" with "I'm Beast" -->
			<h1>Hello, Im-Beast</h1>
			<hr />
			<p class="leading-tight">
				I am {age} years old high school student who really enjoys programming. <br />
				I started learning it about {age - 10} years ago and I still continue to do so! <br />
				In my free time apart from coding I like playing games
				<span class="i-solar-gamepad-bold-duotone bg-green-300" />
				and <wbr /> watching serials and movies
				<span class="i-solar-tv-bold-duotone text-blue-300" />
				.
				<!--
					TODO: nice curly arrow when hovered over movies thingy to show my TMDB profile
					or like the ding boom button click effect on the movie button
				-->
			</p>
		</section>

		<address>
			<IconLink href="https://github.com/Im-Beast" title="Github" color="#151b21">
				<Icon icon="mingcute:github-fill" />
			</IconLink>

			<IconLink href="https://twitter.com/1m_Beast" title="Twitter" color="#26a7de">
				<Icon icon="mingcute:twitter-fill" />
			</IconLink>

			<IconLink href="https://steamcommunity.com/id/im_beast" title="Steam" gradient={["#06183a", "#145d8f"]}>
				<Icon icon="fa-brands:steam-symbol" />
			</IconLink>

			<IconLink href="https://www.themoviedb.org/u/Im-Beast" title="TMDB" gradient={["#01b4e4", "#90cea1"]}>
				<Icon icon="solar:tv-bold" />
			</IconLink>

			<IconLink href="https://discord.com/" title="Discord" color="#5662f6" on:click={(e) => e.preventDefault()}>
				<Icon icon="mingcute:discord-fill" />
				<!-- TODO: Discord username thingy -->
			</IconLink>
		</address>
	</section>
</header>

<main>
	<nav>
		<TabButton color="#f08040" selected={currentTab === Tab.Projects} on:click={() => (currentTab = Tab.Projects)}>
			<Icon slot="base-icon" icon="solar:box-outline" />
			<Icon slot="active-icon" icon="solar:box-bold" />
			Projects
		</TabButton>

		<TabButton color="#ff4590" selected={currentTab === Tab.Donate} on:click={() => (currentTab = Tab.Donate)}>
			<Icon slot="base-icon" icon="solar:heart-outline" />
			<Icon slot="active-icon" icon="solar:heart-bold" />
			Donate
		</TabButton>

		<TabButton color="#4080f0" selected={currentTab === Tab.Experience} on:click={() => (currentTab = Tab.Experience)}>
			<Icon slot="base-icon" icon="solar:square-academic-cap-outline" />
			<Icon slot="active-icon" icon="solar:square-academic-cap-bold" />
			Experience
		</TabButton>
	</nav>

	<hr />

	<svelte:component this={tabs[currentTab]} />
</main>

<style>
	header {
		display: flex;
		align-items: center;
		padding: 0.5rem;

		width: 100%;
		max-width: 55rem;
		height: 100%;

		margin-top: 0.5rem;
		margin-bottom: auto;

		background-color: var(--bg-2);

		border: 2px solid var(--bg-0);
		border-radius: 0.4rem;

		@media (max-width: 640px) {
			flex-direction: column;
		}

		& > img {
			max-width: 12rem;

			margin-right: 1.5rem;

			border: 2px solid var(--bg-0);
			border-radius: 0.6rem;
		}

		& > #introduction {
			display: flex;
			flex-direction: column;

			& > section {
				padding: 0.5rem;
			}

			& > address {
				width: max-content;
				height: max-content;

				padding: 0rem 0.25rem;
				padding-bottom: 2px;
				margin-top: auto;
				margin-left: auto;

				background-color: var(--bg-4);
				border: 2px solid var(--bg-0);
				border-radius: 0.4rem;
			}
		}
	}

	main {
		display: flex;
		flex-direction: column;
		justify-content: stretch;

		margin-top: auto;
		margin-bottom: auto;
		padding: 0.5rem;

		width: 100%;
		max-width: 55rem;

		background-color: var(--bg-2);
		border: 2px solid var(--bg-0);
		border-radius: 0.4rem;

		@media (min-width: 640px) {
			margin-block: 0;
		}
	}
</style>
