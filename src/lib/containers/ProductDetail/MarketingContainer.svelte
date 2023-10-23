<script lang="ts">
	import { inview } from 'svelte-inview';
	import { fade, fly } from 'svelte/transition';

	export let marketingDesc: string =
		'We provide marketing service for Easywalker such as manage Easywalker Indonesia Instagram account, Advertisement & provide Key Opinion leaders to increase brand awareness.';

	export let socialMediaImgs: string[] = [
		'https://dev2.samueladitia.com/api/files/bnizqfnu1wdkpi5/if4ins04ghpfdk9/social1_H03E6ALQhz.jpg?token=',
		'https://dev2.samueladitia.com/api/files/bnizqfnu1wdkpi5/if4ins04ghpfdk9/social2_so5FUecZ2k.jpg?token='
	];
	export let socialMediaDesc: string =
		'As the result for the instagram account of Easywalker Indonesia, there was an improvement of account reached from June 2023 to July 2023';

	export let advertisementVideoUrl: string =
		'https://www.youtube.com/embed/ozGC83qjkeg?si=deB_QX6RpxLAqTV5';
	export let advertisementDesc: string =
		'As the result for the instagram account of Easywalker Indonesia, there was an improvement of account reached from June 2023 to July 2023';

	export let opinionImgs: string[] = [
		'https://dev2.samueladitia.com/api/files/bnizqfnu1wdkpi5/if4ins04ghpfdk9/opinion1_rEYJE4z33E.jpg?token=',
		'https://dev2.samueladitia.com/api/files/bnizqfnu1wdkpi5/if4ins04ghpfdk9/opinion2_WmtnXiDLmx.jpg?token=',
		'https://dev2.samueladitia.com/api/files/bnizqfnu1wdkpi5/if4ins04ghpfdk9/opinion3_Rk94TOmbmv.jpg?token='
	];
	export let opinionDesc: string =
		'As the result for the instagram account of Easywalker Indonesia, there was an improvement of account reached from June 2023 to July 2023';

	let isShow: boolean = false;
	let isShow2: boolean = false;
	let isShow3: boolean = false;
	let isShow4: boolean = false;

	const handleChange = ({ detail }: CustomEvent<ObserverEventDetails>) => {
		if (!isShow && detail.inView) isShow = true;
	};
	const handleChange2 = ({ detail }: CustomEvent<ObserverEventDetails>) => {
		if (!isShow2 && detail.inView) isShow2 = true;
	};
	const handleChange3 = ({ detail }: CustomEvent<ObserverEventDetails>) => {
		if (!isShow3 && detail.inView) isShow3 = true;
	};
	const handleChange4 = ({ detail }: CustomEvent<ObserverEventDetails>) => {
		if (!isShow4 && detail.inView) isShow4 = true;
	};
</script>

<div
	use:inview={{
		rootMargin: '-100px',
		unobserveOnEnter: true
	}}
	on:inview_change={handleChange}
	class="text-bwi-eerie-black min-h-screen pt-14 bg-bwi-alabaster"
>
	<div class="container">
		<!-- Marketing Main -->
		<div class="flex flex-col justify-start items-start gap-8 lg:grid lg:grid-cols-2">
			{#if isShow}
				<div
					transition:fly={{ x: -200, duration: 1000, delay: 500 }}
					class="text-2xl border border-bwi-eerie-black rounded-full py-3 px-10 font-optima lg:max-w-[231px]"
				>
					The Marketing
				</div>
			{/if}

			{#if isShow}
				<div
					transition:fade={{ duration: 1000, delay: 1000 }}
					class="flex flex-col justify-start items-start gap-8"
				>
					<div class="font-oakes text-lg/loose md:text-xl/loose">{marketingDesc}</div>
				</div>
			{/if}
		</div>

		<!-- Social Media -->
		<div
			use:inview={{
				rootMargin: '0px',
				unobserveOnEnter: true
			}}
			on:inview_change={handleChange2}
			class="mt-8 lg:mt-20"
		>
			<div>
				{#if isShow2}
					<div
						transition:fly={{ x: -200, duration: 1000, delay: 500 }}
						class="flex flex-col gap-6 lg:flex-row"
					>
						{#each socialMediaImgs as image}
							<img
								src={image}
								alt="Social Media"
								class="max-h-[285px] md:max-h-[609px] lg:max-h-[531px] w-full object-cover"
							/>
						{/each}
					</div>
				{/if}
				{#if isShow2}
					<div transition:fade={{ duration: 1000, delay: 1000 }} class="mt-8 font-optima text-2xl">
						Social Media Instagram
					</div>
					<div
						transition:fade={{ duration: 1000, delay: 1500 }}
						class="mt-4 font-oakes text-lg/loose lg:max-w-5xl"
					>
						{socialMediaDesc}
					</div>
				{/if}
			</div>
		</div>

		<!-- Advertisement -->
		<div
			use:inview={{
				rootMargin: '0px',
				unobserveOnEnter: true
			}}
			on:inview_change={handleChange3}
			class="mt-8 lg:mt-20"
		>
			<div>
				{#if isShow3}
					<div transition:fly={{ x: -200, duration: 1000, delay: 500 }}>
						<iframe
							src={advertisementVideoUrl}
							title="YouTube video player"
							frameborder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
							allowfullscreen={false}
							class="w-full min-h-[183px] md:min-h-[393px] lg:min-h-[689px]"
						></iframe>
					</div>
				{/if}
				{#if isShow3}
					<div transition:fade={{ duration: 1000, delay: 1000 }} class="mt-8 font-optima text-2xl">
						Advertisement
					</div>
					<div
						transition:fade={{ duration: 1000, delay: 1500 }}
						class="mt-4 font-oakes text-lg/loose lg:max-w-5xl"
					>
						{advertisementDesc}
					</div>
				{/if}
			</div>
		</div>

		<!-- Key Opinion Leaders -->
		<div
			use:inview={{
				rootMargin: '0px',
				unobserveOnEnter: true
			}}
			on:inview_change={handleChange4}
			class="mt-8 lg:mt-20"
		>
			<div>
				{#if isShow4}
					<div
						transition:fly={{ x: -200, duration: 1000, delay: 500 }}
						class="flex flex-col gap-6 md:flex-row md:grid md:grid-cols-2 lg:grid-cols-3"
					>
						{#each opinionImgs as image}
							<img
								src={image}
								alt="Social Media"
								class="max-h-[441px] md:max-h-[456px] lg:max-h-[531px] w-full h-full object-cover"
							/>
						{/each}
					</div>
				{/if}
				{#if isShow4}
					<div transition:fade={{ duration: 1000, delay: 1000 }} class="mt-8 font-optima text-2xl">
						Key Opinion Leaders
					</div>
					<div
						transition:fade={{ duration: 1000, delay: 1500 }}
						class="mt-4 font-oakes text-lg/loose lg:max-w-5xl"
					>
						{opinionDesc}
					</div>
				{/if}
			</div>
		</div>
	</div>

	<!-- Further Information -->
	<div class="mt-8 md:mt-24 lg:mt-28 bg-bwi-bone">
		<div class="container py-28 md:py-32">
			<div class="text-center font-oakes text-lg/loose md:text-2xl/loose">
				For further information about the brand, simply just click download catalog below
			</div>
			<div class="w-full flex flex-col items-center mt-8">
				<button
					class="bg-bwi-lion text-center text-bwi-alabaster rounded-full py-3 px-6 font-oakes lg:text-xl"
					>Download Catalog</button
				>
			</div>
		</div>
	</div>
</div>
