<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div
	class="hidden h-screen w-screen flex-col items-center justify-center bg-black text-white lg:flex"
>
	<div class=" flex h-20 w-full items-center justify-center bg-gray-950">
		<h1 class="font-mono text-2xl">Escape Room</h1>
	</div>
	<div class="flex-1">{@render children()}</div>
</div>

<div
	class="flex h-screen w-screen items-center justify-center bg-black p-6 text-center text-white lg:hidden"
>
	<div class="max-w-md">
		<h1 class="text-2xl font-bold">Desktop Only</h1>
		<p class="mt-3 text-white/70">
			This game is designed for desktop screens. Please open it on a laptop/PC and maximize the
			window size.
		</p>
	</div>
</div>
