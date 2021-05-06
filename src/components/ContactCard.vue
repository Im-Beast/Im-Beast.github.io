<template>
	<div
		class="mx-3 flex flex-col items-center"
		:class="{ 'cursor-pointer': !!redirect }"
		@click="redirect"
	>
		<div
			class="hover:animate-spin ease-in-out"
			style="animation-iteration-count: 1; animation-duration: 0.35s"
		>
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
