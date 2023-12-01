<script lang="ts">
	import { fly } from 'svelte/transition';
	import { pb } from '$lib/pocketbase';
	import type { RecordModel } from 'pocketbase';
	import CloseFilledIcon from '$lib/assets/svg/close_filled_icon.svelte';
	import Input from '$lib/components/Input.svelte';

	export let product: RecordModel;
	let isPasswordModal = false;
	let password = '';
</script>

<div class="min-w-full snap-start flex flex-col items-start p-8 rounded-2xl bg-white-70%">
	<img
		src={pb.files.getUrl(product, product.img)}
		alt="events"
		class="min-w-full object-cover min-h-[184px] max-h-[184px] rounded-lg"
	/>
	<div class="font-optima text-2xl mt-5 text-bwi-eerie-black">{product.name}</div>
	<div class="font-optima text-lg/loose text-bwi-eerie-black">
		{product.retailers_images.length || 0} files
	</div>
	<button
		class="flex font-oakes text-center border-2 border-bwi-eerie-black rounded-full px-5 py-3 gap-4 mt-5 hover:bg-bwi-eerie-black hover:text-bwi-alabaster"
		on:click={() => (isPasswordModal = true)}
	>
		<span class="lg:text-xl">Open Catalog</span>
		<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 25" fill="none">
			<path
				d="M12 4.5L10.59 5.91L16.17 11.5H4V13.5H16.17L10.59 19.09L12 20.5L20 12.5L12 4.5Z"
				fill="currentColor"
			/>
		</svg>
	</button>
</div>

{#if isPasswordModal}
	<div>
		<div class="fixed top-0 left-0 z-40 bg-black opacity-50 h-screen w-screen" />
		<div
			class="fixed top-0 left-0 z-50 h-full w-full my-10"
			transition:fly={{ y: 200, duration: 500 }}
		>
			<div
				class="absolute bg-bwi-alabaster w-80 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 overflow-y-auto no-scrollbar rounded p-6"
			>
				<div class="relative flex justify-between items-center mb-4">
					<div class="text-2xl text-bwi-eerie-black font-optima">Open Catalog</div>
					<button class="w-8 h-8 text-bwi-battleship" on:click={() => (isPasswordModal = false)}>
						<CloseFilledIcon height="100%" width="100%" />
					</button>
				</div>
				<div class="text-sm/loose font-oakes">
					Are you sure you want to open Easywalker Catalog?
				</div>

				<div class="mt-10">
					<Input type="password" name="Password" label="Password" value={password} />
				</div>

				<div class="flex w-full justify-end">
					<button
						class="font-oakes text-center rounded-full px-6 py-3 gap-4 mt-5 bg-bwi-lion text-bwi-alabaster"
					>
						Open
					</button>
				</div>
			</div>
		</div>
	</div>
{/if}
