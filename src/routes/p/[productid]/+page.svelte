<script lang="ts">
	import BrandContainer from '$lib/containers/ProductDetail/BrandContainer.svelte';
	import IntroContainer from '$lib/containers/ProductDetail/IntroContainer.svelte';
	import MarketingContainer from '$lib/containers/ProductDetail/MarketingContainer.svelte';

	import { isTopbarBackground, isTransparent } from '$lib/store';
	import { onMount } from 'svelte';
	import type { PageData } from './$types';
	import { pb } from '$lib/pocketbase';

	export let data: PageData;

	onMount(() => {
		isTopbarBackground.set(false);
		isTransparent.set(true);
		// isTopbarLight.set(true);
	});
</script>

<div>
	<IntroContainer imgCover={pb.files.getUrl(data.product, data.product.img_cover)} />
	<BrandContainer />
	<MarketingContainer />
</div>
