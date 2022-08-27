<script>
	import Tab from "$lib/Tab.svelte";
	import Tooltip from "$lib/Tooltip.svelte";

	const MONERO_ADDRESS =
		"89BoVWjqdGVe68wdxbYurXR8sXaEb96eWKYRPxdT6wSCfZYK6XSHoj5ZRXQLtd7GzL2B2PD7Lb7GSKupkXMWjQVFAEb1CK8";
</script>

<Tab>
	<svelte:fragment slot="title">
		<img class="title-logo" src="/branding/monero.svg" alt="Monero logo" />
		Monero</svelte:fragment>

	<svelte:fragment slot="description">
		I'm not a huge fan of crypto, but this one isn't that bad
		<br />
		<img class="qr-code" src="/personal/monero-donate-qr.png" alt="QR Code holding Monero address of Im-Beast" />
	</svelte:fragment>

	<svelte:fragment slot="bottom">
		<code class="address"> {MONERO_ADDRESS} </code>

		<Tooltip message="Copy address">
			<button
				class="copy-address"
				on:click={() => {
					navigator.clipboard.writeText(MONERO_ADDRESS);
				}}>
				📋
			</button>
		</Tooltip>
	</svelte:fragment>
</Tab>

<style lang="scss">
	.title-logo {
		height: 1.25rem;
		background-color: var(--contrast-color);
		padding: 1px;
		border-radius: 100%;
	}

	.qr-code {
		display: flex;
		margin-inline: auto;
		margin-top: 0.25rem;
		margin-bottom: 0.5rem;

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
