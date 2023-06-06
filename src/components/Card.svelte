<section
	class="flex flex-col snap-start bg-dark-200 border-2 border-dark-700 rounded-lg ml-4 first:ml-0 min-w-full sm:min-w-[calc(50%-0.5rem)] md:min-w-[calc(33.3%-0.65rem)]"
>
	<h1 class="text-xl p-1 rounded-t-lg bg-dark-300 border-b-2 border-dark-400 text-center">
		<slot name="title" />
	</h1>
	<p class="mx-2 mt-2 mb-auto">
		<slot name="description" />
	</p>
	<div
		class="flex m-2 items-center justify-evenly bg-dark-400 border-2 border-dark-500 rounded-lg p-1"
	>
		<slot name="footer" />
	</div>
</section>
