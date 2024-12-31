<script lang="ts">
	import Icon from "@iconify/svelte";
	import type { Snippet } from "svelte";

	type Props = {
		interaction: "link" | "button" | "none";
		interactionIcon?: string;
		href?: string;
		handler?: () => void;

		class?: string;
		title: Snippet;
		info?: Snippet;
		body?: Snippet;
		background: Snippet;
		backgroundOpacity?: string;
		color: [from: string, to: string];
	};

	let {
		class: _class,
		interaction,
		interactionIcon = "material-symbols:open-in-new-rounded",
		href,
		handler,
		title,
		info,
		body,
		background,
		backgroundOpacity,
		color,
	}: Props = $props();
</script>

<section class="card {_class}" style:--color-from={color[0]} style:--color-to={color[1]}>
	{#if background}
		<div class="card-background" style:--opacity={backgroundOpacity}>
			{@render background()}
		</div>
	{/if}

	<h2 class="card-title">
		{@render title()}
	</h2>

	{#if body}
		<div class="card-body">
			{@render body()}
		</div>
	{/if}

	<!-- Hover  -->
	<div class="card-actions">
		{#if interaction === "link"}
			<a {href} target="_blank" class="card-link" onclick={handler}>
				<Icon icon={interactionIcon} />

				{#if info}
					<span class="card-action-info"> {@render info()} </span>
				{/if}
			</a>
		{:else if interaction === "button"}
			<button class="card-button" onclick={handler}>
				<Icon icon={interactionIcon} />

				{#if info}
					<span class="card-action-info"> {@render info()} </span>
				{/if}
			</button>
		{:else if info}
			<span class="card-action-info"> {@render info()} </span>
		{/if}
	</div>
</section>

<style>
	.card {
		position: relative;

		display: flex;
		flex-direction: column;
		padding: 16px;
		border-radius: 20px;

		overflow: hidden;

		background: linear-gradient(180deg, var(--color-from), var(--color-to));
		border: 4px solid var(--bg-color);
		outline: 2px solid var(--color-from);

		transition:
			transform,
			border-radius,
			450ms var(--bounce-curve),
			width,
			height,
			250ms ease-in;

		&:hover {
			border-radius: 32px;
			transform: translateY(4px) scale(105%);
			@media screen and (width < 860px) {
				transform: translateY(2px) scale(102%);
			}

			z-index: 1;
		}

		& > .card-background {
			position: absolute;
			bottom: 0;
			right: 0;
			width: auto;
			height: 100%;
			pointer-events: none;

			display: flex;
			align-items: center;
			justify-content: end;

			font-size: 6rem;

			color: color-mix(in srgb, var(--color-to) 90%, white);
			opacity: var(--opacity, 20%);
			mix-blend-mode: overlay;
			filter: drop-shadow(0 0 20px white);
			/* Necessary to fix weird drop shadow on Orion Browser */
			z-index: 1;

			transition:
				color,
				transform,
				font-size,
				450ms var(--bounce-curve);
		}

		&:hover > .card-background {
			font-size: 7rem;
			opacity: calc(var(--bg-opacity, 20%) + 10%);
			transform: rotate(3deg);
		}

		& > .card-title {
			display: flex;
			gap: 8px;
			align-items: center;

			user-select: none;

			color: white;
			font-weight: bolder;
			font-size: 1.25rem;

			& > :global(.iconify) {
				font-size: 0.75em;
			}
		}

		& > .card-body {
			font-family:
				system-ui,
				-apple-system,
				BlinkMacSystemFont,
				"Segoe UI",
				Roboto,
				Oxygen,
				Ubuntu,
				Cantarell,
				"Open Sans",
				"Helvetica Neue",
				sans-serif;
			font-weight: 500;
			color: #eeeeee;
		}

		& > .card-actions {
			pointer-events: none;
			position: absolute;

			top: 0;
			left: 0;
			min-width: 100%;
			width: calc-size(calc-size(max-content, size), size + 24px);
			min-height: 100%;
			height: calc-size(calc-size(max-content, size), size + 24px);

			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;

			opacity: 0%;

			transition: opacity 450ms var(--bounce-curve);
			border-radius: inherit;
			backdrop-filter: blur(16px);

			& > .card-button,
			& > .card-link {
				position: absolute;
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;

				gap: 8px;

				width: 100%;
				height: 100%;

				appearance: none;
				background: none;
				cursor: pointer;
				text-decoration: none;

				color: white;
				font-size: 2rem;
				text-shadow: 0 0 2px black;

				border: none;
			}

			& > .card-button > .card-action-info,
			& > .card-link > .card-action-info,
			& > .card-action-info {
				font-size: 1rem;
				color: white;
				text-align: center;
				vertical-align: middle;
				overflow-wrap: break-word;
			}
		}

		&:hover > .card-actions {
			pointer-events: all;
			opacity: 100%;
		}
	}
</style>
