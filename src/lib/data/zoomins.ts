import type { ZoomIn } from '$lib/types';

export const zoomins: Record<string, ZoomIn> = {
	computer: {
		id: 'computer',
		bg: 'zoomin/computer.png',
		hotspots: [
			{
				id: 'vaultSubmit',
				x: 0.418,
				y: 0.323,
				w: 0.35,
				h: 0.035,
				action: 'press',
				disabledText: 'Access Denied!',
				successText: 'Unlocked'
			}
		]
	},
	vault: {
		id: 'vault',
		bg: 'zoomin/vault.png',
		hotspots: [
			{
				id: 'triangleBox',
				x: 0.2,
				y: 0.136,
				w: 0.29,
				h: 0.095,
				action: 'press',
				disabledText: 'Needs a magic key',
				successText: 'Woohoo'
			},
			{
				id: 'filmDispenser',
				x: 0.218,
				y: 0.592,
				w: 0.15,
				h: 0.02,
				action: 'press',
				disabledText: 'Decode it to print',
				successText: 'ohhh it tells something'
			},
			{
				id: 'batteryHolder',
				x: 0.456,
				y: 0.573,
				w: 0.13,
				h: 0.05,
				action: 'press',
				disabledText: 'Place for power ?'
			},
			{
				id: 'shapeBtn1',
				x: 0.456,
				y: 0.673,
				w: 0.075,
				h: 0.082,
				action: 'press',
				disabledText: 'This thing needs power to work'
			},
			{
				id: 'shapeBtn2',
				x: 0.545,
				y: 0.673,
				w: 0.075,
				h: 0.082,
				action: 'press',
				disabledText: 'This thing needs power to work'
			},
			{
				id: 'shapeBtn3',
				x: 0.634,
				y: 0.673,
				w: 0.075,
				h: 0.082,
				action: 'press',
				disabledText: 'This thing needs power to work'
			},
			{
				id: 'shapeBtn4',
				x: 0.723,
				y: 0.673,
				w: 0.075,
				h: 0.082,
				action: 'press',
				disabledText: 'This thing needs power to work'
			}
		]
	},
	clock: {
		id: 'clock',
		bg: 'zoomin/clock.png',
		hotspots: [
			{
				id: 'battery',
				x: 0.285,
				y: 0.81,
				w: 0.025,
				h: 0.05,
				action: 'press',
				successText: 'why do i need batteries?'
			}
		]
	},
	bin: {
		id: 'bin',
		bg: 'zoomin/bin.png',
		hotspots: []
	},
	locker: {
		id: 'locker',
		bg: 'zoomin/locker.png',
		hotspots: [
			{ id: 'lockerBtn1', x: 0.315, y: 0.42, w: 0.082, h: 0.033, action: 'press' },
			{ id: 'lockerBtn2', x: 0.418, y: 0.42, w: 0.098, h: 0.033, action: 'press' },
			{ id: 'lockerBtn3', x: 0.535, y: 0.42, w: 0.082, h: 0.033, action: 'press' },
			{ id: 'lockerBtn4', x: 0.315, y: 0.466, w: 0.082, h: 0.033, action: 'press' },
			{ id: 'lockerBtn5', x: 0.418, y: 0.466, w: 0.098, h: 0.033, action: 'press' },
			{ id: 'lockerBtn6', x: 0.535, y: 0.466, w: 0.082, h: 0.033, action: 'press' },
			{ id: 'lockerBtn7', x: 0.315, y: 0.513, w: 0.082, h: 0.033, action: 'press' },
			{ id: 'lockerBtn8', x: 0.418, y: 0.513, w: 0.098, h: 0.033, action: 'press' },
			{ id: 'lockerBtn9', x: 0.535, y: 0.513, w: 0.082, h: 0.033, action: 'press' },
			{ id: 'lockerBtn0', x: 0.418, y: 0.562, w: 0.098, h: 0.033, action: 'press' },
			{ id: 'lockerBtn_', x: 0.535, y: 0.562, w: 0.082, h: 0.033, action: 'press' }
		]
	},
	'green-board': {
		id: 'green-board',
		bg: 'zoomin/green-board.png',
		hotspots: []
	},
	'blue-board-left-bottom': {
		id: 'blue-board-left-bottom',
		bg: 'zoomin/blue-board-left-bottom.png',
		hotspots: []
	},
	'blue-board-right-top': {
		id: 'blue-board-right-top',
		bg: 'zoomin/blue-board-right-top.png',
		hotspots: []
	},
	'blue-board-center': {
		id: 'blue-board-center',
		bg: 'zoomin/blue-board-center.png',
		hotspots: []
	},
	binaryBox: {
		id: 'binaryBox',
		bg: 'zoomin/binaryBox.png',
		hotspots: [
			{ id: 'btn1', x: 0.115, y: 0.559, w: 0.075, h: 0.048, action: 'press' },
			{ id: 'btn2', x: 0.255, y: 0.559, w: 0.075, h: 0.048, action: 'press' },
			{ id: 'btn3', x: 0.393, y: 0.559, w: 0.075, h: 0.048, action: 'press' },
			{ id: 'btn4', x: 0.534, y: 0.559, w: 0.075, h: 0.048, action: 'press' },
			{ id: 'btn5', x: 0.672, y: 0.559, w: 0.075, h: 0.048, action: 'press' },
			{ id: 'btn6', x: 0.81, y: 0.559, w: 0.075, h: 0.048, action: 'press' }
		]
	},
	projector: {
		id: 'projector',
		bg: 'zoomin/projector.png',
		hotspots: [
			{ id: 'row1pos1', x: 0.415, y: 0.31, w: 0.04, h: 0.065, action: 'press' },
			{ id: 'row1pos2', x: 0.485, y: 0.31, w: 0.04, h: 0.065, action: 'press' },
			{ id: 'row1pos3', x: 0.56, y: 0.31, w: 0.04, h: 0.065, action: 'press' },
			{ id: 'row1pos4', x: 0.64, y: 0.31, w: 0.04, h: 0.065, action: 'press' },
			{ id: 'row1pos5', x: 0.715, y: 0.31, w: 0.04, h: 0.065, action: 'press' },
			{ id: 'row2pos1', x: 0.415, y: 0.39, w: 0.04, h: 0.065, action: 'press' },
			{ id: 'row2pos2', x: 0.485, y: 0.39, w: 0.04, h: 0.065, action: 'press' },
			{ id: 'row2pos3', x: 0.56, y: 0.39, w: 0.04, h: 0.065, action: 'press' },
			{ id: 'row2pos4', x: 0.64, y: 0.39, w: 0.04, h: 0.065, action: 'press' },
			{ id: 'row2pos5', x: 0.715, y: 0.39, w: 0.04, h: 0.065, action: 'press' },
			{ id: 'row3pos1', x: 0.415, y: 0.47, w: 0.04, h: 0.065, action: 'press' },
			{ id: 'row3pos2', x: 0.485, y: 0.47, w: 0.04, h: 0.065, action: 'press' },
			{ id: 'row3pos3', x: 0.56, y: 0.47, w: 0.04, h: 0.065, action: 'press' },
			{ id: 'row3pos4', x: 0.64, y: 0.47, w: 0.04, h: 0.065, action: 'press' },
			{ id: 'row3pos5', x: 0.715, y: 0.47, w: 0.04, h: 0.065, action: 'press' },
			{ id: 'row4pos1', x: 0.415, y: 0.55, w: 0.04, h: 0.065, action: 'press' },
			{ id: 'row4pos2', x: 0.485, y: 0.55, w: 0.04, h: 0.065, action: 'press' },
			{ id: 'row4pos3', x: 0.56, y: 0.55, w: 0.04, h: 0.065, action: 'press' },
			{ id: 'row4pos4', x: 0.64, y: 0.55, w: 0.04, h: 0.065, action: 'press' },
			{ id: 'row4pos5', x: 0.715, y: 0.55, w: 0.04, h: 0.065, action: 'press' },
			{ id: 'row5pos1', x: 0.415, y: 0.63, w: 0.04, h: 0.065, action: 'press' },
			{ id: 'row5pos2', x: 0.485, y: 0.63, w: 0.04, h: 0.065, action: 'press' },
			{ id: 'row5pos3', x: 0.56, y: 0.63, w: 0.04, h: 0.065, action: 'press' },
			{ id: 'row5pos4', x: 0.64, y: 0.63, w: 0.04, h: 0.065, action: 'press' },
			{ id: 'row5pos5', x: 0.715, y: 0.63, w: 0.04, h: 0.065, action: 'press' },
			{ id: 'filmHolder', x: 0.268, y: 0.835, w: 0.62, h: 0.065, action: 'press' }
		]
	}
};
