<script lang="ts">
	import { inview } from 'svelte-inview';
	import { fade } from 'svelte/transition';

	const instaDummy: string[] = [
		'https://dev2.samueladitia.com/api/files/bnizqfnu1wdkpi5/if4ins04ghpfdk9/carousel_product_dummy_1_KdWrIdb42b.png',
		'https://dev2.samueladitia.com/api/files/bnizqfnu1wdkpi5/if4ins04ghpfdk9/carousel_product_dummy_2_xz0JmF6ZDG.png',
		'https://dev2.samueladitia.com/api/files/bnizqfnu1wdkpi5/if4ins04ghpfdk9/carousel_product_dummy_3_Te0NRN8RTe.png',
		'https://dev2.samueladitia.com/api/files/bnizqfnu1wdkpi5/if4ins04ghpfdk9/carousel_product_dummy_4_xmNNT3Accj.png',
		'https://dev2.samueladitia.com/api/files/bnizqfnu1wdkpi5/if4ins04ghpfdk9/carousel_product_dummy_5_pDdE2qGtvk.png'
	];

	let isShow: boolean = false;

	const handleChange = ({ detail }: CustomEvent<ObserverEventDetails>) => {
		if (!isShow && detail.inView) isShow = true;
	};
</script>

<div
	use:inview={{
		rootMargin: '-100px',
		unobserveOnEnter: true
	}}
	on:inview_change={handleChange}
	class="py-28 bg-bwi-alabaster"
>
	{#if isShow}
		<div transition:fade={{ duration: 1000, delay: 500 }} class="grid gap-6 grid-cols-2 md:hidden">
			{#each instaDummy.slice(0, 2) as image}
				<img src={image} alt="invite" class="object-cover rounded" />
			{/each}
		</div>
		<div
			transition:fade={{ duration: 1000, delay: 500 }}
			class="gap-6 grid-cols-3 hidden md:grid lg:hidden"
		>
			{#each instaDummy.slice(0, 3) as image}
				<img src={image} alt="invite" class="object-cover rounded" />
			{/each}
		</div>
		<div
			transition:fade={{ duration: 1000, delay: 500 }}
			class="xl:container gap-6 grid-cols-5 hidden lg:grid"
		>
			{#each instaDummy as image}
				<img src={image} alt="invite" class="object-cover rounded" />
			{/each}
		</div>
	{/if}
</div>
