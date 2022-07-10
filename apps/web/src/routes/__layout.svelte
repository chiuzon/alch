<script context="module">
	/** @type {import('@sveltejs/kit').Load} */
	export async function load({ url }) {
		return {
			props: {
				url: url
			}
		};
	}
</script>

<script lang="ts">
	import '$lib/styles/global.css';
	import { slide } from 'svelte/transition';

	export let url: URL;
</script>

<div class="border-b pr-2 flex flex-col md:flex-row justify-between items-center">
	<div class="bg-white text-secondary-1 font-bold text-xl py-3 px-5 font-titan-one">
		ALCH <span class="text-xs font-poppins">Powered by Alchemix </span>
	</div>
	<div class="flex-1 py-2 flex justify-end items-center gap-2">
		<a href="/" class=" hover:bg-white rounded hover:text-secondary-1 px-2 py-1">Home</a>
		<a href="/trade" class="hover:bg-white rounded hover:text-secondary-1 px-2 py-1">Trade</a>
		<button
			class="bg-white text-secondary-1 rounded hover:bg-opacity-50 active:bg-opacity-95 px-2 py-1"
			>Connect</button
		>
	</div>
</div>

<div class="p-5">
	<div>
		{#key url}
			<div transition:slide>
				<slot />
			</div>
		{/key}
	</div>
</div>
