<script lang="ts">
	import { onMount } from "svelte";
	import { tweened } from "svelte/motion";
	import { expoOut } from "svelte/easing";
	import { slide } from "svelte/transition";

	export let disabled: boolean;

	let elements: HTMLElement;
	let isMobile = false;

	let scrollElementWidth = 0;
	let currentScrollLeft = 0;
	let scrollLeft = tweened(0, {
		delay: 0,
		duration: 250,
		easing: expoOut,
	});

	function moveCarousel(side: -1 | 1) {
		scrollElementWidth = (document.querySelector(".repository") as HTMLElement).offsetWidth;

		const move = () => {
			const nextValue = currentScrollLeft + (scrollElementWidth + 10.79) * side;
			if (nextValue >= 0 && nextValue < elements.scrollWidth) {
				currentScrollLeft = nextValue;
				scrollLeft.set(nextValue);
			}
		};

		move();
		const interval = setInterval(move, 256);

		addEventListener("pointerup", () => {
			clearInterval(interval);
		});
	}

	onMount(async () => {
		isMobile = navigator.maxTouchPoints > 0;
		elements.style.scrollSnapType = isMobile ? "x mandatory" : "unset";

		$scrollLeft = currentScrollLeft = elements.scrollLeft;
		scrollLeft.subscribe((value) => {
			elements.scrollLeft = value;
		});
	});
</script>

<div class="carousel-wrapper" transition:slide>
	{#if !disabled && !isMobile}
		<button class="move-left no-style" on:pointerdown={() => moveCarousel(-1)} />
		<button class="move-right no-style" on:pointerdown={() => moveCarousel(1)} />
	{/if}

	<section class="elements" bind:this={elements}>
		<slot />
	</section>
</div>

<style lang="scss">
	.carousel-wrapper {
		position: relative;

		width: 100%;

		> .move-left,
		> .move-right {
			position: absolute;
			z-index: 1;

			top: 0;

			width: 15vh;
			height: 100%;

			color: var(--text-color);
			opacity: 0;

			transition: opacity 0.15s ease-in-out;

			&:hover {
				opacity: 0.2;
			}

			&:active {
				opacity: 0.5;
			}
		}

		> .move-left {
			left: 0;
			border-radius: 1rem 0 0 1rem;
			background: linear-gradient(to left, transparent, var(--contrast-color));
		}

		> .move-right {
			right: 0;
			border-radius: 0 1rem 1rem 0;
			background: linear-gradient(to right, transparent, var(--contrast-color));
		}

		> .elements > :global(*) {
			min-width: calc(100vw - 1rem);
		}

		@media only screen and (min-width: 540px) {
			> .elements > :global(*) {
				min-width: calc(50% - 0.3rem);
			}
		}

		@media only screen and (min-width: 900px) {
			> .elements > :global(*) {
				min-width: calc(33.3% - 0.4rem);
			}
		}

		> .elements {
			position: relative;

			display: flex;
			flex-direction: row;
			align-items: stretch;
			justify-content: stretch;
			gap: 0.6rem;

			border-radius: 1rem;

			overflow-x: scroll;
			overflow-y: hidden;
			scrollbar-width: none;
			scroll-snap-type: x mandatory;

			&::-webkit-scrollbar {
				display: none;
			}
		}
	}
</style>
