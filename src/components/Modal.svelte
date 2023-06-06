<script lang="ts">
	import { fade } from "svelte/transition";
</script>

<div
	on:click|self
	transition:fade={{
		duration: 250,
		delay: 0,
	}}
	class="flex select-none cursor-zoom-in cursor-zoom-out items-center justify-center z-10 fixed top-0 left-0 w-full h-full bg-dark-900 bg-opacity-60"
>
	<section class="cursor-auto p-2 bg-dark-400 border-2 border-dark-700 rounded-lg">
		<slot />
	</section>
</div>
