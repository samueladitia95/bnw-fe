<script lang="ts">
	import ArrorIcon from '$lib/assets/svg/arror_icon.svelte';
	import MindIcon from '$lib/assets/svg/mind_icon.svelte';
	import TopbarPad from '$lib/components/TopbarPad.svelte';
	import { inview } from 'svelte-inview';
	import { fly } from 'svelte/transition';

	export let id: string;
	export let mainBenefit: string;
	export let benefits: any[];

	const itemNumber: number = 3;
	let benefitView: number = 0;
	let containerEl: Element;
	let containerImgEl: Element;
	let containerContent: Element;
	let isShow = false;

	function scrollIntoView(action: 'plus' | 'minus') {
		const maxWidth = containerEl.scrollWidth;
		const maxWidthImg = containerImgEl.scrollWidth;
		const maxWidthContent = containerImgEl.scrollWidth;

		if (action === 'plus' && benefitView < itemNumber - 1) {
			benefitView = benefitView + 1;
		} else if (action === 'minus' && benefitView > 0) {
			benefitView = benefitView - 1;
		}

		containerEl.scrollTo({ left: (maxWidth / 3) * benefitView, behavior: 'smooth' });
		containerImgEl.scrollTo({ left: (maxWidthImg / 3) * benefitView, behavior: 'smooth' });
		containerContent.scrollTo({ left: (maxWidthContent / 4) * benefitView, behavior: 'smooth' });
	}

	const handleChange = ({ detail }: CustomEvent<ObserverEventDetails>) => {
		if (!isShow && detail.inView) isShow = true;
	};
</script>

<div
	id="benefits-container"
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
				Benefits of Partnership
			</div>
		{/if}

		<div class="flex flex-col lg:flex-row lg:items-start lg:justify-between lg:w-full lg:gap-10">
			{#if isShow}
				<div transition:fly={{ y: -200, duration: 1000, delay: 500 }}>
					<div class="text-4xl md:text-5xl mb-6">Why go with us?</div>
					<div
						class="md:text-xl font-oakes font-normal mb-8 md:mb-16 lg:mb-0 leading-loose md:leading-loose md:max-w-xl"
					>
						{mainBenefit}
					</div>
				</div>
			{/if}
			{#if isShow}
				<div transition:fly={{ x: -100, duration: 1000, delay: 1000 }}>
					<div class="flex flex-start">
						<div class="w=[66px] h-[78px]">
							<MindIcon height="100%" width="100%" />
						</div>
					</div>

					<div
						class="flex flex-col items-start md:flex-row md:items-end md:gap-20 lg:max-w-2xl lg:gap-4 lg:items-top"
					>
						<div class="flex flex-col items-start">
							<div bind:this={containerEl} class="flex overflow-hidden snap-x snap-mandatory">
								{#each benefits as benefit}
									<div class="min-w-full snap-left">
										<div class="text-2xl md:text-3xl mt-5">{benefit.title}</div>
										<div class="font-oakes leading-loose mt-5 lg:hidden">{benefit.content}</div>
									</div>
								{/each}
							</div>
						</div>

						<div class="flex gap-3 mt-5">
							<button
								class="w-8 h-8 md:w-12 md:h-12 rotate-180 {benefitView === 0
									? 'text-bwi-eerie-black-23%'
									: ''}"
								on:click|preventDefault={() => scrollIntoView('minus')}
							>
								<ArrorIcon height="100%" width="100%" />
							</button>
							<button
								class="w-8 h-8 md:w-12 md:h-12 {benefitView === 2
									? 'text-bwi-eerie-black-23%'
									: ''}"
								on:click|preventDefault={() => scrollIntoView('plus')}
							>
								<ArrorIcon height="100%" width="100%" />
							</button>
						</div>
					</div>

					<div
						bind:this={containerContent}
						class="lg:flex overflow-hidden snap-x snap-mandatory hidden max-w-[636px]"
					>
						{#each benefits as benefit}
							<div class="min-w-full snap-center">
								<div class="font-oakes leading-loose mt-5">{benefit.content}</div>
							</div>
						{/each}
					</div>

					<div class="w-full mt-5 relative">
						<hr class="absolute w-full border border-bwi-eerie-black-23%" />
						<hr
							class="absolute w-1/3 border border-bwi-eerie-black duration-500 transition-all translate-x-[{benefitView *
								100}%]"
						/>
					</div>
				</div>
			{/if}
		</div>

		{#if isShow}
			<div
				transition:fly={{ y: 100, duration: 1000, delay: 1000 }}
				bind:this={containerImgEl}
				class="flex overflow-hidden snap-x snap-mandatory"
			>
				{#each benefits as benefit}
					<img
						src={`https://dev2.samueladitia.com/api/files/basic_informations/${id}/${benefit.imgUrl}`}
						alt="visions"
						class="rounded-2xl mt-6 lg:max-h-[525px] min-w-full object-cover transition-all duration-500 ease-in-out"
					/>
				{/each}
			</div>
		{/if}
	</div>
</div>
