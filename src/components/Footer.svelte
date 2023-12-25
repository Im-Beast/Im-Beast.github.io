<script lang="ts">
	import Credits from "@components/Credits.svelte";
	let creditsOpened = false;
</script>

<Credits bind:opened={creditsOpened} />

<footer>
	<p class="text-center w-full">&copy; 2023 Im-Beast</p>
</footer>

<style>
	footer {
		display: flex;
		justify-content: stretch;
		align-items: center;

		margin-top: auto;
		margin-bottom: 0.5rem;
		padding: 0.5rem;

		width: 100%;
		max-width: 55rem;

		background-color: var(--bg-2);
		border: 2px solid var(--bg-0);
		border-radius: 0.4rem;
	}
</style>
