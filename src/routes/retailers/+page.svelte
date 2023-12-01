<script lang="ts">
	import { fly } from 'svelte/transition';
	import { inview } from 'svelte-inview';
	import { onMount } from 'svelte';
	import TopbarPad from '$lib/components/TopbarPad.svelte';
	import type { PageData } from './$types';
	import { backgroundColor, isTopbarBackground, isTopbarLight } from '$lib/store';
	import RetailerCard from '$lib/containers/Retailer/RetailerCard.svelte';

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
					<RetailerCard {product} />
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
