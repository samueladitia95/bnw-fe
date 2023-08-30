<script lang="ts">
	import { pb } from '$lib/pocketbase';
	import type { PageData } from './$types';
	import BannerContainer from '$lib/containers/BannerContainer.svelte';
	import BenefitsContainer from '$lib/containers/BenefitsContainer.svelte';
	import FooterContainer from '$lib/containers/FooterContainer.svelte';
	import VisionContainer from '$lib/containers/VisionContainer.svelte';
	import WhoWeAreContainer from '$lib/containers/WhoWeAreContainer.svelte';
	// import EventsContainer from '$lib/containers/EventsContainer.svelte';
	// import ProductsContainer from '$lib/containers/ProductsContainer.svelte';
	// import TestimonialsContainer from '$lib/containers/TestimonialsContainer.svelte';

	export let data: PageData;
</script>

<div>
	<BannerContainer />
	<WhoWeAreContainer />
	<VisionContainer />
	<BenefitsContainer />
	<!-- <ProductsContainer /> -->
	<!-- <EventsContainer /> -->
	<!-- <TestimonialsContainer /> -->
	<FooterContainer />
</div>
