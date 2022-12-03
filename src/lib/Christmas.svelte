<script lang="ts">
	import { onMount } from "svelte";

	let canvas!: HTMLCanvasElement;

	onMount(async () => {
		const image = new Image();
		image.src = "/images/snowflake.svg";

		await new Promise((r) => (image.onload = r));

		let pointerX = 0;
		let pointerY = 0;

		addEventListener("pointermove", ({ x, y }) => {
			pointerX = x;
			pointerY = y;
		});

		function render() {
			canvas.width = innerWidth;
			canvas.height = innerHeight * 1.2;

			const context = canvas.getContext("2d")!;

			const snowflakeSize = 28;
			const snowflakeAmount = canvas.width / 12.8;

			const dateDiff = Date.now() / 500000;
			for (let i = 0; i < snowflakeAmount; ++i) {
				let x = (i * (canvas.width / snowflakeAmount)) % canvas.width;
				let y = (canvas.height * (Math.cos(i) * 100 + Math.sin(snowflakeAmount - i) * 100) * dateDiff) % canvas.height;

				context.drawImage(image, x, y, snowflakeSize, snowflakeSize);
			}

			requestAnimationFrame(render);
		}

		render();
	});
</script>

<canvas bind:this={canvas} id="snow" />

<style lang="scss">
	#snow {
		position: fixed;
		top: -10%;
		left: 0;

		user-select: none;
		pointer-events: none;
		z-index: -1;
	}
</style>
