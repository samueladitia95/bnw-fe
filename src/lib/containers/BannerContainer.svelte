<script lang="ts">
	import { onMount } from 'svelte';
	import { isTopbarBackground } from '$lib/store';
	import { inview } from 'svelte-inview';
	import type { ObserverEventDetails } from 'svelte-inview';
	import type { Record } from 'pocketbase';
	import { pb } from '$lib/pocketbase';

	export let banners: Record[];
	const itemNumber: number = banners.length;

	let interval: number;
	let bannerView: number = 0;
	let containerEl: Element;

	const autoPlay = () =>
		(interval = setInterval(() => {
			let position = bannerView;
			if (position >= 0 && position >= itemNumber - 1) {
				position = 0;
			} else if (position >= 0 && position < itemNumber) {
				position = position + 1;
			}
			scrollIntoView(position);
		}, 3000));

	const scrollIntoView = (selectedView: number) => {
		clearInterval(interval);
		const maxWidth = containerEl.scrollWidth;

		if (selectedView >= 0 && selectedView < itemNumber) {
			bannerView = selectedView;
		}

		containerEl.scrollTo({ left: (maxWidth / itemNumber) * bannerView, behavior: 'smooth' });
		autoPlay();
	};
	const handleChange = ({ detail }: CustomEvent<ObserverEventDetails>) => {
		// isInView = detail.inView;
		isTopbarBackground.set(detail.inView);
	};

	onMount(() => {
		autoPlay();
	});
</script>

<div
	use:inview={{
		rootMargin: '-100px'
	}}
	on:inview_change={handleChange}
	class="relative"
>
	<div class="bg-black opacity-50 h-full w-full z-10 absolute" />
	<div bind:this={containerEl} class="max-w-full overflow-hidden flex">
		{#each banners as banner}
			<div class="relative min-w-full">
				<div
					class="z-20 text-bwi-alabaster font-optima text-5xl leading-normal text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
				>
					{banner.content}
				</div>
				<img
					src={pb.files.getUrl(banner, banner.img)}
					alt="banner"
					class="w-screen h-screen object-cover"
				/>
			</div>
		{/each}
	</div>
	<div class="absolute bottom-10 flex gap-3 z-20 left-1/2 -translate-x-1/2 -translate-y-1/2">
		{#each { length: itemNumber } as _, i}
			<button
				class="bg-bwi-alabaster w-3 h-3 rounded-full {bannerView === i
					? 'opacity-100'
					: 'opacity-50'}"
				on:click={() => scrollIntoView(i)}
			/>
		{/each}
	</div>
</div>
