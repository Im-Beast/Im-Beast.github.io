<script lang="ts">
	import Christmas from "$lib/Christmas.svelte";
	import Footer from "$lib/Footer.svelte";
	import "../app.scss";

	export const prerender = true;
</script>

<Christmas />

<slot />

<Footer />
