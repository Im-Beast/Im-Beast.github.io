import { writable } from "svelte/store";

import type { Repository } from "@components/tabs/Projects.svelte";

export const repositories = writable<Repository[]>([]);
