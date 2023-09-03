<script>
	import { onMount } from 'svelte';
	import TopbarPad from '$lib/components/TopbarPad.svelte';
	import { backgroundColor, isTopbarBackground, isTopbarLight } from '$lib/store';

	onMount(() => {
		isTopbarBackground.set(false);
		isTopbarLight.set(false);
		backgroundColor.set('bg-bwi-alabaster');
	});
</script>

<div class="bg-bwi-alabaster min-h-screen">
	<TopbarPad />
</div>
