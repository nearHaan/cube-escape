import type { GameSave } from './state.svelte';
import { defaultSave } from './state.svelte';

const KEY = 'cube_escape_save_v1';

export function loadLocalGame(): GameSave {
	try {
		const raw = localStorage.getItem(KEY);
		if (!raw) return structuredClone(defaultSave);
		return JSON.parse(raw) as GameSave;
	} catch {
		return structuredClone(defaultSave);
	}
}

export function saveLocalGame(save: GameSave) {
	try {
		localStorage.setItem(KEY, JSON.stringify(save));
	} catch (err) {
		console.error(err);
	}
}

export function clearLocalGame() {
	try {
		localStorage.removeItem(KEY);
	} catch (err) {
		console.error(err);
	}
}
