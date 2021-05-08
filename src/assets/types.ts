export interface GithubRepo {
	id: number
	name: string
	description: string
	language: string
	html_url: string
}

export interface GithubOrg {
	id: number
	login: string
	description: string
	url: string
	repos_url: string
}

export interface LanguageColors {
	[name: string]: {
		color: string
		url: string
	}
}

export interface CachedInfo {
	expire: number
	repos: GithubRepo[]
	orgs: GithubOrg[]
}
