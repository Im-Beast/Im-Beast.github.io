<template>
	<div
		class="bg-light flex flex-row mx-auto rounded-4xl shadow-cool my-5 text-dark p-5 w-9/10 relative justify-center items-center overflow-hidden dark:bg-dark dark:text-light"
	>
		<div class="flex items-center">
			<contact-card
				image="./discord-logo.svg"
				title="Beast#6968"
				href="https://discord.com/users/415926077144432642"
				imgStyle="transform: scale(1.15); filter: drop-shadow(0 0 10px rgb(44,45,44))"
			/>
			<contact-card
				image="./github-logo.svg"
				title="Im-Beast"
				href="https://github.com/Im-Beast"
				imgStyle="filter: drop-shadow(0 0 10px rgb(44,45,44)"
			/>
			<contact-card
				image="./steam-logo.svg"
				title="Im_Beast"
				href="https://steamcommunity.com/id/im_beast"
				imgStyle="filter: drop-shadow(0 0 10px rgb(44,45,44)"
			/>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import ContactCard from './ContactCard.vue'

export default defineComponent({
	components: {
		ContactCard,
	},
	setup() {
		return {}
	},
})
</script>
