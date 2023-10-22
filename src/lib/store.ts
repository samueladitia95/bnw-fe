import { writable, type Writable } from 'svelte/store';

export const isTopbarBackground: Writable<boolean> = writable(false);
export const isTopbarLight: Writable<boolean> = writable(false);
export const isContactOpen: Writable<boolean> = writable(false);
export const backgroundColor: Writable<string> = writable('bg-bwi-battleship');
export const isTransparent: Writable<boolean> = writable(false);
