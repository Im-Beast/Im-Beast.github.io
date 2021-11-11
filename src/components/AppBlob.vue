<template>
    <div id="blob" />
</template>

<style scoped>
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

#blob:before {
    position: absolute;
    content: "";
    bottom: 0;
    left: 0;
    background: linear-gradient(
        135deg,
        theme("colors.blue.300"),
        theme("colors.blue.400")
    );
    width: 90vw;
    height: 110vh;
    border-radius: 80% 100% 60% 60%/80% 115% 70%;
    z-index: -1;
    animation: wobble 5s infinite alternate ease;
}
</style>