<script lang="ts">
	import { onMount } from 'svelte';
	import { backgroundColor, isTopbarLight } from '$lib/store';
	import type { PageData } from './$types';
	import BannerContainer from '$lib/containers/BannerContainer.svelte';
	import BenefitsContainer from '$lib/containers/BenefitsContainer.svelte';
	import VisionContainer from '$lib/containers/VisionContainer.svelte';
	import WhoWeAreContainer from '$lib/containers/WhoWeAreContainer.svelte';
	import EventsContainer from '$lib/containers/EventsContainer.svelte';
	import ProductsContainer from '$lib/containers/ProductsContainer.svelte';
	// import TestimonialsContainer from '$lib/containers/TestimonialsContainer.svelte';

	export let data: PageData;

	onMount(() => {
		isTopbarLight.set(true);
		backgroundColor.set('bg-bwi-battleship');
	});
</script>

<svelte:head>
	<meta name="theme-color" content="#8E8B7B" />
</svelte:head>

<div>
	<BannerContainer banners={data.banners} />
	<WhoWeAreContainer content={data.whoweare.content} videoLink={data.whoweare.videoLink} />
	<VisionContainer mainVision={data.visions.mainVision} visions={data.visions.list} />
	<BenefitsContainer mainBenefit={data.benefits.mainBenefit} benefits={data.benefits.list} />
	<ProductsContainer products={data.products.items} />
	<EventsContainer events={data.events} />
	<!-- <TestimonialsContainer /> -->
</div>
