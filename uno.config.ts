import {
	defineConfig,
	presetIcons,
	presetUno,
	transformerCompileClass,
	transformerDirectives,
	transformerVariantGroup,
} from "unocss";

import extractorSvelte from "@unocss/extractor-svelte";

export default defineConfig({
	safelist: [],
	rules: [
		[
			"image-pixelated",
			{
				"image-rendering": "pixelated",
			},
		],
	],
	shortcuts: [
		[
			/^external-link-text-(.+)$/,
			([_, color]) => `hover:underline text-light-50 hover:text-${color}-300 active:text-${color}-100`,
		],
		[
			/^external-link-icon-(.+)$/,
			([_, color]) =>
				`i-mingcute-external-link-line group-hover:i-mingcute-external-link-fill text-${color}-300 group-active:text-${color}-200!`,
		],
		[/^tab-icon-(.+)$/, ([_, color]) => `text-${color}-600! group-active:text-${color}-500! duration-150`],
		{
			"navigation-link": "button border-0! m-0! p-1!",
		},
	],
	presets: [
		presetUno(),
		presetIcons({
			extraProperties: {
				display: "inline-block",
				"vertical-align": "-0.25em",
				width: "1.25em",
				height: "1.2em",
			},
		}),
	],
	transformers: [transformerDirectives(), transformerCompileClass(), transformerVariantGroup()],
	extractors: [extractorSvelte()],
});
