<script lang="ts">
	import IconLink from "./IconLink.svelte";

	export let href: string;
	export let color: string = "#ffaa60";

	export let title: string | undefined = undefined;
</script>

<IconLink
	target="_blank"
	rel="noreferrer"
	{href}
	{title}
	{color}
	baseIcon="mingcute:external-link-line"
	activeIcon="mingcute:external-link-fill"
>
	<slot />
</IconLink>
