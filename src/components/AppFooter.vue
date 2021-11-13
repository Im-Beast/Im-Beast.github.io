<template>
    <footer
        class="rounded-lg flex flex-row font-semibold bg-dark-400 border-3 border-dark-800 mx-3 mt-5 text-white mb-5 max-w-200 p-3 -translate-x-1/2 relative justify-center items-center md:mx-auto md:items-center lg:transform lg:w-3/4"
    >
        <p>
            Made by
            <a href="https://github.com/Im-Beast">Im-Beast</a> with 💙
        </p>
        <button
            @click="toggleAudio"
            class="outline-none right-5 absolute focus:outline-none active:outline-none"
            title="Toggle Pat & Mat theme music"
        >{{ muteMusic ? "🔇" : "🔈" }}</button>
    </footer>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const muteMusic = ref(localStorage.getItem("mute-music") === "true")

const toggleAudio = () => {
    const audio = document.querySelector("audio")
    if (!audio) return;
    
    if (!localStorage.getItem("mute-music")) {
        localStorage.setItem("mute-music", "false")
    }

    if (audio.paused) {
        audio.play()
        localStorage.setItem("mute-music", "false")
        muteMusic.value = false
    } else {
        audio.pause()
        localStorage.setItem("mute-music", "true")
        muteMusic.value = true
    }
}
</script>
