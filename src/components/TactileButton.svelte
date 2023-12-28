<script lang="ts">
	export let tag: string = "button";
	export let color: string;
	export let forceActive: boolean = false;

	export let title: string | undefined = undefined;
</script>

<svelte:options />

<svelte:element
	this={tag}
	{...$$restProps}
	{title}
	class="tab-button button group {$$props.class}"
	class:forceActive
	style={$$props.style}
	style:--color={color}
	on:click
>
	<span class="tab-icon">
		<span class="base-tab-icon"> <slot name="base-icon" /> </span>
		<span class="active-tab-icon"> <slot name="active-icon" /> </span>
	</span>

	<slot />
</svelte:element>

<style>
	.tab-button {
		--hover-color: color-mix(in srgb, var(--color) 80%, white);
		--active-color: color-mix(in srgb, var(--color) 60%, white);
		--icon-color: var(--color);

		--shadow-offset: 3px;
		--base-shadow-color: color-mix(in srgb, var(--bg-1) 60%, var(--bg-full));
		--action-shadow-color: color-mix(in srgb, var(--icon-color) 60%, var(--bg-full));
		--shadow-color: var(--base-shadow-color);

		align-items: center;
		font-size: 1.1em;

		margin-right: 0.25rem;
		transition-property: color, transform, background-color, border-color, box-shadow;
		transition-timing-function: ease-in-out;
		transition-duration: 150ms;

		border: 2px solid var(--bg-1);
		box-shadow: 0 var(--shadow-offset) 0 var(--shadow-color);

		&:disabled {
			--icon-color: var(--bg-2);
			--shadow-color: var(--bg-1);
			--shadow-offset: 2px;

			pointer-events: none;
		}

		&.forceActive {
			--shadow-color: var(--action-shadow-color);
			--shadow-offset: 2px;

			border-color: var(--color);
			transform: translateY(1px);

			& > .tab-icon {
				& > .base-tab-icon {
					display: none;
				}

				& > .active-tab-icon {
					display: contents;
				}
			}
		}

		&:hover {
			--icon-color: var(--hover-color);
			--shadow-color: var(--action-shadow-color);

			border-color: var(--hover-color);

			& > .tab-icon {
				& > .base-tab-icon {
					display: none;
				}

				& > .active-tab-icon {
					display: contents;
				}
			}
		}

		&:active {
			--icon-color: var(--active-color);
			--shadow-offset: 0;

			transform: translateY(2px);
			border-color: var(--active-color);
		}
	}

	.tab-icon {
		color: var(--icon-color);

		& > .base-tab-icon {
			display: contents;
		}

		& > .active-tab-icon {
			display: none;
		}
	}
</style>
