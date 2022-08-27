<div class="lava-lamp" />

<style lang="scss">
	.lava-lamp {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;

		pointer-events: none;
		user-select: none;

		z-index: -1;

		&::before {
			content: "";

			position: fixed;

			bottom: 0;
			left: 0vw;
			width: 100vw;
			height: 100vh;

			background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
			opacity: 1;

			border: 10px solid rgba(0, 0, 0, 0.4);
			border-radius: 80% 100% 60% 60%/80% 115% 70%;

			animation: wobble 5s infinite alternate ease;

			@keyframes wobble {
				from {
					transform: translate(-26vh, -31vh) skewX(-15deg) skewY(9deg);
				}
				50% {
					transform: translate(-28vh, -33vh) skewX(-18deg) skewY(20deg);
				}
				to {
					transform: translate(-25vh, -29vh) skewX(-13deg) skewY(13deg);
				}
			}
		}
	}
</style>
