<script lang="ts">
	import type { Writable } from "svelte/store";
	import { fade } from "svelte/transition";

	import Icon from "@iconify/svelte";

	interface Props {
		show: Writable<boolean>;
		address: string;
		qrImagePath: string;
		title: string;
	}

	let { show, address, qrImagePath, title }: Props = $props();

	function clickOffModal(event: MouseEvent): void {
		if (event.target instanceof HTMLElement && event.target.id === "qr-modal") {
			$show = false;
		}
	}

	function escapeModal(event: KeyboardEvent): void {
		if (event.key === "Escape") {
			$show = false;
		}
	}

	let copied = $state(false);
	async function copyToClipboard(text: string): Promise<void> {
		await navigator.clipboard.writeText(text);
		copied = true;
		setTimeout(() => {
			copied = false;
		}, 1500);
	}
</script>

{#if $show}
	<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
	<div
		transition:fade={{
			duration: 300,
		}}
		role="dialog"
		aria-modal="true"
		id="qr-modal"
		onclick={clickOffModal}
		onkeydown={escapeModal}
	>
		<section id="qr-modal-window">
			<h1>{title}</h1>
			<img src={qrImagePath} alt="QR code for {title}" />

			<h2>Address</h2>
			<div id="qr-modal-address">
				<code>{address}</code>
				<button onclick={() => copyToClipboard(address)}>
					{#if copied}
						<Icon icon="mdi:clipboard-check-outline" />

						Copied
					{:else}
						<Icon icon="mdi:clipboard-outline" />
						Copy
					{/if}
				</button>
			</div>
		</section>
	</div>
{/if}

<style>
	#qr-modal {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;

		display: flex;
		justify-content: center;
		align-items: center;

		backdrop-filter: blur(32px);

		z-index: 9999;

		& > #qr-modal-window {
			width: min(75vw, 384px);

			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			gap: 16px;

			padding: 16px 32px 32px;
			border-radius: 24px;

			background: color-mix(in srgb, black, transparent 50%);
			backdrop-filter: blur(16px);
			color: white;

			& > h1 {
				font-size: 2rem;
			}

			& > img {
				width: 100%;
				border-radius: 16px;
				image-rendering: pixelated;
			}

			& > #qr-modal-address {
				display: flex;
				gap: 8px;

				& > code {
					white-space: wrap;
					word-break: break-all;
				}

				& > button {
					border: none;
					color: var(--fg-color);
					padding: 12px;
					border-radius: 16px;
					min-width: 8ch;

					background-color: color-mix(in srgb, white, transparent 90%);
					transition: background-color 50ms ease-out;

					&:hover {
						background-color: color-mix(in srgb, white, transparent 80%);
					}

					&:active {
						background-color: color-mix(in srgb, white, transparent 60%);
					}
				}
			}
		}
	}
</style>
