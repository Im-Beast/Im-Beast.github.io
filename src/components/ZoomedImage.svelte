<script lang="ts">
	import { zoomedImage } from "@stores/zoomedImage";
	import Modal from "./Modal.svelte";

	function unzoom(event: Event) {
		if (!$zoomedImage) return;
		else if (event instanceof KeyboardEvent && event.key === "Escape") {
			$zoomedImage = undefined;
		} else if (event instanceof PointerEvent) {
			$zoomedImage = undefined;
		}
	}
</script>

<svelte:window on:keyup={unzoom} />

{#if $zoomedImage}
	<Modal on:click={unzoom}>
		<img
			class="cursor-auto! block! w-10/12! m-5! h-auto! {$zoomedImage.className}"
			src={$zoomedImage.src}
			alt={$zoomedImage.alt}
		/>
	</Modal>
{/if}
