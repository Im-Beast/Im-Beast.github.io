<script lang="ts">
	import Tab from "./Tab.svelte";

	export let title: string;
	export let img: string;
	export let url: string;
	export let urlName: string;
	export let activity: string;
</script>

<Tab _class="contact-tab">
	<p slot="title" class="title">
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

<style lang="scss">
	:global(.contact-tab) {
		min-width: fit-content;
		width: calc(25% - 0.5rem) !important;

		@media screen and (max-width: 900px) {
			width: calc(50% - 0.5rem) !important;
		}

		@media screen and (max-width: 670px) {
			width: 100% !important;
		}

		.logo {
			height: 1.2rem;
		}

		.contact-link {
			text-align: center;
			margin: 0.5rem 1rem 1rem 1rem;
		}
	}
</style>
