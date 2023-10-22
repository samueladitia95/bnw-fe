<script lang="ts">
	import IntroContainer from '$lib/containers/ProductDetail/IntroContainer.svelte';
	import { isTopbarBackground, isTransparent } from '$lib/store';
	import { onMount } from 'svelte';

	onMount(() => {
		isTopbarBackground.set(false);
		isTransparent.set(true);
	});
</script>

<div>
	<IntroContainer />
</div>
