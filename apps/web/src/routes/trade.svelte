<section class="flex flex-col justify-center py-1">
	<h1 class="text-xl drop-shadow font-bold font-titan-one uppercase">LET'S TRADE</h1>
</section>

<div class="flex gap-5">
	<div class="flex-1 bg-white text-secondary-2 rounded p-2">GRAPH</div>
	<div class="w-1/3 bg-white text-secondary-2 rounded flex flex-col">
		<div class="px-2 py-1 font-semibold border-b border-secondary-1">Place Order</div>
		<div class="p-2">
			<div
				class="p-1 group group-active:border group-active:border-secondary-1 relative bg-secondary-3 rounded"
			>
				<span
					class="absolute bottom-0 top-0 w-full pointer-events-none inline-flex flex-col justify-center text-white"
					>Size (ALUSD)</span
				>
				<input
					class="w-full outline-none bg-transparent text-right p-2 text-white"
					placeholder="0.0"
				/>
			</div>
		</div>

		<div class="flex p-2 gap-2">
			<button
				class="flex-1 p-2 bg-red-500 text-white rounded hover:bg-opacity-80 active:bg-opacity-50"
				>Short</button
			>
			<button
				class="flex-1 p-2 bg-green-500 text-white rounded hover:bg-opacity-80 active:bg-opacity-50"
				>Long</button
			>
		</div>
	</div>
</div>
