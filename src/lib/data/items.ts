import type { InventoryItem } from '$lib/game/state.svelte';

export const items = {
	key1: {
		id: 'key',
		name: 'Drawer key',
		icon: '/items/key1.png'
	},
	shelfKey: {
		id: 'shelfKey',
		name: "Blue Shelf's key",
		icon: '/items/key1.png'
	},
	finalKey: {
		id: 'finalKey',
		name: 'The Final Key',
		icon: '/items/key1.png'
	},
	film: {
		id: 'film',
		name: 'Projector Film',
		icon: '/items/film.png'
	},
	triangleKey: {
		id: 'triangleKey',
		name: 'Triangle key',
		icon: '/items/triangleKey.png'
	},
	battery: {
		id: 'battery',
		name: 'Battery',
		icon: '/items/battery.png'
	},
	crowbar: {
		id: 'crowbar',
		name: 'Crowbar',
		icon: '/items/crowbar.png'
	},
	screwdriver: {
		id: 'screwdriver',
		name: 'Screwdriver',
		icon: '/items/screwdriver.png'
	}
} as const satisfies Record<string, InventoryItem>;
