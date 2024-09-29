<script lang="ts">
</script>

<div id="moon">
	<div class="moon-hole" style:--top="40px" style:--right="40px" style:--width="100px" style:--height="100px"></div>
	<div class="moon-hole" style:--top="140px" style:--right="190px" style:--width="69px" style:--height="69px"></div>
	<div class="moon-hole" style:--top="200px" style:--right="90px" style:--width="39px" style:--height="39px"></div>
</div>

<div id="rocket-container">
	<!-- Replace with some image -->
	<span id="flying-rocket"> 🚀</span>
</div>

<!-- mateorite and stars -->

<style>
	@keyframes -global-flying-rocket {
		0% {
			top: 0;
			left: 0;
			transform: rotate(90deg);
		}

		25% {
			top: 25%;
			left: 25%;
			transform: rotate(65deg);
		}

		50% {
			top: 50%;
			left: 50%;
			transform: rotate(45deg) scale(100%);
		}

		90% {
			top: 40px;
			left: calc(100% - 155px);
			transform: rotate(-65deg) scale(80%);
		}

		100% {
			top: 60px;
			left: calc(100% - 155px);
			transform: rotate(-35deg) scale(80%);
		}
	}

	#moon {
		pointer-events: none;

		position: absolute;
		top: -100px;
		right: -100px;

		display: block;
		content: "";
		width: 300px;
		height: 300px;
		border-radius: 9999px;
		box-shadow:
			0 0 20px #91949b,
			inset -60px -40px 0 #81848b;
		background-color: #c2c5cc;
		z-index: 1;

		& > .moon-hole {
			position: absolute;
			content: "";
			display: block;
			top: var(--top);
			right: var(--right);
			width: var(--width);
			height: var(--height);
			background-color: #91949b;
			border-radius: 100%;
			box-shadow:
				0 4px 2px black,
				inset -4px -2px #42444b;
		}
	}

	#rocket-container {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 200px;
		pointer-events: none;

		& > #flying-rocket {
			position: absolute;
			font-size: 32px;
			animation: flying-rocket linear 5s forwards;
		}

		z-index: 2;
	}
</style>
