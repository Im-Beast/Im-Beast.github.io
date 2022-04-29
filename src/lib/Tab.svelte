<script lang="ts">
	export let _class: string;
</script>

<div class="tab {_class}">
	<h2 class="tab-title">
		<slot name="title" />
	</h2>
	<p class="tab-description">
		<slot name="description" />
	</p>
	<div class="tab-footer">
		<slot name="footer" />
	</div>
</div>

<style>
	.tab {
		display: flex;
		flex-direction: column;

		margin: 0.5rem 0.25rem;
		padding: 0.5rem;

		height: 100%;
		width: 100%;
		flex-wrap: nowrap;

		border-radius: 0.5rem;
		border-right: 3px solid var(--gray-dark);

		color: white;
		background-color: var(--gray-darker);
	}

	.tab-title {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: start;

		margin: 0.1rem;
		padding: 0.25rem 0 0.75rem 0rem;

		border-bottom: 2px solid var(--gray-dark);

		font-size: 1.3rem;

		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.tab-description {
		height: 100%;

		padding: 0.25rem;
	}

	.tab-footer {
		display: flex;
		flex-direction: row;
		justify-content: space-evenly;

		width: 100%;
		height: 100%;

		padding: 0.5rem;

		text-align: center;

		margin-top: auto;

		border-radius: 0.5rem;

		background-color: var(--gray-lighter);
	}

	:global(.tab-footer > div) {
		width: 100%;
		height: 100%;
		all: inherit;
	}
</style>
