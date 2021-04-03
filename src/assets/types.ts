export interface GithubRepo {
	id: number
	name: string
	description: string
	language: string
	html_url: string
}

export interface LanguageColors {
	[name: string]: {
		color: string
		url: string
	}
}
