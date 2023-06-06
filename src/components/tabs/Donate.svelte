<script>
	import Paginator from "@components/Paginator.svelte";
	import ZoomedImage from "@components/ZoomedImage.svelte";
	import CryptoCard from "@components/cards/CryptoCard.svelte";
	import ExternalCard from "@components/cards/ExternalCard.svelte";
</script>

<ZoomedImage />

<Paginator>
	<ExternalCard url="https://github.com/sponsors/Im-Beast">
		<svelte:fragment slot="title">
			<span class="i-solar-hearts-outline text-#f157c3" />
			Github Sponsors
		</svelte:fragment>

		<svelte:fragment slot="description">
			<ul class="list">
				<li>Money goes into my Stripe account where it needs to be withdrawn later</li>
				<li>No taxes are accrued on the amount I'll receive</li>
			</ul>
		</svelte:fragment>
	</ExternalCard>

	<ExternalCard url="https://revolut.me/imbeast">
		<svelte:fragment slot="title">
			<span class="i-tabler-brand-revolut text-#ffffff" />
			Revolut
		</svelte:fragment>

		<svelte:fragment slot="description">
			<ul class="list">
				<li>Money goes instantly into my Revolut account.</li>
				<li>No taxes are accrued on the amount I'll receive</li>
			</ul>
		</svelte:fragment>

		<svelte:fragment slot="action-text">Donate here!</svelte:fragment>
	</ExternalCard>

	<CryptoCard
		address="89BoVWjqdGVe68wdxbYurXR8sXaEb96eWKYRPxdT6wSCfZYK6XSHoj5ZRXQLtd7GzL2B2PD7Lb7GSKupkXMWjQVFAEb1CK8"
		qrCodeUrl="monero-donate-qr.png"
	>
		<svelte:fragment slot="title">
			<span slot="icon" class="i-tabler-coin-monero text-#ff6600" />
			Monero
		</svelte:fragment>

		<svelte:fragment slot="description">
			<ul class="list">
				<li>Anonymous</li>
				<li>ASIC Resistant</li>
				<li>Low transaction tax</li>
			</ul>
		</svelte:fragment>
	</CryptoCard>

	<CryptoCard address="bc1qphsgfytfm03p4f3ygfaqeq2lpzsaalgvwt5a3w" qrCodeUrl="bitcoin-donate-qr.png">
		<svelte:fragment slot="title">
			<span slot="icon" class="i-tabler-coin-bitcoin text-#ff9900" />
			Bitcoin
		</svelte:fragment>

		<svelte:fragment slot="description">
			<ul class="list">
				<li>Trace-able</li>
				<li>Huge power waste</li>
			</ul>
		</svelte:fragment>
	</CryptoCard>

	<CryptoCard
		address="0xCf011612a84bB7b1B8b921164090C48deF7F1eFa"
		qrCodeUrl="ethereum-donate-qr.png"
	>
		<svelte:fragment slot="title">
			<span slot="icon" class="i-tabler-currency-ethereum text-#101010" />
			Ethereum
		</svelte:fragment>

		<svelte:fragment slot="description">
			<ul class="list">
				<li>I don't know enough to speak about it</li>
			</ul>
		</svelte:fragment>
	</CryptoCard>
</Paginator>

<style>
	.list {
		--at-apply: list-disc pl-5;
	}
</style>
