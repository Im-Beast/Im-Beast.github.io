<script lang="ts">
	export let color: string;
	export let selected: boolean = false;
</script>

<button on:click class="tab-button button group" class:selected-tab={selected} style="--color: {color};">
	<span class="tab-icon">
		<span class="base-tab-icon"> <slot name="base-icon" /> </span>
		<span class="active-tab-icon"> <slot name="active-icon" /> </span>
	</span>

	<slot />
</button>

<style>
	.tab-button {
		align-items: center;
		font-size: 1.1em;

		margin-right: 0.25rem;
		transition-property: color, transform, background-color, border-color, box-shadow;
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
		transition-duration: 150ms;

		--hover-color: color-mix(in srgb, var(--color) 80%, white);
		--active-color: color-mix(in srgb, var(--color) 60%, white);
		--icon-color: var(--color);

		--shadow-offset: 3px;
		--base-shadow-color: color-mix(in srgb, var(--bg-1) 60%, black);
		--action-shadow-color: color-mix(in srgb, var(--icon-color) 40%, black);
		--shadow-color: var(--base-shadow-color);

		border: 2px solid var(--bg-1);
		box-shadow: 0 var(--shadow-offset) 0 var(--shadow-color);

		&.selected-tab {
			border-color: var(--color);
			--shadow-color: var(--action-shadow-color);
			--shadow-offset: 2px;
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
