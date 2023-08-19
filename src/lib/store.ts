import { writable, type Writable } from 'svelte/store';

export const isTopbarBackground: Writable<boolean> = writable(false);
