<script context="module" lang="ts">
	const languageGradients: Record<string, string> = {
		Rust: "#dea584",
		TypeScript: "#3077c5",
		JavaScript: "#f0db4f",
		HTML: "#e34c26",
		CSS: "#563d7c",
		Shell: "#89e051",
		Vue: "#41b883",
		Go: "#00ADD8",
		Java: "#b07219",
		Svelte: "#ff3e00",
	};

	const languageIcons: Record<string, string> = {
		Rust: "simple-icons:rust",
		TypeScript: "simple-icons:typescript",
		JavaScript: "simple-icons:javascript",
		HTML: "simple-icons:html5",
		CSS: "simple-icons:css3",
		Shell: "simple-icons:gnu-bash",
		Vue: "simple-icons:vue-dot-js",
		Go: "simple-icons:go",
		Java: "simple-icons:java",
		Svelte: "simple-icons:svelte",
	};
</script>

<script lang="ts">
	import Card from "@components/Card.svelte";
	import ExternalLink from "@components/ExternalLink.svelte";
	import Icon from "@iconify/svelte";

	export let stars: number;
	export let license: string | undefined;
	export let githubUrl: string;
	export let language: string;

	$: color = languageGradients[language] ?? "#000";
	$: icon = languageIcons[language];
</script>

<Card {color}>
	<slot slot="title" name="title" />

	<slot slot="description" name="description" />

	<svelte:fragment slot="footer">
		{#if icon}
			<Icon {color} {icon} />
		{/if}
		<p>
			<span class="i-mingcute-star-fill text-yellow-300" />
			{stars}
		</p>
		{#if license}
			<p>
				<span class="i-solar-file-smile-bold-duotone text-sky-300" />
				{license}
			</p>
		{/if}
		<p>
			<ExternalLink href={githubUrl}>Repo</ExternalLink>
		</p>
	</svelte:fragment>
</Card>
