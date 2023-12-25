<script lang="ts">
	import Icon from "@iconify/svelte";

	export let baseIcon: string;
	export let activeIcon: string;
	export let color: string = "#ffaa60";

	export let href: string | undefined = undefined;
	export let title: string | undefined = undefined;
	export let target: string | undefined = undefined;
	export let rel: string | undefined = undefined;
</script>

<a on:click {target} {rel} class="external-link" {href} {title} style:--color={color}>
	<span class="external-link-icon">
		<Icon class="base-link-icon" icon={baseIcon} />
		<Icon class="active-link-icon" icon={activeIcon} />
	</span>

	<slot />
</a>

<style>
	.external-link {
		--icon-color: var(--color);
		--hover-color: color-mix(in srgb, var(--color) 60%, white);
		--active-color: color-mix(in srgb, var(--color) 30%, white);

		cursor: pointer;

		&:hover {
			--icon-color: var(--hover-color);

			color: var(--icon-color);
			text-decoration: underline;

			& > .external-link-icon {
				& > .base-link-icon {
					display: none;
				}

				& > .active-link-icon {
					display: inline;
				}
			}
		}

		&:active {
			--icon-color: var(--active-color);
		}

		& > .external-link-icon {
			color: var(--icon-color);

			& > .base-link-icon {
				display: inline;
			}

			& > .active-link-icon {
				display: none;
			}
		}
	}
</style>
