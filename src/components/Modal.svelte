<script lang="ts">
	import { fade } from "svelte/transition";
</script>

<div
	on:click|self
	transition:fade={{
		duration: 250,
		delay: 0,
	}}
	class="modal"
>
	<section class="modal-box {$$restProps.class ?? ''}" style={$$restProps.style}>
		<slot />
	</section>
</div>

<style>
	.modal {
		position: fixed;
		inset: 0;

		z-index: 9999;

		background-color: color-mix(in srgb, var(--bg-1) 70%, transparent);

		& > .modal-box {
			position: absolute;
			inset: 50%;
			transform: translate(-50%, -50%);

			width: max-content;
			max-width: 90vw;
			height: max-content;

			padding: 1rem;

			border: 2px solid var(--bg-0);
			border-radius: 0.5rem;

			background-color: var(--bg-3);
		}
	}
</style>
