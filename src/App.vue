<template>
	<app-blob />
	<router-view />
	<app-footer />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import AppFooter from './components/AppFooter.vue'
import AppBlob from './components/AppBlob.vue'

export default defineComponent({
	components: {
		AppBlob,
		AppFooter,
	},
})
</script>
