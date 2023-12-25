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
		window.addEventListener("resize", resizeContainer);
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

<div class="relative w-full h-full">
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
		gap: 0.5rem;

		& > .page-dot {
			cursor: pointer;

			display: inline-block;
			background-color: var(--contrast-5);

			width: 0.5rem;
			height: 0.5rem;

			border-radius: 100%;

			transition: background-color, width, height, 175ms linear;

			&.active {
				background-color: var(--contrast-full);

				width: 0.75rem;
				height: 0.75rem;
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
