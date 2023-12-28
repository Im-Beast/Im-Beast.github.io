<script lang="ts">
	import TactileButton from "./TactileButton.svelte";
	import Icon from "@iconify/svelte";

	import { onMount } from "svelte";
	import { writable } from "svelte/store";

	let elementsContainer: HTMLElement;
	const elements = writable<Element[]>([]);
	function refreshElements() {
		$elements = Array.from(elementsContainer.children);
	}

	let elementsPerPage = 3;
	function resizeContainer() {
		const DESIRED_WIDTH = 300;
		elementsPerPage = Math.max(1, Math.floor(elementsContainer.clientWidth / DESIRED_WIDTH));
	}

	onMount(() => {
		refreshElements();
		resizeContainer();
	});

	const cursor = writable(0);
	const pages = writable(0);

	$: {
		$pages = Math.ceil($elements.length / elementsPerPage);
		$cursor = Math.max(0, Math.min($cursor, $pages - 1));

		const from = $cursor * elementsPerPage;
		const to = from + elementsPerPage;
		for (let i = 0; i < $elements.length; i++) {
			const element = $elements[i];
			element.classList.toggle("shown", i >= from && i < to);
		}
	}
</script>

<svelte:window on:resize={resizeContainer} />

<div id="paginator">
	<section id="elements" bind:this={elementsContainer}>
		<slot />
	</section>

	<section class="paginator-controls">
		<TactileButton color="white" disabled={$cursor === 0} on:click={() => ($cursor -= 1)}>
			<Icon slot="base-icon" icon="mingcute:large-arrow-left-line" />
			<Icon slot="active-icon" icon="mingcute:large-arrow-left-fill" />
		</TactileButton>

		{#if $pages < 15}
			<section id="page-dots">
				{#each { length: $pages } as _, i}
					<span class="page-dot" class:active={i === $cursor} on:click={() => ($cursor = i)} />
				{/each}
			</section>
		{/if}

		<TactileButton color="white" disabled={$cursor === $pages - 1} on:click={() => ($cursor += 1)}>
			<Icon slot="base-icon" icon="mingcute:large-arrow-right-line" />
			<Icon slot="active-icon" icon="mingcute:large-arrow-right-fill" />
		</TactileButton>
	</section>
</div>

<style>
	#paginator {
		position: relative;
		width: 100%;
		height: 100%;
	}

	#elements {
		position: relative;
		gap: 1rem;
		display: flex;
		width: 100%;
		height: 100%;

		& > .card {
			transition: all 150ms ease-in-out;
			display: none;
			opacity: 0;
		}

		& > .shown {
			display: flex;
			opacity: 1;
		}
	}

	#page-dots {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.5rem;

		& > .page-dot {
			cursor: pointer;

			display: inline-block;
			background-color: var(--contrast-5);

			width: 0.5rem;
			height: 0.5rem;

			margin-inline: auto;

			border-radius: 100%;
			box-shadow: 0 2px 0 var(--bg-1);

			transition: background-color, width, height, 175ms linear;

			&.active {
				background-color: var(--contrast-full);
				/** The only reason for using box-shadow instead of border here
						Is that Firefox creates one pixel white gap when
						using border and transform: scale simultaneously */
				box-shadow: 0 0 0 1px var(--bg-2);
				transform: scale(1.5);
			}
		}
	}

	.paginator-controls {
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
</style>
