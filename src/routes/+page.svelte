<script lang="ts">
	import { onMount } from 'svelte';
	import { isTopbarLight } from '$lib/store';
	import type { PageData } from './$types';
	import BannerContainer from '$lib/containers/BannerContainer.svelte';
	import BenefitsContainer from '$lib/containers/BenefitsContainer.svelte';
	import VisionContainer from '$lib/containers/VisionContainer.svelte';
	import WhoWeAreContainer from '$lib/containers/WhoWeAreContainer.svelte';
	import EventsContainer from '$lib/containers/EventsContainer.svelte';
	import ProductsContainer from '$lib/containers/ProductsContainer.svelte';
	import TestimonialsContainer from '$lib/containers/TestimonialsContainer.svelte';

	export let data: PageData;

	onMount(() => {
		isTopbarLight.set(true);
	});
</script>

<div>
	<BannerContainer banners={data.banners} />
	<WhoWeAreContainer />
	<VisionContainer />
	<BenefitsContainer />
	<ProductsContainer products={data.products} />
	<EventsContainer />
	<TestimonialsContainer />
</div>
