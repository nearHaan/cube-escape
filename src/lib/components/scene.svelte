<script lang="ts">
	import { game, type Component } from '$lib/game/state.svelte';
	import type { Hotspot } from '$lib/types';
	import { Film, SlidersHorizontal } from '@lucide/svelte';

	let {
		id,
		width,
		bg,
		alternateBg,
		hotspots,
		otherComp,
		onclick
	}: {
		id: string;
		width: string;
		bg: string;
		alternateBg?: string[];
		hotspots: Hotspot[];
		otherComp?: Record<string, Component>;
		onclick: Function;
	} = $props();

	const altBgIndex = () => {
		if (id === 'scene1') {
			if (game.flags.projectorOn) {
				if (!game.flags.doorPlankBroken) {
					return 2;
				}
				return 1;
			}
			if (!game.flags.doorPlankBroken) {
				return 0;
			}
		}
		if (id === 'scene2') {
			if (game.flags.vaultOpened) {
				return 0;
			}
		}
		return -1;
	};
</script>

<div
	class={`relative ${
		width == 'full' ? 'aspect-1000/650' : 'aspect-700/1080'
	} //w-[min(100%,200px)] w-full overflow-hidden rounded-2xl`}
>
	<img
		class="pointer-events-none h-full w-full object-cover"
		src={altBgIndex() != -1 ? alternateBg![altBgIndex()] : bg}
		alt="scene"
		draggable="false"
	/>

	{#each hotspots as h}
		{#if h.alternateIndex === undefined || h.alternateIndex === altBgIndex()}
			<button
				class="//bg-red-300/20 //hover:border-[#00000020] //hover:bg-[#00000020] absolute z-50 cursor-pointer border-2 border-transparent bg-transparent"
				style={`
				left:${h.x * 100}%;
				top:${h.y * 100}%;
				width:${h.w * 100}%;
				height:${h.h * 100}%;
				transform:rotate(${h.r ?? 0}deg)
			`}
				onclick={() => onclick(h)}
				aria-label={h.id}
				tabindex="-1"
			></button>
		{/if}
	{/each}

	{#if id === 'scene3' && game.flags.projectorOn}
		<div
			class="absolute flex aspect-square items-center justify-center rounded-full bg-white/20"
			style={`
						left:${0.323 * 100}%;
						top:${0.275 * 100}%;
						width:${0.25 * 100}%;
					`}
		>
			<div
				class="absolute flex aspect-square items-center justify-center rounded-full bg-red-200/20"
				style={`
						width:${0.5 * 100}%;
					`}
			>
				<div
					class="absolute aspect-square rounded-full bg-red-200/20"
					style={`
						width:${0.5 * 100}%;
					`}
				></div>
			</div>
		</div>
	{/if}

	{#if id === 'projector'}
		{@const projector = otherComp?.projector}
		{#if projector && projector.id === 'projector'}
			{#each projector?.comp as comp}
				<button
					class="absolute cursor-pointer border-2 border-transparent bg-amber-950 hover:border-[#00000020]"
					style={`
						left:${comp.x * 100}%;
						top:${comp.y * 100}%;
						width:${0.04 * 100}%;
						height:${0.065 * 100}%;
					`}
					onclick={() => onclick(comp)}
					aria-label={comp.id}
					tabindex="-1"
				></button>
			{/each}
			<div
				class="absolute flex cursor-pointer items-center border-2 border-transparent"
				style={`
						left:${0.43 * 100}%;
						top:${0.09 * 100}%;
						width:${0.3 * 100}%;
						height:${0.1 * 100}%;
					`}
			>
				<div
					class={`m-1 flex aspect-square flex-1 items-center justify-center rounded-full ${game.flags.filmPlaced ? 'bg-green-600' : 'bg-gray-600'} text-gray-300`}
				>
					<Film size={'60%'} />
				</div>
				<div
					class={`m-1 flex aspect-square flex-1 items-center justify-center rounded-full ${game.flags.projectorCodeCracked ? 'bg-green-600' : 'bg-gray-600'} text-gray-300`}
				>
					<SlidersHorizontal size={'60%'} />
				</div>
			</div>
		{/if}
	{/if}

	{#if id === 'clock'}
		{#if !game.flags.batteryFound}
			{@const battery = otherComp?.battery}
			{#if battery && battery.id === 'battery'}
				<div
					class="absolute cursor-pointer border-2 border-transparent bg-red-500/20"
					style={`
						left:${battery.comp.x * 100}%;
						top:${battery.comp.y * 100}%;
						width:${0.025 * 100}%;
						height:${0.025 * 100}%;
					`}
				></div>
				<div
					class="absolute cursor-pointer border-2 border-transparent bg-red-500/20"
					style={`
						left:${battery.comp.x * 100}%;
						top:${battery.comp.y * 100}%;
						width:${0.025 * 100}%;
						height:${0.05 * 100}%;
					`}
				></div>
			{/if}
		{/if}
	{/if}

	{#if id === 'computer'}
		{#if !game.flags.vaultOpened}
			{@const textbox = otherComp?.vaultTextbox}
			{#if textbox && textbox.id === 'vaultTextbox'}
				<input
					type="text"
					class="absolute z-60 cursor-pointer border-2 border-transparent bg-red-500/20 text-xs uppercase"
					bind:value={textbox.comp.value}
					onchange={(e) => (textbox.comp.value = e.currentTarget!.value ?? '')}
					style={`
						left:${textbox.comp.x * 100}%;
						top:${textbox.comp.y * 100}%;
						width:${0.348 * 100}%;
						height:${0.033 * 100}%;
					`}
				/>
			{/if}
		{/if}
	{/if}

	{#if id === 'binaryBox'}
		{@const binaryBox = otherComp?.binaryBox}
		{#if binaryBox && binaryBox.id === 'binaryBox'}
			{#each binaryBox.comp.value.split('') as digit, index}
				<div
					class={`absolute aspect-square rounded-full ${digit === '0' ? 'bg-red-950' : 'bg-red-800'}`}
					style={`
						left:${0.135 * (index + 1) * 100}%;
						top:${0.46 * 100}%;
						width:${0.05 * 100}%;
					`}
				></div>
			{/each}
		{/if}
	{/if}

	{#if id === 'locker'}
		{@const locker = otherComp?.locker}
		{#if locker && locker.id === 'locker'}
			<div
				class={`absolute overflow-hidden bg-blue-950/20 text-sm text-green-500`}
				style={`
						left:${0.315 * 100}%;
						top:${0.354 * 100}%;
						width:${0.3 * 100}%;
						height:${0.048 * 100}%;
					`}
			>
				{locker.comp.value}
			</div>
		{/if}
	{/if}

	{#if id === 'vault'}
		{@const shapeBox = otherComp?.shapeBox}
		{#if shapeBox && shapeBox.id === 'shapeBox'}
			<div
				class={`absolute aspect-square  overflow-hidden rounded-full border-2 border-gray-600 ${!game.flags.batteryPlaced ? 'bg-gray-700' : game.flags.shapePuzzleOpened ? 'bg-green-500' : game.otherComp.shapeBox.id === 'shapeBox' && game.otherComp.shapeBox.comp.value.length === 0 ? 'bg-red-500' : 'bg-yellow-500'}`}
				style={`
						left:${0.7 * 100}%;
						top:${0.585 * 100}%;
						width:${0.08 * 100}%;
					`}
			></div>
			{#if game.flags.batteryPlaced}
				<div
					class={`absolute  overflow-hidden rounded-full`}
					style={`
						left:${0.43 * 100}%;
						top:${0.533 * 100}%;
						width:${0.2 * 100}%;
					`}
				>
					<img alt="battery" src="items/battery.png" />
				</div>
			{/if}
		{/if}
	{/if}
</div>
