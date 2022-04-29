<script lang="ts">
	import Tab from "./Tab.svelte";
	import { fly } from "svelte/transition";
	import { circInOut } from "svelte/easing";

	async function copyToClipboard(text: string) {
		await navigator.clipboard.writeText(text);
	}

	async function copyAddress() {
		if (crypto?.address) await copyToClipboard(crypto.address);
	}

	export let title: string;

	export let img: string | undefined = undefined;
	export let link: { href: string; name: string } | undefined = undefined;
	export let crypto: { address?: string; qrCodeImg?: string } | undefined = undefined;

	let showQRCode = false;
</script>

{#if crypto?.qrCodeImg && showQRCode}
	<div
		class="modal"
		transition:fly={{ y: 350, delay: 0, duration: 300, easing: circInOut }}
		on:click={() => (showQRCode = false)}
	>
		<img
			class="qr-code"
			src={crypto.qrCodeImg}
			alt="Monero address served via QR Code"
			width="24px"
			height="24px"
		/>
	</div>
{/if}

<Tab _class="donate-tab">
	<p slot="title">
		<img src={img} class="logo" alt={`${title} logo`} />
		{title}
	</p>
	<p slot="description">
		<slot name="description" />
	</p>
	<div slot="footer" class="donate-footer">
		{#if link}
			<a href={link.href}>{link.name}</a>
		{/if}
		<div class="address-container">
			{#if crypto?.address}
				<code class="address" contenteditable="false" bind:textContent={crypto.address}>
					{crypto.address}
				</code>
				<button title="Copy to clipboard" on:click={copyAddress}>📋</button>
			{/if}

			{#if crypto?.qrCodeImg}
				<button title="Show QR code to scan" on:click={() => (showQRCode = !showQRCode)}>QR</button>
			{/if}
		</div>
	</div>
</Tab>

<style>
	:global(.donate-tab) {
		min-height: 15rem;
		min-width: 190px;
	}

	.qr-code {
		position: fixed;
		width: auto;
		height: 40%;
		image-rendering: pixelated;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		border-radius: 0.5rem;
	}

	.address-container {
		width: 100%;
	}

	.address {
		display: flex;
		align-items: center;
		margin-right: 0.25rem;
		overflow-x: auto;
	}

	.logo {
		height: 1.2rem;
	}

	.donate-footer {
		display: flex;
		flex-direction: column;
		padding: 0;
	}

	.donate-footer > div {
		display: flex;
		flex-direction: row;
	}

	.donate-footer > div > button {
		padding: 0.5rem;
		margin: 0 0.2rem;
	}
</style>
