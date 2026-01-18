export type InventoryItem = {
	id: string;
	name: string;
	icon: string;
};

export type GameFlags = {
	doorPlankBroken: boolean;
	hasDrawerKey: boolean;
	drawerOpened: boolean;
	vaultOpened: boolean;
	projectorCodeCracked: boolean;
	binaryOpened: boolean;
	lockerOpened: boolean;
	shapePuzzleOpened: boolean;
	batteryFound: boolean;
	batteryPlaced: boolean;
	filmPlaced: boolean;
	projectorOn: boolean;
};

export type Component =
	| ProjectorComp
	| BatteryComp
	| VaultTextBoxComp
	| BinaryBoxComp
	| LockerComp
	| ShapePuzzleComp;

export type ProjectorComp = {
	id: 'projector';
	comp: ProjecterSlider[];
};

export type BatteryComp = {
	id: 'battery';
	comp: Battery;
};

export type VaultTextBoxComp = {
	id: 'vaultTextbox';
	comp: {
		value: string;
		x: number;
		y: number;
	};
};

export type BinaryBoxComp = {
	id: 'binaryBox';
	comp: {
		value: string;
	};
};

export type LockerComp = {
	id: 'locker';
	comp: {
		value: string;
	};
};

export type ShapePuzzleComp = {
	id: 'shapeBox';
	comp: {
		value: string;
	};
};

export type Battery = {
	id: string;
	x: number;
	y: number;
	r?: number;
};

export type ProjecterSlider = {
	id: string;
	x: number;
	y: number;
	value: number;
};

export type GameSave = {
	activeSceneId: string;
	zoomedId: string | null;

	inventory: InventoryItem[];
	selectedItem: string | null;
	flags: GameFlags;
	otherComp: Record<string, Component>;
};

export const defaultSave: GameSave = {
	activeSceneId: 'scene1',
	zoomedId: null,

	inventory: [],
	selectedItem: null,
	flags: {
		doorPlankBroken: false,
		hasDrawerKey: false,
		drawerOpened: false,
		vaultOpened: false,
		projectorCodeCracked: false,
		binaryOpened: false,
		lockerOpened: false,
		shapePuzzleOpened: false,
		batteryFound: false,
		batteryPlaced: false,
		filmPlaced: false,
		projectorOn: false
	},
	otherComp: {
		projector: {
			id: 'projector',
			comp: [
				{ id: 'row1', x: 0.415, y: 0.31, value: 1 },
				{ id: 'row2', x: 0.485, y: 0.39, value: 2 },
				{ id: 'row3', x: 0.56, y: 0.47, value: 3 },
				{ id: 'row4', x: 0.64, y: 0.55, value: 4 },
				{ id: 'row5', x: 0.715, y: 0.63, value: 5 }
			]
		},
		battery: {
			id: 'battery',
			comp: {
				id: 'battery',
				x: 0.285,
				y: 0.81
			}
		},
		vaultTextbox: {
			id: 'vaultTextbox',
			comp: {
				value: '',
				x: 0.418,
				y: 0.282
			}
		},
		binaryBox: {
			id: 'binaryBox',
			comp: {
				value: '000000'
			}
		},
		locker: {
			id: 'locker',
			comp: {
				value: ''
			}
		},
		shapeBox: {
			id: 'shapeBox',
			comp: {
				value: ''
			}
		}
	}
};

export const game = $state<GameSave>(structuredClone(defaultSave));

export function addItem(item: InventoryItem) {
	if (game.inventory.find((i) => i.id === item.id)) return;
	game.inventory.push(item);
}

export function removeItem(id: string) {
	game.inventory = game.inventory.filter((i) => i.id !== id);
	if (game.selectedItem === id) game.selectedItem = null;
}

export function selectItem(id: string | null) {
	game.selectedItem = id;
}

export function resetGame() {
	Object.assign(game, structuredClone(defaultSave));
}
