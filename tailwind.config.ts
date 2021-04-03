import { defineConfig } from 'vite-plugin-windicss'

export default defineConfig({
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				primary: '#23a0ff',
				secondary: '#45c0bf',

				dark: '#2b2d37',
				light: '#fff',
			},
			boxShadow: {
				cool: '0 0 1rem rgba(0,0,0,0.6)',
			},
		},
	},
	variants: {},
	plugins: [],
})
