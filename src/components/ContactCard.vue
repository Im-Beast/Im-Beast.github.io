<template>
	<div class="p-2" :class="{ 'cursor-pointer': !!redirect }" @click="redirect">
		<img class="mx-auto h-18" :src="image" :style="imgStyle" />
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
