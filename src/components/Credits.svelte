<script lang="ts">
	import Modal from "./Modal.svelte";

	export let opened = false;
</script>

{#if opened}
	<Modal on:click={() => (opened = false)}>
		<h1 class="font-bold text text-5">
			This website wouldn't be possible without any of these projects:
		</h1>
		<ul class="list-disc sm:grid sm:grid-cols-2 pl-5 text-4.5 text-dark-100">
			<li>
				<a href="https://svelte.dev/" class="external-link-text-red">
					<span class="external-link-icon-red" />
					Svelte
				</a>
			</li>
			<li>
				<a href="https://kit.svelte.dev/" class="external-link-text-red">
					<span class="external-link-icon-red" />
					SvelteKit
				</a>
			</li>
			<li>
				<a href="https://iconify.design/" class="external-link-text-indigo" rel="noreferrer">
					<span class="external-link-icon-indigo" />
					Iconify</a
				>
			</li>
			<li>
				<a href="https://unocss.dev/" class="external-link-text-stone" rel="noreferrer">
					<span class="external-link-icon-stone" />
					UnoCSS</a
				>
			</li>
			<li>
				<a href="https://vitejs.dev/" class="external-link-text-purple" rel="noreferrer">
					<span class="external-link-icon-purple" />
					Vite</a
				>
			</li>
			<li>
				<a href="https://www.typescriptlang.org/" class="external-link-text-blue" rel="noreferrer">
					<span class="external-link-icon-blue" />
					Typescript</a
				>
			</li>
			<li>
				<a href="https://eslint.org/" class="external-link-text-fuchsia" rel="noreferrer">
					<span class="external-link-icon-fuchsia" />
					ESLint</a
				>
			</li>
			<li>
				<a href="https://prettier.io/" class="external-link-text-sky" rel="noreferrer">
					<span class="external-link-icon-sky" />
					Prettier</a
				>
			</li>
		</ul>
	</Modal>
{/if}
