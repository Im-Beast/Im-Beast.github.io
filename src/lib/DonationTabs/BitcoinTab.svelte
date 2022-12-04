<script>
	import Tab from "$lib/Tab.svelte";
	import Tooltip from "$lib/Tooltip.svelte";

	const BITCOIN_ADDRESS = "bc1qphsgfytfm03p4f3ygfaqeq2lpzsaalgvwt5a3w";
</script>

<Tab>
	<svelte:fragment slot="title">
		<img class="title-logo" src="/branding/bitcoin.svg" alt="Bitcoin logo" />
		Bitcoin
	</svelte:fragment>

	<svelte:fragment slot="description">
		It could be better tbh, use only if you have to
		<br />
		<img class="qr-code" src="/personal/bitcoin-donate-qr.png" alt="QR Code holding Bitcoin address of Im-Beast" />
	</svelte:fragment>

	<svelte:fragment slot="bottom">
		<code class="address"> {BITCOIN_ADDRESS} </code>

		<Tooltip message="Copy address">
			<button
				class="copy-address"
				on:click={() => {
					navigator.clipboard.writeText(BITCOIN_ADDRESS);
				}}>
				📋
			</button>
		</Tooltip>
	</svelte:fragment>
</Tab>

<style lang="scss">
	.title-logo {
		height: 1.25rem;
		width: 1.25rem;
		background-color: var(--contrast-color);
		padding: 1px;
		border-radius: 100%;
	}

	.qr-code {
		display: flex;
		margin-inline: auto;
		margin-top: 0.25rem;
		margin-bottom: 0.5rem;

		image-rendering: pixelated;

		height: 10rem;

		border-radius: 0.7rem;
	}

	.address {
		padding: 0.25rem;
		width: max-content;
		overflow-x: scroll;
		overflow-y: hidden;
	}

	.copy-address {
		height: 100%;
		margin-left: 0.5rem;
		padding: 0rem 0.25rem;
	}
</style>
