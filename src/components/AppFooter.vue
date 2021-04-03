<template>
	<footer
		class="mx-auto relative flex flex-row items-center justify-center w-9/10 text-center p-5 rounded-4xl my-5 shadow-cool text-dark bg-light dark:text-light dark:bg-dark"
	>
		<p>
			Made by
			<a href="https://github.com/Im-Beast" target="_blank">Im-Beast</a> with 💙
		</p>
		<dark-mode-switch class="absolute right-5" />
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
