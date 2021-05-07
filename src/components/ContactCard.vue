<template>
	<div class="mx-3 cursor-pointer flex flex-col items-center" @click="redirect">
		<div class="hover-shadow dynamic-brightness">
			<img class="w-16 h-16" :src="image" :style="imgStyle" />
		</div>
		<p>{{ title }}</p>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	props: {
		image: {
			type: String,
			default: '',
		},
		title: {
			type: String,
			default: '',
		},
		href: {
			type: String,
			default: '',
		},
		imgStyle: {
			type: String,
			default: '',
		},
	},
	setup(props) {
		const redirect = () => {
			if (props.href) window.location.href = props.href
		}
		return { redirect }
	},
})
</script>
