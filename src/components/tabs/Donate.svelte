<script>
	import Paginator from "@components/Paginator.svelte";
	import CryptoCard from "@components/cards/CryptoCard.svelte";
	import ExternalCard from "@components/cards/ExternalCard.svelte";
	import Icon from "@iconify/svelte";
</script>

<Paginator>
	<ExternalCard
		name="Github Sponsors"
		icon="solar:hearts-outline"
		color="#f157c3"
		url="https://github.com/sponsors/Im-Beast"
	>
		<svelte:fragment slot="description">
			<ul>
				<li>Money goes into my Stripe account where it needs to be withdrawn later</li>
				<li>No taxes are accrued on the amount I'll receive</li>
			</ul>
		</svelte:fragment>
	</ExternalCard>

	<ExternalCard name="Revolut" icon="tabler:brand-revolut" color="#ffffff" url="https://revolut.me/imbeast">
		<svelte:fragment slot="description">
			<ul>
				<li>Money goes instantly into my Revolut account.</li>
				<li>No taxes are accrued on the amount I'll receive</li>
			</ul>
		</svelte:fragment>

		<svelte:fragment slot="action-text">Donate here!</svelte:fragment>
	</ExternalCard>

	<CryptoCard
		name="Monero"
		icon="tabler:coin-monero"
		color="#ff6600"
		address="89BoVWjqdGVe68wdxbYurXR8sXaEb96eWKYRPxdT6wSCfZYK6XSHoj5ZRXQLtd7GzL2B2PD7Lb7GSKupkXMWjQVFAEb1CK8"
		qrCodeHref="monero-donate-qr.png"
	>
		<ul>
			<li>Anonymous</li>
			<li>ASIC Resistant</li>
			<li>Low transaction tax</li>
		</ul>
	</CryptoCard>

	<CryptoCard
		name="Bitcoin"
		icon="tabler:coin-bitcoin"
		color="#ff9900"
		address="bc1qphsgfytfm03p4f3ygfaqeq2lpzsaalgvwt5a3w"
		qrCodeHref="bitcoin-donate-qr.png"
	>
		<ul>
			<li>Trace-able</li>
			<li>Huge power waste</li>
		</ul>
	</CryptoCard>

	<CryptoCard
		name="Ethereum"
		icon="tabler:currency-ethereum"
		color="#8a93b2"
		address="0xCf011612a84bB7b1B8b921164090C48deF7F1eFa"
		qrCodeHref="ethereum-donate-qr.png"
	>
		<ul>
			<li>I don't know enough to speak about it</li>
		</ul>
	</CryptoCard>
</Paginator>
