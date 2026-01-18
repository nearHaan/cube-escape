export type ZoomIn = {
	id: string;
	bg: string;
	hotspots: Hotspot[];
};

export type Hotspot = {
	id: string;
	x: number;
	y: number;
	w: number;
	h: number;
	r?: number;
	alternateIndex?: number;
	action: 'zoom-in' | 'note' | 'press' | 'zoom-in/locked';
	disabledText?: string;
	successText?: string;
};

export type SceneType = {
	scene: string;
	bg: string;
	alternateBg?: string[];
	hotspots: Hotspot[];
};
