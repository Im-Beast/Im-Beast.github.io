<script lang="ts">
	export let color: string;
</script>

<section class="card" style:--color={color}>
	<h1 class="title">
		<slot name="title" />
	</h1>
	<p class="description">
		<slot name="description" />
	</p>
	<div class="footer">
		<slot name="footer" />
	</div>
</section>

<style>
	:global(.card-logo) {
		color: var(--color);
		/* prettier-ignore */
		filter:
					drop-shadow(0 0.25px 0 color-mix(in srgb, var(--color) 60%, var(--bg-full)))
					drop-shadow(0 0.5px 0 color-mix(in srgb, var(--color) 50%, var(--bg-full)))
					drop-shadow(0 0.75px 0 color-mix(in srgb, var(--color) 40%, var(--bg-full)))
					drop-shadow(0 1px 0 color-mix(in srgb, var(--color) 30%, var(--bg-full)));
	}

	.card {
		--color: #80b0ff;
		--shadow-color: color-mix(in srgb, var(--color) 60%var (--contrast));

		display: flex;
		flex-direction: column;

		background-color: var(--bg-3);

		border-radius: 0.5rem;

		border: 2px solid var(--color);

		box-shadow: 0 5px 0 0 var(--shadow-color);
		margin-block: 5px;

		width: 100%;
		min-height: 15rem;

		@media (min-width: 640px) {
			min-width: calc(50% - 0.5rem);
		}

		@media (min-width: 768px) {
			min-width: calc(33.3% - 0.65rem);
		}

		& > .title {
			position: relative;
			padding: 0.5rem;

			/* prettier-ignore */
			text-shadow: 
				0 1px 0 color-mix(in srgb, var(--color) 60%, var(--bg-full)),
				0 2px 0 color-mix(in srgb, var(--color) 50%, var(--bg-full)),
				0 3px 0 color-mix(in srgb, var(--color) 40%, var(--bg-full)),
				0 4px 0 color-mix(in srgb, var(--color) 30%, var(--bg-full));

			background-color: var(--bg-4);
			border-bottom: 2px solid var(--bg-1);

			font-size: 1.5rem;
			font-weight: bold;
			text-align: center;

			border-radius: 0.5rem 0.5rem 0 0;
		}

		& > .description {
			padding: 0.5rem;
			font-size: 0.875rem;
			margin-bottom: auto;
		}

		& > .footer {
			display: flex;
			flex-wrap: wrap;

			justify-content: space-evenly;
			align-items: center;
			font-size: 0.875rem;
			text-align: center;

			padding: 0.5rem;
			margin: 0.25rem;
			gap: 8px;

			background-color: var(--bg-2);

			border: 2px solid var(--bg-4);
			border-radius: 0.5rem;
		}
	}
</style>
