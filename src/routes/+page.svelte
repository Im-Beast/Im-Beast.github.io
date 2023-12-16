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

<header
	class="flex flex-col items-center justify-center sm:flex-row bg-dark-400 border-2 border-dark-900 p-3 max-w-210 rounded-b-lg"
>
	<img
		height="10rem"
		width="auto"
		class="h-45 rounded-lg mr-5 border-2 border-dark-500"
		src="avatar.jpg"
		alt="Beast's avatar – Mat from Czech cartoon Pat & Mat"
	/>
	<div class="flex gap-2 flex-col">
		<section class="h-full">
			<!-- TODO: little guy climbing in and replacing "Im-Beast" with "I'm Beast" -->
			<h1 class="text-2xl">Hello, Im-Beast</h1>
			<hr />
			<p class="leading-tight">
				I am {age} years old high school student who really enjoys programming. <br />
				I started learning it about {age - 10} years ago and I still continue to do so! <br />
				In my free time apart from coding I like playing games
				<span class="i-solar-gamepad-bold-duotone bg-green-300" />
				and watching serials and movies
				<span class="i-solar-tv-bold-duotone text-blue-300" />
				.
				<!--
					TODO: nice curly arrow when hovered over movies thingy to show my TMDB profile
					or like the ding boom button click effect on the movie button
				-->
			</p>
		</section>

		<address class="mt-auto ml-auto w-max bg-dark-50 border-2 border-dark-100 rounded-lg p-1">
			<a
				title="Github"
				href="https://github.com/Im-Beast"
				class="navigation-link hover:bg-#151b21! active:bg-#353b41!"
				target="_blank"
				rel="noreferrer"
			>
				<span class="i-mingcute-github-fill" />
			</a>
			<a
				title="Twitter"
				href="https://twitter.com/1m_Beast"
				class="navigation-link hover:bg-#26a7de! active:bg-#56d7fe!"
				target="_blank"
				rel="noreferrer"
			>
				<span class="i-mingcute-twitter-fill" />
			</a>
			<!-- TODO: Make discord username contact better somehow-->
			{#if discordModalOpened}
				<Modal on:click={() => (discordModalOpened = false)}>
					<p class="font-not-italic">My username on discord is <b>Beast#6968</b></p>
				</Modal>
			{/if}

			<button
				on:click={() => (discordModalOpened = true)}
				title="Discord"
				class="navigation-link py-0.4! hover:bg-#5662f6! active:bg-#7682f6!"
			>
				<span class="i-mingcute-discord-fill" />
			</button>
			<a
				title="Steam"
				href="https://steamcommunity.com/id/im_beast"
				class="navigation-link hover:bg-gradient-to-br hover:from-#06183a hover:to-#145d8f active:from-#162a2a active:to-#246d9f"
				target="_blank"
				rel="noreferrer"
			>
				<span class="i-fa6-brands-steam-symbol" />
			</a>
			<a
				title="TMDB"
				href="https://www.themoviedb.org/u/Im-Beast"
				class="navigation-link hover:bg-gradient-to-l hover:from-#01b4e4 hover:to-#90cea1 active:from-#21d4f4 active:to-#b0eec1"
				target="_blank"
				rel="noreferrer"
			>
				<span class="i-solar-tv-bold" />
			</a>
		</address>
	</div>
</header>

<main
	class="flex flex-col justify-stretch bg-dark-400 border-2 border-dark-900 my-1 sm:my-auto w-full max-w-210 h-80 rounded-lg p-2"
>
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

		<TabButton color="#f0c040" selected={currentTab === Tab.Experience} on:click={() => (currentTab = Tab.Experience)}>
			<Icon slot="base-icon" icon="solar:square-academic-cap-outline" />
			<Icon slot="active-icon" icon="solar:square-academic-cap-bold" />
			Experience
		</TabButton>
	</nav>

	<hr />

	<svelte:component this={tabs[currentTab]} />
</main>
