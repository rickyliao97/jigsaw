import { writable } from "svelte/store";

export const gridRows = writable<number>(3);
export const gridColumns = writable<number>(3);
export const gridSize = writable<number>(200);

export const puzzleImage = writable<string>("/images/itachi.jpg");