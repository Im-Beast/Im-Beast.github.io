<template>
	<button class="material-icons" @click="darkTheme = !darkTheme">
		{{ darkTheme ? 'light_mode' : 'dark_mode' }}
	</button>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'

export default defineComponent({
	setup() {
		const darkTheme = ref(
			JSON.parse(localStorage.getItem('darkTheme') || 'false')
		)
		const syncTheme = () =>
			darkTheme.value
				? document.querySelector('html')?.classList.add('dark')
				: document.querySelector('html')?.classList.remove('dark')

		watch(darkTheme, () => {
			darkTheme.value = !!darkTheme.value
			syncTheme()
			localStorage.setItem('darkTheme', darkTheme.value)
		})

		syncTheme()

		return {
			darkTheme,
		}
	},
})
</script>
