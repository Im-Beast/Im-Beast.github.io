import { derived, writable } from "svelte/store";
import type { ParsedRepository } from "@components/tabs/Projects.svelte";

export interface Filters {
	showForks: boolean;
}

export const filters = writable<Filters>({
	showForks: false,
});

export const repositories = writable<ParsedRepository[]>([]);
export const filteredRepositories = derived([filters, repositories], ([filters, repositories]) =>
	repositories.filter((repo) => !repo.fork || filters.showForks),
);
