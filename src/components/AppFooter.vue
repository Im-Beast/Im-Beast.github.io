<template>
	<footer
		class="bg-light flex flex-row mx-auto rounded-4xl shadow-cool my-5 text-center text-dark p-5 w-9/10 relative items-center justify-center dark:bg-dark dark:text-light"
	>
		<p>
			Made by
			<a href="https://github.com/Im-Beast" target="_blank">Im-Beast</a> with 💙
		</p>
		<dark-mode-switch class="right-5 absolute" />
	</footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import DarkModeSwitch from './DarkModeSwitch.vue'

export default defineComponent({
	components: {
		DarkModeSwitch,
	},
})
</script>
