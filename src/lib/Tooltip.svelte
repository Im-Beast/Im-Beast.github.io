<script lang="ts">
	import { fly } from "svelte/transition";

	export let message: string;

	let visible = false;
	let wrapper: HTMLElement;

	let x = 0;
	let y = 0;
	let w = 0;

	let top = false;
	function updateTooltipPosition() {
		({ x, y, width: w } = wrapper.children[0].getBoundingClientRect());

		if (y + 100 >= window.innerHeight) {
			top = true;
		}
	}
</script>

{#if visible}
	<span
		transition:fly={{
			y: 15,
			duration: 250,
		}}
		class="tooltip"
		class:top
		style:--w="{w}px"
		style:--x="{x}px"
		style:--y="{top ? y - 75 - 20 * message.split("\n").length : y}px">{message}</span>
{/if}

<div
	class="tooltip-wrapper"
	bind:this={wrapper}
	on:pointerover={() => {
		updateTooltipPosition();
		visible = true;
	}}
	on:pointerleave={() => {
		visible = false;
	}}>
	<slot />
</div>

<style lang="scss">
	.tooltip-wrapper {
		display: inline-block;
		height: 100%;
		width: max-content;
	}

	.tooltip {
		position: fixed;
		z-index: 100;

		--w: 0;
		--x: 0;
		--y: 0;

		top: var(--y);
		left: var(--x);
		width: max-content;

		text-align: center;
		white-space: pre-line;

		padding: 0.25rem;
		padding-top: 0.35rem;
		border-radius: 0.5rem;

		background-color: var(--lighter-background-color);
		border: 2px solid var(--background-color);

		pointer-events: none;
		user-select: none;

		transform: translateX(calc(-50% + (var(--w) / 2))) translateY(2.5rem);

		&::before {
			content: "";

			position: absolute;

			top: -30px;
			left: 50%;
			width: 0px;
			height: 2px;

			border: 14px solid transparent;
			border-bottom-color: var(--background-color);

			transform: scaleX(50%) translateX(-100%);
		}

		&::after {
			content: "";

			position: absolute;

			top: -29px;
			left: 50%;
			width: 0px;
			height: 10px;

			border: 10px solid transparent;
			border-bottom-color: var(--lighter-background-color);

			transform: scaleX(50%) translateX(-100%);
		}

		&.top {
			&::before {
				top: unset;
				bottom: -30px;

				border: 14px solid transparent;
				border-top-color: var(--background-color);
			}

			&::after {
				top: unset;
				bottom: -29px;

				border: 10px solid transparent;
				border-top-color: var(--lighter-background-color);
			}
		}
	}
</style>
