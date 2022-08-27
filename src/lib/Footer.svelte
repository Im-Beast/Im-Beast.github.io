<script>
	import Tooltip from "./Tooltip.svelte";
</script>

<footer>
	<span> Copyright © 2022 Im-Beast. Available under MIT License. </span>
	<div class="anchor-right">
		<Tooltip message={"Check source code\non GitHub"}>
			<button>
				<a href="https://github.com/Im-Beast/Im-Beast.github.io/" target="_blank">
					<img src="/branding/github.svg" alt="Github logo" />
				</a>
			</button>
		</Tooltip>
	</div>
</footer>

<style lang="scss">
	footer {
		position: relative;

		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		gap: 1rem;

		background-color: var(--translucent-contrast-color);

		margin-top: auto;
		margin-bottom: 0;
		padding: 1rem;
		padding-right: 2rem;

		max-width: 50rem;

		@media only screen and (min-width: 900px) {
			border-radius: 1rem 1rem 0 0;
		}

		> .anchor-right {
			position: absolute;
			right: 0.5rem;
			border-radius: 1rem;

			.tooltip-wrapper button {
				padding: 0.25rem;

				> a > img {
					display: flex;
					height: 1.5rem;
				}
			}
		}
	}
</style>
