<template>
	<div id="blob" />
</template>

<style>
@keyframes wobble {
	0% {
		transform: translate(-26vh, -31vh) skewX(-15deg) skewY(9deg) rotate(180deg);
	}
	50% {
		transform: translate(-28vh, -33vh) skewX(-18deg) skewY(11deg) rotate(190deg);
	}
	100% {
		transform: translate(-25vh, -29vh) skewX(-13deg) skewY(7deg) rotate(170deg);
	}
}

#blob:before {
	content: '';
	position: absolute;
	bottom: 0;
	left: 0;
	background: linear-gradient(
		135deg,
		theme('colors.primary'),
		theme('colors.secondary')
	);
	width: 90vw;
	height: 110vh;
	border-radius: 80% 100% 60% 60%/80% 115% 70%;
	z-index: -1;

	animation: wobble 20s infinite alternate ease;
}
</style>
