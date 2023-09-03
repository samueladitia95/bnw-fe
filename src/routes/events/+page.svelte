<script>
	import { onMount } from 'svelte';
	import TopbarPad from '$lib/components/TopbarPad.svelte';
	import { isTopbarBackground, isTopbarLight } from '$lib/store';

	onMount(() => {
		isTopbarBackground.set(true);
		isTopbarLight.set(false);
	});
</script>

<div class="bg-bwi- min-h-screen">
	<TopbarPad />
</div>
