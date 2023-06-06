import { writable } from "svelte/store";

export const zoomedImage = writable<HTMLImageElement | undefined>();
