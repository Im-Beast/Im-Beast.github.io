<script lang="ts">
	import { writable } from "svelte/store";
	import { tweened } from "svelte/motion";
	import { cubicInOut } from "svelte/easing";
	import { onMount } from "svelte";

	let pagedElement: HTMLElement;

	let step = 0;
	let timeout: number | undefined;
	let currentScrollLeft = 0;
	const scrollLeft = tweened(0, {
		delay: 0,
		duration: 150,
		easing: cubicInOut,
	});

	const visibleLeft = writable(false);
	const visibleRight = writable(true);

	function changePage(direction: number): void {
		step = (pagedElement.scrollWidth + 20) / pagedElement.childElementCount;

		currentScrollLeft += direction * step;

		pagedElement.classList.remove("snap-x");
		$scrollLeft = currentScrollLeft;
	}

	function updateButtonVisibility(): void {
		if (!timeout) {
			currentScrollLeft = pagedElement.scrollLeft;
		}

		$visibleLeft = currentScrollLeft > 0;
		$visibleRight = currentScrollLeft < pagedElement.scrollWidth - pagedElement.clientWidth;
	}

	onMount(() => {
		scrollLeft.subscribe((value) => {
			pagedElement.scrollLeft = value;

			clearTimeout(timeout);
			timeout = setTimeout(() => {
				pagedElement.classList.add("snap-x");
				timeout = undefined;
			}, 250);
		});
	});
</script>

<div class="relative w-full h-full">
	<div
		class="z-1 absolute top-1/2 -translate-y-1/2 opacity-0 hover:opacity-100 transition-opacity duration-250 h-1/2 w-20"
		class:hidden={!$visibleLeft}
	>
		<button
			on:click={() => changePage(-1)}
			class="absolute left-2 top-1/2 -translate-y-1/2 button p-1! bg-opacity-10"
		>
			<span class="i-mingcute-arrow-left-fill text-white text-xl" />
		</button>
	</div>

	<div
		class="z-1 absolute top-1/2 right-0 -translate-y-1/2 opacity-0 hover:opacity-100 transition-opacity duration-250 h-1/2 w-20"
		class:hidden={!$visibleRight}
	>
		<button
			on:click={() => changePage(1)}
			class="absolute right-2 top-1/2 -translate-y-1/2 button p-1! bg-opacity-10"
		>
			<span class="i-mingcute-arrow-right-fill text-white text-xl" />
		</button>
	</div>

	<section
		bind:this={pagedElement}
		on:change={() => ($scrollLeft = 0)}
		on:scroll={updateButtonVisibility}
		class="relative snap-mandatory snap-x flex w-full overflow-x-scroll no-scrollbar transition-all"
	>
		<slot />
	</section>
</div>

<style>
	.no-scrollbar {
		/** Chrome/Safari */
		&::-webkit-scrollbar {
			display: none;
		}

		/** Firefox */
		scrollbar-width: none;
	}
</style>
