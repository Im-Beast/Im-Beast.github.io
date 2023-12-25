<script lang="ts">
	import TactileButton from "./TactileButton.svelte";

	export let color: string;
	export let selected: boolean = false;

	export let title: string | undefined = undefined;
</script>

<TactileButton
	{...$$restProps}
	{title}
	forceActive={selected}
	{color}
	style={$$props.style}
	class={$$props.class}
	on:click
>
	<slot slot="base-icon" name="base-icon" />
	<slot slot="active-icon" name="active-icon" />

	<slot />
</TactileButton>
