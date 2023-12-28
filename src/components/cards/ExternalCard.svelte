<script lang="ts">
	import Card from "@components/Card.svelte";
	import ExternalLink from "@components/ExternalLink.svelte";
	import Icon from "@iconify/svelte";

	export let name: string;
	export let icon: string;
	export let url: string;
	export let color: string;
</script>

<Card {color}>
	<svelte:fragment slot="title">
		<Icon {icon} {color} class="card-logo" />
		{name}
	</svelte:fragment>

	<slot slot="description" name="description" />
	<ExternalLink slot="footer" href={url} {color}>
		<slot name="action-text">More info here!</slot>
	</ExternalLink>
</Card>
