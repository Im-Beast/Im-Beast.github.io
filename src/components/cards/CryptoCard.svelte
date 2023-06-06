<script lang="ts">
	import Card from "../Card.svelte";
	import { zoomedImage } from "@stores/zoomedImage";

	export let qrCodeUrl: string;
	export let address: string;

	async function copyToClipbard(text: string): Promise<void> {
		await navigator.clipboard.writeText(text);
	}

	let image: HTMLImageElement;
</script>

<Card>
	<slot slot="title" name="title" />

	<svelte:fragment slot="description">
		<slot name="description" />
		<img
			bind:this={image}
			src={qrCodeUrl}
			alt="QR Code"
			height="0"
			width="0"
			class="image-pixelated mx-auto rounded-lg mt-2 mb-4"
		/>
	</svelte:fragment>

	<svelte:fragment slot="footer">
		<code class="w-max overflow-x-scroll">{address}</code>

		<button
			on:click={() => ($zoomedImage = image)}
			class="group button p-1! ml-2 group hover:border-zinc-300 active:border-zinc-200"
		>
			<span
				title="Show Adress QR Code"
				class="i-mingcute-qrcode-2-line group-hover:i-mingcute-qrcode-2-fill text-zinc-300! active:text-zinc-200"
			/>
		</button>

		<button
			on:click={() => address && copyToClipbard(address)}
			class="group button p-1! ml-2 hover:border-fuchsia-300 active:border-fuchsia-200"
		>
			<span
				title="Copy address to clipboard"
				class="i-solar-clipboard-heart-outline group-hover:i-solar-clipboard-heart-bold text-fuchsia-300! active:text-fuchsia-200!"
			/>
		</button>
	</svelte:fragment>
</Card>
