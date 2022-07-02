<script lang="ts">
	import Tab from "./Tab.svelte";
	import { slide } from "svelte/transition";

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
	<div class="modal" transition:slide on:click={() => (showQRCode = false)}>
		<img
			class="qr-code"
			src={crypto.qrCodeImg}
			alt="Monero address served via QR Code"
			width="256px"
			height="256px"
		/>
	</div>
{/if}

<Tab _class="donate-tab">
	<p slot="title" class="title">
		<img src={img} class="logo" alt={`${title} logo`} width="24px" height="24px" />
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

<style lang="scss">
	.modal {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: var(--gray-transparentish);
		opacity: 1;
		backdrop-filter: blur(6px);
		user-select: none;
		z-index: 1;
		cursor: crosshair;

		> .qr-code {
			position: fixed;
			width: auto;
			height: 40%;
			image-rendering: pixelated;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			border-radius: 0.5rem;
		}
	}

	:global(.donate-tab) {
		min-height: 15rem;

		.title {
			> .logo {
				height: 1.2rem;
			}
		}

		.donate-footer {
			display: flex;
			flex-direction: column;
			padding: 0;

			> .address-container {
				width: fit-content;

				> .address {
					display: flex;
					align-items: center;
					margin-right: 0.25rem;
					overflow-x: auto;
					word-wrap: break-word;
					white-space: pre-wrap;
					word-break: break-word;
				}
			}

			> div {
				display: flex;
				flex-direction: row;

				> button {
					padding: 0.5rem;
					margin: 0 0.2rem;
				}
			}
		}
	}
</style>
