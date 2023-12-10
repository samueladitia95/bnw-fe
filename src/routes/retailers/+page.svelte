<script lang="ts">
	import { fly } from 'svelte/transition';
	import { inview } from 'svelte-inview';
	import { onMount } from 'svelte';
	import { pb } from '$lib/pocketbase';
	import TopbarPad from '$lib/components/TopbarPad.svelte';
	import type { PageData } from './$types';
	import { backgroundColor, isTopbarBackground, isTopbarLight } from '$lib/store';
	import CloseFilledIcon from '$lib/assets/svg/close_filled_icon.svelte';
	import Input from '$lib/components/Input.svelte';
	import type { RecordModel } from 'pocketbase';
	import ChevronIcon from '$lib/assets/svg/chevron_icon.svelte';
	import ImageCard from '$lib/containers/Retailers/ImageCard.svelte';

	export let data: PageData;
	let isShow = false;
	let isPasswordModal = false;
	let password: string = '';
	let selectedProduct: RecordModel | null = null;
	let isListImageRetailers = false;

	onMount(() => {
		isTopbarBackground.set(false);
		isTopbarLight.set(false);
		backgroundColor.set('bg-bwi-alabaster');

		// ! TESTING ONLY
		// selectedProduct = data.products[0];
		// isListImageRetailers = true;
	});

	const handleChange = ({ detail }: CustomEvent<ObserverEventDetails>) => {
		if (!isShow && detail.inView) isShow = true;
	};

	const handleChooseRetailers = (product: RecordModel) => {
		isPasswordModal = true;
		selectedProduct = product;
	};

	const handleValidatePassword = () => {
		// ? FOR TESTING ONLY
		if (password === 'test') {
			isPasswordModal = false;
			password = '';
			isListImageRetailers = true;
		} else {
		}
	};
</script>

<svelte:head>
	<meta name="theme-color" content="#EAE9DF" />
</svelte:head>

<!-- MAIN PAGE -->
{#if !isListImageRetailers}
	<div
		class="bg-bwi-alabaster min-h-screen"
		use:inview={{
			rootMargin: '-100px',
			unobserveOnEnter: true
		}}
		on:inview_change={handleChange}
	>
		<TopbarPad />
		<div class="container flex flex-col gap-4 text-bwi-eerie-black pb-20">
			<div class="flex flex-col gap-4 mb-10">
				<div class="font-optima text-3xl md:text-5xl">Retailers</div>
				<div class="font-oakes text-bwi-eerie-black md:text-xl">
					Welcome Retailers, we have products that you might want to look
				</div>
			</div>

			{#if data.products.length}
				<div
					class="flex flex-col gap-6 md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:gap-y-8"
					transition:fly={{ y: 200, duration: 1000, delay: 100 }}
				>
					{#each data.products as product, index (index)}
						<!-- Event Card -->
						<div
							class="min-w-full snap-start flex flex-col items-start p-8 rounded-2xl bg-white-70%"
						>
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
								on:click={() => handleChooseRetailers(product)}
							>
								<span class="lg:text-xl">Open Catalog</span>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 25"
									fill="none"
								>
									<path
										d="M12 4.5L10.59 5.91L16.17 11.5H4V13.5H16.17L10.59 19.09L12 20.5L20 12.5L12 4.5Z"
										fill="currentColor"
									/>
								</svg>
							</button>
						</div>
					{/each}
				</div>
			{:else if data.products.length < 1}
				<div
					class="text-bwi-bwi-eerie-black font-oakes h-[30vh] w-full flex justify-center items-center"
				>
					Sorry we haven`t found any retailers
				</div>
			{/if}
		</div>
	</div>
{/if}

<!-- LIST OF IMAGES OF ONE PRODUCT -->
{#if isListImageRetailers && selectedProduct}
	<div class="bg-bwi-alabaster min-h-screen">
		<TopbarPad />
		<div class="container flex flex-col gap-4 text-bwi-eerie-black pb-20">
			<div class="flex flex-col gap-4 mb-10">
				<div class="flex gap-1 items-center">
					<div class="font-oakes md:text-2xl">Retailers</div>
					<div class="-rotate-90">
						<ChevronIcon width="1.5em" height="1.5em" />
					</div>
					<div class="font-oakes font-semibold text-bwi-eerie-black whitespace-nowrap md:text-2xl">
						{selectedProduct.name} Catalog
					</div>
				</div>
				<div class="font-oakes text-bwi-eerie-black md:text-xl">
					{selectedProduct.retailers_images.length} images
				</div>
			</div>

			<div
				class="flex flex-col gap-6 md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:gap-y-8"
			>
				{#each selectedProduct.retailers_images as retailers_image, index}
					<ImageCard {selectedProduct} {retailers_image} {index} />
				{/each}
			</div>
		</div>
	</div>
{/if}

<!-- PASSWQORD MODAL INPUT -->
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
					<button
						class="w-8 h-8 text-bwi-battleship"
						on:click={() => {
							isPasswordModal = false;
							selectedProduct = null;
							password = '';
						}}
					>
						<CloseFilledIcon height="100%" width="100%" />
					</button>
				</div>
				<div class="text-sm/loose font-oakes">
					Are you sure you want to open Easywalker Catalog?
				</div>

				<form
					on:submit={(e) => {
						e.preventDefault();
						handleValidatePassword();
					}}
				>
					<div class="mt-10">
						<Input type="password" name="Password" label="Password" bind:value={password} />
					</div>

					<div class="flex w-full justify-end">
						<button
							class="font-oakes text-center rounded-full px-6 py-3 gap-4 mt-5 bg-bwi-lion text-bwi-alabaster"
							on:click={() => {
								handleValidatePassword();
							}}
						>
							Open
						</button>
					</div>
				</form>
			</div>
		</div>
	</div>
{/if}
