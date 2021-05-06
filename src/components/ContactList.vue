<template>
	<div
		class="bg-light flex flex-row mx-auto rounded-4xl shadow-cool my-5 text-dark p-5 w-9/10 relative justify-center items-center overflow-hidden dark:bg-dark dark:text-light"
	>
		<div class="flex flex-wrap">
			<contact-card
				image="./discord-logo.svg"
				title="Beast#6968"
				href="https://discord.com/users/415926077144432642"
				imgStyle="transform: scale(1.1); filter: drop-shadow(0 0 10px rgb(43,44,55))"
			/>
			<contact-card
				image="./github-logo.svg"
				title="Im-Beast"
				href="https://github.com/Im-Beast"
				imgStyle="transform: scale(0.9);filter: drop-shadow(0 0 10px rgb(43,44,55)"
			/>
			<contact-card
				image="./steam-logo.svg"
				title="Im_Beast"
				href="https://steamcommunity.com/id/im_beast"
				imgStyle="transform: scale(0.9); filter: drop-shadow(0 0 10px rgb(43,44,55))"
			/>
			<contact-card
				image="./twitter-logo.svg"
				title="1m_Beast"
				href="https://twitter.com/@1m_Beast"
				imgStyle="filter: drop-shadow(0 0 10px rgb(43,44,55)"
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
