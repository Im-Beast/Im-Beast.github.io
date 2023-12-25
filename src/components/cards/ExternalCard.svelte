<script lang="ts">
	import Card from "@components/Card.svelte";
	import ExternalLink from "@components/ExternalLink.svelte";

	export let url: string;
	export let color: string;
</script>

<Card {color}>
	<slot slot="title" name="title" />
	<slot slot="description" name="description" />
	<ExternalLink slot="footer" href={url} {color}>
		<slot name="action-text">More info here!</slot>
	</ExternalLink>
</Card>
