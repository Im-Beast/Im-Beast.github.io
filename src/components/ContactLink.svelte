<script lang="ts">
	export let title: string | undefined = undefined;
	export let href: string;
	export let color: string | undefined = undefined;
	export let gradient: [string, string] | undefined = undefined;
</script>

{#if gradient}
	<a
		{href}
		{title}
		target="_blank"
		rel="noreferrer"
		class="icon-link button"
		class:gradient
		style:--color-from={gradient[0]}
		style:--color-to={gradient[1]}
		on:click
	>
		<slot />
	</a>
{:else}
	<a {href} {title} target="_blank" rel="noreferrer" class:color class="icon-link button" style:--color={color} on:click>
		<slot />
	</a>
{/if}

<style>
	.icon-link {
		--shadow-offset: 2px;

		display: inline-block;
		padding: 0.2rem 0.3rem;

		background-color: var(--bg-3);
		color: var(--text-color);

		border: 2px solid var(--bg-0);

		transition-property: color, transform, background-color, border-color, box-shadow;
		transition-timing-function: ease-in-out;
		transition-duration: 150ms;

		box-shadow: 0 var(--shadow-offset) 0 0 var(--bg-0);

		&:active {
			transform: translateY(1px);
			--shadow-offset: 0;
		}

		&.color {
			--active-color: color-mix(in srgb, var(--color) 80%, white);

			&:hover {
				background-color: var(--color);
			}

			&:active {
				background-color: var(--active-color);
			}
		}

		&.gradient {
			--active-color-from: color-mix(in srgb, var(--color-from) 80%, white);
			--active-color-to: color-mix(in srgb, var(--color-to) 80%, white);

			&:hover {
				background: linear-gradient(to bottom right, var(--color-to), var(--color-from));
			}

			&:active {
				background: linear-gradient(to bottom right, var(--active-color-to), var(--active-color-from));
			}
		}
	}
</style>
