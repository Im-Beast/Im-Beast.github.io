<script lang="ts">
	import type { Action } from "svelte/action";

	const sunBeam: Action<HTMLElement, number> = function (node: HTMLElement, offset: number) {
		let top = 0;
		let left = 0;

		function mouseMove(event: MouseEvent) {
			const theta = Math.atan2(event.pageX - left, event.pageY - top);
			const rotation = `${theta * (180 / Math.PI) * -1 + offset}deg`;
			node.style.setProperty("--rotation", rotation);
		}

		function resize() {
			({ top, left } = node.getBoundingClientRect());
		}

		resize();
		document.addEventListener("mousemove", mouseMove);
		document.addEventListener("resize", resize);

		return {
			destroy() {
				document.removeEventListener("mousemove", mouseMove);
				document.removeEventListener("resize", resize);
			},
		};
	};
</script>

<div id="sun">
	<div use:sunBeam={0} class="sunbeam" />
	{#each Array.from({ length: 12 }) as _, i}
		<div style:--initial-rotation="{i * 30}deg" class="sunbeam animated"></div>
	{/each}
</div>

<style>
	@keyframes -global-rotate {
		from {
			transform: rotate(calc(0deg + var(--initial-rotation)));
			border-bottom-width: 360px;
		}

		50% {
			border-bottom-width: 480px;
			transform: rotate(calc(180deg + var(--initial-rotation)));
		}

		to {
			border-bottom-width: 360px;
			transform: rotate(calc(359deg + var(--initial-rotation)));
		}
	}

	#sun {
		position: fixed;
		pointer-events: none;

		top: 0;
		right: 0;

		&::before {
			position: absolute;
			top: 0;
			right: 0;

			display: block;
			content: "";
			width: 200px;
			height: 200px;
			border-bottom-left-radius: 9999px;
			filter: drop-shadow(0 0 20px yellow);
			background-color: #ffffca;
			z-index: 1;
		}

		& > .sunbeam {
			position: absolute;
			top: 50px;
			right: 0;

			height: 0;
			width: 120px;
			border-inline: 40px solid transparent;
			border-bottom: 640px solid #ffffca60;

			filter: blur(8px);

			transform-origin: top right;
			transform: rotate(var(--rotation));

			z-index: -1;

			&.animated {
				width: 120px;
				animation: rotate 30s linear infinite;
			}
		}
	}
</style>
