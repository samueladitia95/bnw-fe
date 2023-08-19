<script lang="ts">
	import BannerContainer from '$lib/containers/BannerContainer.svelte';
	import BenefitsContainer from '$lib/containers/BenefitsContainer.svelte';
	import EventsContainer from '$lib/containers/EventsContainer.svelte';
	import ProductsContainer from '$lib/containers/ProductsContainer.svelte';
	import TestimonialsContainer from '$lib/containers/TestimonialsContainer.svelte';
	import VisionContainer from '$lib/containers/VisionContainer.svelte';
	import WhoWeAreContainer from '$lib/containers/WhoWeAreContainer.svelte';
</script>

<div>
	<BannerContainer />
	<WhoWeAreContainer />
	<VisionContainer />
	<BenefitsContainer />
	<ProductsContainer />
	<EventsContainer />
	<TestimonialsContainer />
</div>
