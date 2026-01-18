import type { SceneType } from '$lib/types';

export const scenes: Record<string, SceneType> = {
	scene1: {
		scene: 'scene1',
		bg: '/scenes/scene1.png',
		alternateBg: ['/scenes/scene1-alt1.png', '/scenes/scene1-alt2.png', '/scenes/scene1-alt3.png'],
		hotspots: [
			{
				id: 'knob',
				x: 0.565,
				y: 0.5,
				w: 0.04,
				h: 0.08,
				action: 'press',
				disabledText: 'Not too fast. Find the key first',
				successText: 'Woohooo'
			},
			{
				id: 'plank',
				alternateIndex: 0,
				x: 0.351,
				y: 0.58,
				w: 0.302,
				h: 0.053,
				r: -10,
				action: 'press',
				disabledText: 'Its tight. Need something to remove it',
				successText: 'Woohooo'
			},
			{
				id: 'plank',
				alternateIndex: 2,
				x: 0.351,
				y: 0.58,
				w: 0.302,
				h: 0.053,
				r: -10,
				action: 'press',
				disabledText: 'Its tight. Need something to remove it',
				successText: 'Woohooo'
			}
		]
	},
	scene2: {
		scene: 'scene2',
		bg: '/scenes/scene2.png',
		alternateBg: ['/scenes/scene2-alt1.png'],
		hotspots: [
			{
				id: 'computer',
				x: 0.573,
				y: 0.473,
				w: 0.125,
				h: 0.151,
				action: 'zoom-in',
				disabledText: 'Looks interesting'
			},
			{
				id: 'vault',
				x: 0.18,
				y: 0.215,
				w: 0.252,
				h: 0.7,
				action: 'zoom-in/locked',
				disabledText: 'Locked by some intelligent code. Need to enter the passCode first',
				successText: 'WooHoo!'
			}
		]
	},
	scene3: {
		scene: 'scene3',
		bg: '/scenes/scene3.png',

		hotspots: [
			{
				id: 'locker',
				x: 0.223,
				y: 0.505,
				w: 0.12,
				h: 0.12,
				action: 'zoom-in',
				disabledText: 'Find the secret CODE!'
			},
			{
				id: 'projector',
				x: 0.421,
				y: 0.422,
				w: 0.052,
				h: 0.08,
				action: 'zoom-in/locked',
				disabledText: "The projector's film dock is stuck! Need something to open it",
				successText: 'Wooohooo'
			},
			{
				id: 'drawer1',
				x: 0.185,
				y: 0.64,
				w: 0.148,
				h: 0.05,
				action: 'press',
				disabledText: 'Seems it is locked',
				successText: 'Cool. you found a Screwdriver'
			},
			{ id: 'drawer2', x: 0.343, y: 0.64, w: 0.148, h: 0.05, action: 'press' },
			{
				id: 'blue-board-left-bottom',
				x: 0.49,
				y: 0.25,
				w: 0.1,
				h: 0.18,
				action: 'zoom-in',
				disabledText: 'Looks like... something'
			},
			{
				id: 'blue-board-center',
				x: 0.6,
				y: 0.15,
				w: 0.09,
				h: 0.14,
				action: 'zoom-in',
				disabledText: 'Seems it is locked'
			},
			{
				id: 'blue-board-right-top',
				x: 0.7,
				y: 0.045,
				w: 0.111,
				h: 0.18,
				action: 'zoom-in',
				disabledText: 'Seems it is locked'
			},
			{
				id: 'mat',
				x: 0.17,
				y: 0.945,
				w: 0.325,
				h: 0.05,
				action: 'press',
				disabledText: 'Looks like... something',
				successText: "Looks like you found something. It's a key"
			}
		]
	},
	scene4: {
		scene: 'scene4',
		bg: '/scenes/scene4.png',

		hotspots: [
			{
				id: 'clock',
				x: 0.442,
				y: 0.1,
				w: 0.1,
				h: 0.36,
				action: 'zoom-in',
				disabledText: 'Nice design'
			},
			{
				id: 'binaryBox',
				x: 0.44,
				y: 0.633,
				w: 0.12,
				h: 0.1,
				action: 'zoom-in'
			},
			{
				id: 'bin',
				x: 0.186,
				y: 0.78,
				w: 0.1,
				h: 0.19,
				action: 'zoom-in',
				disabledText: 'Somebody needs to clean this up'
			},
			{
				id: 'blue-shelf',
				x: 0.375,
				y: 0.734,
				w: 0.25,
				h: 0.23,
				action: 'press',
				disabledText: "Ah ! It's locked",
				successText: 'Wooohooo'
			},
			{ id: 'green-board', x: 0.656, y: 0.22, w: 0.135, h: 0.31, action: 'zoom-in' }
		]
	}
} as const;
