<script lang="ts">
	import Credits from "@components/Credits.svelte";

	let creditsOpened = false;
</script>

<Credits bind:opened={creditsOpened} />

<footer
	class="relative p-1 mt-auto w-full mb-0 flex justify-center items-center bg-dark-400 border-2 border-dark-900 max-w-200 sm:rounded-t-2xl"
>
	<p class="text-center w-full">&copy; 2023 Im-Beast</p>

	<button
		title="Credits for used projects"
		on:click={() => (creditsOpened = true)}
		class="button mr-1"
	>
		<span class="i-mingcute-file-infor-fill" />
	</button>

	<a
		title="Source code of this website"
		href="https://github.com/Im-Beast/Im-Beast.github.io/"
		rel="noreferrer"
		target="_blank"
		class="button mr-1"
	>
		<span class="i-mingcute-github-fill" />
	</a>
</footer>
