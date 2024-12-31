<script lang="ts">
	import type { Snippet } from "svelte";
	import ExpandableCard from "./ExpandableCard.svelte";
	import QrModal from "./QrModal.svelte";
	import { writable } from "svelte/store";

	type Props = {
		title: Snippet;
		body?: Snippet;
		background: Snippet;
		backgroundOpacity?: string;
		color: [from: string, to: string];

		crypto: string;
		address: string;
		qrImagePath: string;
	};

	let {
		title,
		body,
		background,
		backgroundOpacity,
		color,

		crypto,
		address,
		qrImagePath,
	}: Props = $props();

	const showQrCode = writable(false);
</script>

<ExpandableCard
	class="qr-card"
	{color}
	interaction="button"
	interactionIcon="material-symbols:qr-code-scanner-rounded"
	{title}
	{body}
	{background}
	{backgroundOpacity}
	handler={() => {
		$showQrCode = true;
	}}
/>

<QrModal show={showQrCode} {address} {qrImagePath} title={crypto} />

<style>
	:global .qr-card {
		.card-button {
			font-size: 4rem !important;
		}
	}
</style>
