<script lang="ts">
	import { fly } from 'svelte/transition';
	import { flip } from 'svelte/animate';
	import { inview } from 'svelte-inview';
	import { onMount } from 'svelte';
	import TopbarPad from '$lib/components/TopbarPad.svelte';
	import type { PageData } from './$types';
	import { pb } from '$lib/pocketbase';
	import { backgroundColor, isTopbarBackground, isTopbarLight } from '$lib/store';

	export let data: PageData;
	let isShow = false;

	onMount(() => {
		isTopbarBackground.set(false);
		isTopbarLight.set(false);
		backgroundColor.set('bg-bwi-alabaster');
	});

	const handleChange = ({ detail }: CustomEvent<ObserverEventDetails>) => {
		if (!isShow && detail.inView) isShow = true;
	};
</script>

<svelte:head>
	<meta name="theme-color" content="#EAE9DF" />
</svelte:head>

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
						animate:flip={{ duration: 200 }}
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
				Sorry we haven’t found any retailers
			</div>
		{/if}
	</div>
</div>
