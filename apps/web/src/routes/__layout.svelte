<script>
	import '$lib/styles/global.css';
</script>

<div class="flex border-b justify-center">
	<div class="w-1/2 inline-flex flex-col md:flex-row justify-between items-center">
		<div class="bg-white text-secondary-1 font-bold text-xl py-3 px-5 font-titan-one">ALCH</div>
		<div class="flex-1 py-2 flex justify-end items-center gap-2">
			<a href="/" class=" hover:bg-white hover:text-secondary-1 px-2 py-1">Home</a>
			<a href="" class="hover:bg-white hover:text-secondary-1 px-2 py-1">Trade</a>
			<button class="bg-white text-secondary-1  hover:bg-opacity-50 active:bg-opacity-95 px-2 py-1"
				>Connect</button
			>
		</div>
	</div>
</div>

<slot />
