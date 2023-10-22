<script lang="ts">
	import BrandContainer from '$lib/containers/ProductDetail/BrandContainer.svelte';
	import IntroContainer from '$lib/containers/ProductDetail/IntroContainer.svelte';
	import MarketingContainer from '$lib/containers/ProductDetail/MarketingContainer.svelte';

	import { isTopbarBackground, isTransparent } from '$lib/store';
	import { onMount } from 'svelte';

	onMount(() => {
		isTopbarBackground.set(false);
		isTransparent.set(true);
		// isTopbarLight.set(true);
	});
</script>

<div>
	<IntroContainer />
	<BrandContainer />
	<MarketingContainer />
</div>
