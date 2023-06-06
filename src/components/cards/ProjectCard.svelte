<script lang="ts">
	import Card from "@components/Card.svelte";

	export let stars: number;
	export let license: string | undefined;
	export let repositoryUrl: string;
</script>

<Card>
	<slot slot="title" name="title" />
	<slot slot="description" name="description" />
	<svelte:fragment slot="footer">
		<p>
			<span class="i-mingcute-star-fill text-yellow-300" />
			{stars}
		</p>
		{#if license}
			<p>
				<span class="i-solar-file-smile-bold-duotone text-sky-300" />
				{license}
			</p>
		{/if}
		<p>
			<a class="group external-link-text-orange" href={repositoryUrl} target="_blank" rel="noreferrer">
				<span class="external-link-icon-orange" />
				Repo
			</a>
		</p>
	</svelte:fragment>
</Card>
