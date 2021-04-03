<template>
	<button class="material-icons" @click="darkTheme = !darkTheme">
		{{ darkTheme ? 'light_mode' : 'dark_mode' }}
	</button>
</template>

<script lang="ts">
import { defineComponent, Ref, ref, watch } from 'vue'

export default defineComponent({
	setup() {
		const darkTheme: Ref<boolean> = ref(
			JSON.parse(localStorage.getItem('darkTheme') || 'true')
		)

		const syncTheme = () =>
			darkTheme.value
				? document.querySelector('html')?.classList.add('dark')
				: document.querySelector('html')?.classList.remove('dark')

		watch(darkTheme, () => {
			darkTheme.value = !!darkTheme.value
			syncTheme()
			localStorage.setItem('darkTheme', String(darkTheme.value))
		})

		syncTheme()

		return {
			darkTheme,
		}
	},
})
</script>
