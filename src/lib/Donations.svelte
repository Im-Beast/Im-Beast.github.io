<script>
	import Carousel from "./Carousel.svelte";
	import BitcoinTab from "./DonationTabs/BitcoinTab.svelte";
	import EthereumTab from "./DonationTabs/EthereumTab.svelte";

	import MoneroTab from "./DonationTabs/MoneroTab.svelte";
</script>

<Carousel disabled={false}>
	<MoneroTab />
	<BitcoinTab />
	<EthereumTab />
</Carousel>
