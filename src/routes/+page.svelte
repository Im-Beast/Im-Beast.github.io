<script lang="ts">
	import Moon from "$lib/components/Moon.svelte";
	import Signature from "$lib/components/Signature.svelte";
	import Sun from "$lib/components/Sun.svelte";
</script>

<main>
	<header>
		<!-- <Sun /> -->
		<Moon />
		<Signature />
	</header>

	<section>
		<p>I am also known as Beast.</p>
	</section>
</main>

<style>
	header {
		padding: 32px;
		background: linear-gradient(to bottom, var(--background-highlight), var(--background));
	}

	section {
		font-family: sans-serif;
		padding: 32px;
	}
</style>
