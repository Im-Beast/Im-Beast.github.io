<section class="repository">
	<h1 class="title">
		<slot name="title" />
	</h1>
	<hr />
	<p class="description">
		<slot name="description" />
	</p>
	<div class="bottom">
		<slot name="bottom" />
	</div>
</section>

<style lang="scss">
	.repository {
		display: flex;
		flex-direction: column;

		user-select: none;

		border-radius: 1rem;

		background-color: var(--less-translucent-contrast-color);
		scrollbar-width: none;

		scroll-snap-align: start;

		padding: 0.5rem;

		> .title {
			font-size: 1.5rem;
		}

		> hr {
			margin: 0 0 0.5rem 0;
		}

		> .description {
			margin-bottom: 0.25rem;
		}

		> .bottom {
			display: flex;
			flex-direction: row;
			justify-content: space-evenly;

			border-radius: 1rem;

			margin-top: auto;

			padding: 0.5rem;
			background-color: var(--translucent-background-color);

			z-index: 1;
		}
	}
</style>
