<script lang="ts">
	import { fade } from "svelte/transition";
	import { sineInOut } from "svelte/easing";
	import DonateTab from "./DonateTab.svelte";
</script>

<section id="donate" in:fade={{ duration: 250, easing: sineInOut }}>
	<div class="container" />
	<DonateTab
		title={"Monero"}
		img={"images/monero.svg"}
		crypto={{
			address:
				"89BoVWjqdGVe68wdxbYurXR8sXaEb96eWKYRPxdT6wSCfZYK6XSHoj5ZRXQLtd7GzL2B2PD7Lb7GSKupkXMWjQVFAEb1CK8",
			qrCodeImg: "images/monero-qr-code.png",
		}}
	>
		<p slot="description" class="description">
			<a
				href="https://www.reddit.com/r/Monero/comments/niie3s/comment/gz3hdpp/?utm_source=share&utm_medium=web2x&context=3"
				target="_blank"
				title="test"
				><cite
					>I'm not a huge fan of crypto but lesser evil is definitely better than greater evil</cite
				></a
			>
			~ Genghis Khan or smth
		</p>
	</DonateTab>
</section>

<style lang="scss">
	#donate {
		position: relative;

		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-evenly;

		width: 100%;
		min-height: 16rem;

		.description {
			width: fit-content;
		}
	}
</style>
