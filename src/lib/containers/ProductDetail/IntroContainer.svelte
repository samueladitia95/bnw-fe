<script lang="ts">
	import { inview } from 'svelte-inview';
	import { fly } from 'svelte/transition';

	export let imgCover: string =
		'https://dev2.samueladitia.com/api/files/bnizqfnu1wdkpi5/if4ins04ghpfdk9/pdpcover1_9i9mfZAaDl.jpg?token=';

	let isShow = false;

	const handleChange = ({ detail }: CustomEvent<ObserverEventDetails>) => {
		if (!isShow && detail.inView) isShow = true;
	};
</script>

<div
	class="bg-bwi-alabaster min-h-screen w-screen"
	use:inview={{
		rootMargin: '0px',
		unobserveOnEnter: true
	}}
	on:inview_change={handleChange}
>
	{#if isShow}
		<img
			transition:fly={{ y: 200, duration: 1000, delay: 500 }}
			src={imgCover}
			alt="Cover"
			class="h-screen w-screen object-cover"
		/>
	{/if}
</div>
