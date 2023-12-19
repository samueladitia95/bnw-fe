<script lang="ts">
	import { onMount } from 'svelte';
	import { isTopbarBackground } from '$lib/store';
	import { inview } from 'svelte-inview';
	import type { ObserverEventDetails } from 'svelte-inview';
	import type { RecordModel } from 'pocketbase';
	import { pb } from '$lib/pocketbase';

	// export let banners = [
	// 	{
	// 		collectionId: '9op9ngqboctiywb',
	// 		collectionName: 'banner_images',
	// 		content: 'We are in the business of building relationships.',
	// 		created: '2023-08-06 14:40:46.283Z',
	// 		id: '3xrijx2eo7hlbdw',
	// 		img: 'https://s3-alpha-sig.figma.com/img/c2cf/b36d/77751c3dcb9aa42106b80c9ab3baad50?Expires=1694390400&Signature=n6xcyLfZMJutvHQfM9WqV-4SWKcIFLNHmlxqPgprqsBIrGSN6h2tizKcip2T-s~u-Heo8NwpOvf7qoJOpVjadauZx7KUgw6O32UUoxWeM-DLIN7CR595-qER-cIyWCX9-KSjkzknfyXJeVVcEuwzxc7V52C7BXWAIjKD-ebxix6bqQK~XBkEBdi6YHyi9Knk3ODinW05T~sYGsBM2~mrJmPidonyV2SY-kpN0pVHWoKEKEdZmCRls6gJYFMPeszGVeiEYXX0fI8fVpTEYkSxUT1Noql5k1DDipVtuyHK-uF-1HJ5seMpXPqotC-tx1VmAU3T1aMCa~Zaf9wQtlLDvQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
	// 		order: 1,
	// 		project_name: 'bnw',
	// 		updated: '2023-08-30 07:52:14.308Z'
	// 	},
	// 	{
	// 		collectionId: '9op9ngqboctiywb',
	// 		collectionName: 'banner_images',
	// 		content: 'We are in the business of building relationships.',
	// 		created: '2023-08-06 14:49:18.500Z',
	// 		id: '8udru16jerqqwgj',
	// 		img: 'https://s3-alpha-sig.figma.com/img/c2cf/b36d/77751c3dcb9aa42106b80c9ab3baad50?Expires=1694390400&Signature=n6xcyLfZMJutvHQfM9WqV-4SWKcIFLNHmlxqPgprqsBIrGSN6h2tizKcip2T-s~u-Heo8NwpOvf7qoJOpVjadauZx7KUgw6O32UUoxWeM-DLIN7CR595-qER-cIyWCX9-KSjkzknfyXJeVVcEuwzxc7V52C7BXWAIjKD-ebxix6bqQK~XBkEBdi6YHyi9Knk3ODinW05T~sYGsBM2~mrJmPidonyV2SY-kpN0pVHWoKEKEdZmCRls6gJYFMPeszGVeiEYXX0fI8fVpTEYkSxUT1Noql5k1DDipVtuyHK-uF-1HJ5seMpXPqotC-tx1VmAU3T1aMCa~Zaf9wQtlLDvQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
	// 		order: 2,
	// 		project_name: 'bnw',
	// 		updated: '2023-08-30 07:51:56.694Z'
	// 	},
	// 	{
	// 		collectionId: '9op9ngqboctiywb',
	// 		collectionName: 'banner_images',
	// 		content: 'We are int he business of building relationships',
	// 		created: '2023-08-30 07:52:52.985Z',
	// 		id: 'bi1bzeha3x3aldx',
	// 		img: 'https://s3-alpha-sig.figma.com/img/c2cf/b36d/77751c3dcb9aa42106b80c9ab3baad50?Expires=1694390400&Signature=n6xcyLfZMJutvHQfM9WqV-4SWKcIFLNHmlxqPgprqsBIrGSN6h2tizKcip2T-s~u-Heo8NwpOvf7qoJOpVjadauZx7KUgw6O32UUoxWeM-DLIN7CR595-qER-cIyWCX9-KSjkzknfyXJeVVcEuwzxc7V52C7BXWAIjKD-ebxix6bqQK~XBkEBdi6YHyi9Knk3ODinW05T~sYGsBM2~mrJmPidonyV2SY-kpN0pVHWoKEKEdZmCRls6gJYFMPeszGVeiEYXX0fI8fVpTEYkSxUT1Noql5k1DDipVtuyHK-uF-1HJ5seMpXPqotC-tx1VmAU3T1aMCa~Zaf9wQtlLDvQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
	// 		order: 3,
	// 		project_name: 'bnw',
	// 		updated: '2023-08-30 07:52:52.985Z'
	// 	}
	// ];
	export let banners: RecordModel[];
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
					class="z-20 text-bwi-alabaster font-optima text-4xl md:text-5xl leading-normal md:leading-normal text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-full px-6 md:min-w-full md:px-12 lg:px-30 xl:min-w-0"
				>
					{banner.content}
				</div>
				<img
					src={pb.files.getUrl(banner, banner.img_mobile)}
					alt="banner"
					class="w-screen h-screen object-cover md:hidden"
				/>
				<img
					src={pb.files.getUrl(banner, banner.img)}
					alt="banner"
					class="hidden w-screen h-screen object-cover md:flex"
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
