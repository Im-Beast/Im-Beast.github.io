<script lang="ts">
	import Tab from "./Tab.svelte";

	export let title: string;
	export let img: string;
	export let url: string;
	export let urlName: string;
	export let activity: string;
</script>

<Tab _class="contact-tab">
	<p slot="title">
		<img src={img} class="logo" alt={`${title} logo`} width="24px" height="24px" />
		{title}
	</p>
	<p slot="description" class="contact-link">
		<a href={url}>{urlName}</a>
	</p>
	<p slot="footer">
		{activity}
	</p>
</Tab>

<style>
	.logo {
		height: 1.2rem;
	}

	.contact-link {
		text-align: center;
		margin: 0.5rem 1rem 1rem 1rem;
	}

	:global(.contact-tab) {
		min-width: fit-content;
		width: 100% !important;
	}
</style>
