import { defineConfig } from "vite";
import unocss from "unocss/vite";
import { sveltekit } from "@sveltejs/kit/vite";

export default defineConfig({
	plugins: [unocss(), sveltekit()],
});
