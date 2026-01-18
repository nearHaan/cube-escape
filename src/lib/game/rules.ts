import { items } from '$lib/data/items';
import type { Hotspot } from '$lib/types';
import { addItem, game, removeItem } from './state.svelte';

const PROJECTOR_ANS = [
	{ id: 'row1', value: 3 },
	{ id: 'row2', value: 2 },
	{ id: 'row3', value: 5 },
	{ id: 'row4', value: 4 },
	{ id: 'row5', value: 1 }
];
const BINARY_BOX_ANS = '011011';
const LOCKER_BOX_ANS = '8172';
const LOCKER_ANS_LENGTH = 4;
const COMPUTER_ANS = 'LIGHT';
const SHAPE_BOX_ANS = '2143';
const SHAPE_ANS_LENGTH = 4;

function isProjectorSolved() {
	if (game.otherComp.projector.id !== 'projector') return false;

	const cur = game.otherComp.projector.comp;

	return PROJECTOR_ANS.every((ansRow, i) => cur[i]?.value === ansRow.value);
}

const replaceAt = (original: string, index: number, replacement: string) =>
	original.substring(0, index) + replacement + original.substring(index + 1);

function parseRowPos(id: string) {
	const m = id.match(/^row([1-5])pos([1-5])$/);
	if (!m) return null;

	const row = Number(m[1]);
	const pos = Number(m[2]);
	return { row, pos };
}

function parseBinaryPos(id: string) {
	const m = id.match(/^btn([1-6])$/);
	if (!m) return null;

	const pos = Number(m[1]);
	return { pos };
}

function parseLockerPos(id: string) {
	const m = id.match(/^lockerBtn([0-9])$/);
	if (!m) return null;

	const pos = String(m[1]);
	return { pos };
}

function parseShapePos(id: string) {
	const m = id.match(/^shapeBtn([1-4])$/);
	if (!m) return null;

	const pos = String(m[1]);
	return { pos };
}

export const processMove = (hotspot: Hotspot) => {
	if (hotspot.id === 'plank') {
		if (game.selectedItem === items.crowbar.id) {
			removeItem(items.crowbar.id);
			game.flags.doorPlankBroken = true;
			return { type: 'progress', msg: hotspot.successText };
		}
		return { type: 'nothing', msg: hotspot.disabledText };
	}
	if (hotspot.id === 'vaultSubmit') {
		if (game.otherComp.vaultTextbox.id === 'vaultTextbox') {
			console.log(game.otherComp.vaultTextbox.comp.value);
			if (game.otherComp.vaultTextbox.comp.value.trim().toUpperCase() === COMPUTER_ANS) {
				game.flags.vaultOpened = true;
				return { type: 'progress', msg: hotspot.successText };
			}
			game.otherComp.vaultTextbox.comp.value = '';
			return { type: 'no-progress', msg: hotspot.disabledText };
		}
	}
	if (hotspot.id === 'mat') {
		if (game.flags.hasDrawerKey) return;

		game.flags.hasDrawerKey = true;
		addItem(items.key1);

		return { type: 'progress', msg: hotspot.successText };
	}

	if (hotspot.id === 'drawer1') {
		if (game.flags.drawerOpened) return;

		if (game.selectedItem === items.key1.id) {
			game.flags.drawerOpened = true;
			removeItem(items.key1.id);
			addItem(items.triangleKey);
			return { type: 'progress', msg: hotspot.successText };
		}

		return { type: 'no-progress', msg: hotspot.disabledText };
	}

	if (hotspot.id === 'vault') {
		console.log('hi');
		if (game.flags.vaultOpened) return { type: 'zoomIn' };

		return { type: 'no-progress', msg: hotspot.disabledText };
	}
	if (hotspot.id === 'triangleBox') {
		if (game.selectedItem === items.triangleKey.id) {
			removeItem(items.triangleKey.id);
			addItem(items.shelfKey);
			return { type: 'nothing', msg: hotspot.successText };
		}
		return { type: 'nothing', msg: hotspot.disabledText };
	}
	if (hotspot.id === 'filmDispenser') {
		if (game.flags.shapePuzzleOpened) {
			if (game.flags.batteryPlaced) {
				addItem(items.film);
				return { type: 'nothing', msg: hotspot.successText };
			}
			return { type: 'nothing', msg: 'This thing needs power to work' };
		}
		return { type: 'nothing', msg: hotspot.disabledText };
	}
	if (hotspot.id === 'batteryHolder') {
		if (game.selectedItem === items.battery.id) {
			game.flags.batteryPlaced = true;
			removeItem(items.battery.id);
			return { type: 'nothing', msg: hotspot.successText };
		}
		return { type: 'nothing', msg: hotspot.disabledText };
	}
	if (hotspot.id === 'projector') {
		if (game.selectedItem === items.screwdriver.id) {
			return { type: 'zoomIn' };
		}
		return { type: 'no-progress', msg: hotspot.disabledText };
	}
	if (hotspot.id === 'blue-shelf') {
		if (game.selectedItem === items.shelfKey.id) {
			addItem(items.crowbar);
			removeItem(items.shelfKey.id);
			return { type: 'progress', msg: hotspot.successText };
		}
		return { type: 'no-progress', msg: hotspot.disabledText };
	}
	if (!game.flags.projectorCodeCracked && !game.flags.projectorOn) {
		const parsed = parseRowPos(hotspot.id);

		if (parsed) {
			const { row, pos } = parsed;

			const idx = row - 1;

			if (game.otherComp.projector.id === 'projector') {
				game.otherComp.projector.comp[idx] = {
					...game.otherComp.projector.comp[idx],
					x: hotspot.x,
					y: hotspot.y,
					value: pos
				};

				if (isProjectorSolved()) {
					game.flags.projectorCodeCracked = true;
					if (game.flags.filmPlaced) {
						game.flags.projectorOn = true;
						return { type: 'nothing', msg: "What's that light?" };
					}
					return { type: 'nothing' };
				}

				return { type: 'nothing' };
			}
		}
	}
	if (!game.flags.filmPlaced && hotspot.id === 'filmHolder' && !game.flags.projectorOn) {
		if (game.selectedItem === items.film.id) {
			game.flags.filmPlaced = true;
			if (game.flags.projectorCodeCracked) {
				game.flags.projectorOn = true;
				return { type: 'nothing', msg: "What's that light?" };
			}
			return { type: 'nothing' };
		}
		return { type: 'nothing', msg: hotspot.disabledText };
	}
	if (!game.flags.binaryOpened) {
		const parsed = parseBinaryPos(hotspot.id);

		if (parsed) {
			const { pos } = parsed;
			const idx = pos - 1;

			if (game.otherComp.binaryBox.id === 'binaryBox') {
				const replacement = game.otherComp.binaryBox.comp.value.charAt(idx) === '0' ? '1' : '0';
				game.otherComp.binaryBox.comp.value = replaceAt(
					game.otherComp.binaryBox.comp.value,
					idx,
					replacement
				);
				if (game.otherComp.binaryBox.comp.value === BINARY_BOX_ANS) {
					addItem(items.screwdriver);
					game.flags.binaryOpened = true;
					return { type: 'progress', msg: hotspot.successText };
				}
				return { type: 'nothing' };
			}
		}
	}
	if (hotspot.id === 'battery' && !game.flags.batteryFound) {
		game.flags.batteryFound = true;
		addItem(items.battery);
		return { type: 'progress', msg: hotspot.successText };
	}

	if (!game.flags.lockerOpened) {
		const parsed = parseLockerPos(hotspot.id);

		if (parsed) {
			const { pos } = parsed;

			if (game.otherComp.locker.id === 'locker') {
				game.otherComp.locker.comp.value = game.otherComp.locker.comp.value + pos;
				console.log(game.otherComp.locker.comp.value);
				if (game.otherComp.locker.comp.value === LOCKER_BOX_ANS) {
					addItem(items.finalKey);
					game.flags.lockerOpened = true;
					return { type: 'progress', msg: hotspot.successText };
				}
				if (game.otherComp.locker.comp.value.length >= LOCKER_ANS_LENGTH) {
					game.otherComp.locker.comp.value = '';
				}
				return { type: 'nothing' };
			}
		}
	}

	if (!game.flags.shapePuzzleOpened) {
		const parsed = parseShapePos(hotspot.id);

		if (parsed) {
			const { pos } = parsed;

			if (!game.flags.batteryPlaced) return { type: 'nothing', msg: hotspot.disabledText };

			if (game.otherComp.shapeBox.id === 'shapeBox') {
				game.otherComp.shapeBox.comp.value = game.otherComp.shapeBox.comp.value + pos;
				console.log(game.otherComp.shapeBox.comp.value);
				if (game.otherComp.shapeBox.comp.value === SHAPE_BOX_ANS) {
					game.flags.shapePuzzleOpened = true;
					return { type: 'nothing', msg: hotspot.successText };
				}
				if (game.otherComp.shapeBox.comp.value.length >= SHAPE_ANS_LENGTH) {
					game.otherComp.shapeBox.comp.value = '';
				}
				return { type: 'nothing' };
			}
		}
	}

	if (hotspot.id === 'knob') {
		if (game.selectedItem === items.finalKey.id) {
			if (game.flags.doorPlankBroken) {
				return { type: 'end' };
			}
			return { type: 'nothing', msg: 'Door is jammed' };
		}
		return { type: 'no-progress', msg: hotspot.disabledText };
	}

	return { type: 'nothing' };
};
