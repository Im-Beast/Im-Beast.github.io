<slot />

<style>
	:global(:root) {
		--background: #000000;
		--background-high: #121212;
		--background-higher: #232323;
		--background-highest: #343434;

		--text: #ffffff;

		--background-accent: #301010;
		--background-highlight: #101030;

		--accent: #ff9090;
		--highlight: #9090ff;

		font-size: 18px;

		@media (prefers-color-scheme: light) {
			--background: #ffffff;
			--background-high: #dedede;
			--background-higher: #cecece;
			--background-highest: #aeaeae;

			--background-accent: #ffc0c0;
			--background-highlight: #c0c0ff;

			--accent: #fa4040;
			--highlight: #4040fa;

			--text: #000000;
		}
	}

	:global(*) {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	:global(html) {
		background-color: var(--background);
		color: var(--text);
		overflow: hidden;
	}
</style>
