<script lang="ts">
	import Scene from '$lib/components/scene.svelte';
	import { items } from '$lib/data/items';
	import { scenes } from '$lib/data/scenes';
	import { zoomins } from '$lib/data/zoomins';
	import { loadLocalGame, saveLocalGame } from '$lib/game/persist.local';
	import { processMove } from '$lib/game/rules';
	import { game } from '$lib/game/state.svelte';
	import type { Hotspot, SceneType, ZoomIn } from '$lib/types';
	import { StepBack, StepForward } from '@lucide/svelte';
	import { onMount } from 'svelte';

	let zoomedWin = $state<ZoomIn | null>(null);
	let message = $state('');
	let gameOver = $state(false);

	function clickHotspot(hotspot: Hotspot) {
		message = '';
		if (hotspot.action == 'zoom-in') {
			zoomedWin = zoomins[hotspot.id] ?? null;
			game.zoomedId = hotspot.id;
			persist();
			return;
		}
		const result = processMove(hotspot);

		if (result?.type === 'zoomIn') {
			zoomedWin = zoomins[hotspot.id] ?? null;
			game.zoomedId = hotspot.id;
			persist();
			return;
		}
		if (result?.type === 'closeZoom' || result?.type === 'progress') zoomedWin = null;
		if (result?.msg) message = result?.msg;
		persist();
		if (result?.type === 'end') {
			gameOver = true;
		}
	}

	function getActiveScene(): SceneType {
		return scenes[game.activeSceneId];
	}

	function onLeft() {
		zoomedWin = null;
		message = '';

		const keys = Object.keys(scenes);
		const idx = keys.indexOf(game.activeSceneId);
		const next = idx - 1 >= 0 ? keys[idx - 1] : keys[keys.length - 1];

		game.activeSceneId = next;
		persist();
	}

	function onRight() {
		zoomedWin = null;
		message = '';

		const keys = Object.keys(scenes);
		const idx = keys.indexOf(game.activeSceneId);
		const next = idx + 1 < keys.length ? keys[idx + 1] : keys[0];

		game.activeSceneId = next;
		persist();
	}

	onMount(() => {
		Object.assign(game, loadLocalGame());
		if (game.zoomedId) {
			zoomedWin = zoomins[game.zoomedId];
		}
	});

	function persist() {
		saveLocalGame(game);
	}
</script>

{#if !gameOver}
	<div class="max-w-250 p-10">
		<div class="flex justify-center gap-x-2">
			<button class="cursor-pointer" onclick={onLeft}><StepBack fill={'white'} /></button>
			<div class={`flex w-250 ${zoomedWin ? 'flex-2' : ''} items-center justify-center`}>
				<Scene
					id={game.activeSceneId}
					width="full"
					bg={getActiveScene().bg}
					alternateBg={getActiveScene().alternateBg ?? []}
					hotspots={getActiveScene().hotspots}
					onclick={clickHotspot}
				/>
			</div>
			<button class=" cursor-pointer" onclick={onRight}><StepForward fill={'white'} /></button>
			{#if zoomedWin}
				<div class="flex flex-1 items-center justify-center">
					<Scene
						id={zoomedWin.id}
						width="half"
						bg={zoomedWin!.bg}
						hotspots={zoomedWin!.hotspots}
						otherComp={game.otherComp}
						onclick={clickHotspot}
					/>
				</div>
			{/if}
		</div>
		<div class="mt-5 w-full p-5 text-center font-mono italic">{message}</div>
		<p class="mt-4 font-bold uppercase">Inventory</p>
		<div class="mt-2 flex flex-col items-start rounded bg-gray-200/10">
			<div class="flex h-20 items-center justify-center gap-x-2 p-3">
				{#each game.inventory as item}
					<button
						class={`rounded border border-white/10 p-2 hover:bg-white/10 ${game.selectedItem == item.id ? 'bg-white/10' : ''}`}
						onclick={() => (game.selectedItem = item.id)}
					>
						<img src={item.icon} alt={item.name} class="h-10 w-10" />
					</button>
				{/each}
			</div>
			{#if game.selectedItem}
				<div class="w-full bg-gray-500/10 p-3">
					<p class="text-gray-500">
						Selected Item: <span class="text-md font-bold text-white uppercase"
							>{Object.values(items).find((item) => item.id === game.selectedItem)?.name}</span
						>
					</p>
				</div>
			{/if}
		</div>
	</div>
{:else}
	<div class="flex items-center justify-center p-10">Game Over</div>
{/if}
