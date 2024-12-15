<script lang="ts">
	let { children } = $props();
</script>

<main>
	{@render children()}
</main>

<style>
	:global {
		* {
			box-sizing: border-box;
			padding: 0;
			margin: 0;
		}

		:root {
			--fg-color: #000000;
			--bg-color: #ffffff;
			--bounce-curve: cubic-bezier(0.5, 2, 0.5, 0.8);
		}

		@media (prefers-color-scheme: dark) {
			:root {
				--fg-color: #ffffff;
				--bg-color: #000000;
			}
		}

		:root {
			font-family:
				system-ui,
				-apple-system,
				BlinkMacSystemFont,
				"Segoe UI",
				Roboto,
				Oxygen,
				Ubuntu,
				Cantarell,
				"Open Sans",
				"Helvetica Neue",
				sans-serif;
			font-size: 20px;

			color: var(--fg-color);
			background-color: var(--bg-color);
		}

		h1,
		h2 {
			font-size: 1rem;
			font-weight: bolder;
		}
	}
</style>
