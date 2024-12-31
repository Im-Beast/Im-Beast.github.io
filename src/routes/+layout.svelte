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
			--contrast-color: #000000;
			--accent-color: #ff4343;
			--bounce-curve: cubic-bezier(0.5, 2, 0.5, 0.8);

			--container-color: color-mix(in srgb, var(--bg-color), var(--contrast-color) 10%);
		}

		@media (prefers-color-scheme: dark) {
			:root {
				--fg-color: #ffffff;
				--bg-color: #000000;
				--accent-color: #ff4343;
				--contrast-color: #ffffff;
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
			text-rendering: geometricPrecision;
			font-size: 20px;

			color: var(--fg-color);
			background-color: var(--bg-color);
		}

		body {
			display: flex;
			justify-content: center;
		}

		h1,
		h2 {
			font-size: 1rem;
			font-weight: bolder;
		}

		code {
			overflow-x: auto;
			font-family: "SF Mono", SFMono-Regular, ui-monospace, "DejaVu Sans Mono", Menlo, Consolas, monospace;
		}
	}
</style>
