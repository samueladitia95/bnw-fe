<script lang="ts">
	import TopbarPad from '$lib/components/TopbarPad.svelte';
	import { parseYoutubeLink } from '$lib/parseYoutubeLink';
	import { inview } from 'svelte-inview';
	import { fly } from 'svelte/transition';

	export let content: string;
	export let videoLink: string = 'https://youtu.be/2VmYJLQAsGs?si=NtGBZzcpuN-wSvLi';

	let isShow = false;
	const handleChange = ({ detail }: CustomEvent<ObserverEventDetails>) => {
		if (!isShow && detail.inView) isShow = true;
	};
</script>

<div
	id="about-us-container"
	class="min-h-screen w-full bg-bwi-alabaster text-bwi-eerie-black font-optima pb-32"
	use:inview={{
		rootMargin: '-100px',
		unobserveOnEnter: true
	}}
	on:inview_change={handleChange}
>
	<TopbarPad />
	<div class="container flex flex-col justify-start items-start">
		{#if isShow}
			<div
				transition:fly={{ y: -200, duration: 1000, delay: 500 }}
				class="text-lg mb-6 border border-bwi-eerie-black rounded-full py-3 px-6"
			>
				About Us
			</div>
			<div
				transition:fly={{ y: -200, duration: 1000, delay: 500 }}
				class="text-2xl font-normal mb-8 md:text-4xl leading-normal md:leading-relaxed"
			>
				{content}
			</div>
		{/if}
		{#if isShow}
			<div class="flex items-center min-w-full">
				<iframe
					src={`https://www.youtube.com/embed/${parseYoutubeLink(videoLink)}`}
					title="YouTube video player"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					allowfullscreen={false}
					class="w-full min-h-[183px] md:min-h-[393px] lg:min-h-[689px]"
				></iframe>
			</div>
		{/if}
	</div>
</div>
