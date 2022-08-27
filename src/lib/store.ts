import { writable, type Writable } from "svelte/store";
import type { Repository } from "./Repositories.svelte";

export const repositories: Writable<Repository[]> = writable([]);
