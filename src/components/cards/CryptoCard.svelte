<script lang="ts">
	import Card from "../Card.svelte";
	import Modal from "@components/Modal.svelte";
	import IconLink from "@components/IconLink.svelte";
	import Icon from "@iconify/svelte";
	import TactileButton from "@components/TabButton.svelte";

	export let icon: string;
	export let qrCodeHref: string;
	export let name: string;
	export let address: string;
	export let color: string;

	async function copyToClipbard(text: string): Promise<void> {
		await navigator.clipboard.writeText(text);
	}

	let openedModal = false;
</script>

<Card {color}>
	<svelte:fragment slot="title">
		<Icon {icon} {color} class="card-logo" />
		{name}
	</svelte:fragment>

	<slot slot="description" />

	<IconLink
		slot="footer"
		on:click={() => (openedModal = true)}
		baseIcon="mingcute:pig-money-line"
		activeIcon="mingcute:pig-money-fill"
		{color}
	>
		Donate
	</IconLink>
</Card>

{#if openedModal}
	<Modal class="crypto-modal" style="--color: {color}" on:click={() => (openedModal = false)}>
		<h1>Donate via <Icon class="card-logo" {icon} {color} /> {name}</h1>
		<hr />

		<h2>Address:</h2>
		<div class="adresses">
			<img src={qrCodeHref} height="10rem" alt="QR" />

			<code class="address">
				{address}

				<TactileButton
					title="Copy address to clipboard"
					color="#ff4590"
					class="copy-to-clipboard"
					on:click={() => address && copyToClipbard(address)}
				>
					<Icon slot="base-icon" icon="solar:clipboard-heart-outline" />
					<Icon slot="active-icon" icon="solar:clipboard-heart-bold" />
				</TactileButton>
			</code>
		</div>
	</Modal>
{/if}

<style>
	:global(.crypto-modal) {
		display: flex;
		flex-direction: column;

		border-color: var(--color) !important;

		& > h1 {
			/* prettier-ignore */
			text-shadow:
				0 1px 0 color-mix(in srgb, var(--color) 60%, var(--bg-full)),
				0 2px 0 color-mix(in srgb, var(--color) 50%, var(--bg-full)),
				0 3px 0 color-mix(in srgb, var(--color) 40%, var(--bg-full)),
				0 4px 0 color-mix(in srgb, var(--color) 30%, var(--bg-full));
		}

		& > h2 {
			/* prettier-ignore */
			text-shadow:
				0 2px 0 color-mix(in srgb, var(--color) 30%, var(--bg-full)),
				0 3px 0 color-mix(in srgb, var(--color) 40%, var(--bg-full));
		}

		& > .adresses {
			display: flex;
			gap: 1rem;

			@media (max-width: 640px) {
				flex-direction: column;
			}

			& > img {
				border: 2px solid var(--bg-0);
				border-radius: 0.5rem;
				image-rendering: pixelated;
				height: 13rem;
			}

			& > .address {
				position: relative;

				overflow: auto;
				overflow-wrap: break-word;

				padding: 0.5rem;

				background-color: var(--bg-4);

				border: 2px solid var(--bg-0);
				border-radius: 0.5rem;
				line-height: 2rem;

				& > .copy-to-clipboard {
					position: absolute;
					bottom: 0.2rem;
					right: 0.2rem;

					padding: 0rem 0.25rem;

					--color: var(--color);
				}
			}
		}
	}
</style>
