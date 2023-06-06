<script lang="ts">
	import Card from "@components/Card.svelte";

	export let url: string;
</script>

<Card>
	<slot slot="title" name="title" />
	<slot slot="description" name="description" />

	<svelte:fragment slot="footer">
		<a
			class="min-h-10 flex items-center justify-center group external-link-text-pink"
			href={url}
			target="_blank"
			rel="noreferrer"
		>
			<span class="external-link-icon-pink" />
			<slot name="action-text">More info here!</slot>
		</a>
	</svelte:fragment>
</Card>
