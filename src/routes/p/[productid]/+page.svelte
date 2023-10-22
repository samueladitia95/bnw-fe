<script lang="ts">
	import BrandContainer from '$lib/containers/ProductDetail/BrandContainer.svelte';
	import IntroContainer from '$lib/containers/ProductDetail/IntroContainer.svelte';

	import { isTopbarBackground, isTopbarLight, isTransparent } from '$lib/store';
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
</div>
