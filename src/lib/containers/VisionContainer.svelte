<script lang="ts">
	import ChevronIcon from '$lib/assets/svg/chevron_icon.svelte';
	import VisionIcon from '$lib/assets/svg/vision_icon.svelte';
	import TopbarPad from '$lib/components/TopbarPad.svelte';
	import { pb } from '$lib/pocketbase';
	import type { ListResult, RecordModel } from 'pocketbase';
	import { inview } from 'svelte-inview';
	import { fly } from 'svelte/transition';

	export let mainVision: string;
	export let visions: ListResult<RecordModel>;

	let containerEl: Element;
	let isShow = false;

	const openAccordion = (selectedIndex: number = 0, isOpen = false) => {
		const maxWidth = containerEl.scrollWidth;
		visions.items = visions.items.map((vision, visionIndex) => {
			const isSelected = visionIndex === selectedIndex;
			if (isSelected) {
				containerEl.scrollTo({ left: (maxWidth / 3) * selectedIndex, behavior: 'smooth' });
				vision.isOpen = isOpen;
			} else {
				vision.isOpen = false;
			}
			return vision;
		});
	};

	const handleChange = ({ detail }: CustomEvent<ObserverEventDetails>) => {
		if (!isShow && detail.inView) isShow = true;
	};
</script>

<div
	class="min-h-screen w-full bg-bwi-bone text-bwi-eerie-black font-optima pb-32"
	use:inview={{
		rootMargin: '-100px',
		unobserveOnEnter: true
	}}
	on:inview_change={handleChange}
>
	<TopbarPad />
	<div class="container flex flex-col justify-start items-start lg:items-center">
		{#if isShow}
			<div
				transition:fly={{ y: -200, duration: 1000, delay: 500 }}
				class="text-lg mb-6 border border-bwi-eerie-black rounded-full py-3 px-6"
			>
				Our Vision & Mission
			</div>
			<div
				transition:fly={{ y: -200, duration: 1000, delay: 500 }}
				class="font-oakes font-normal mb-8 leading-loose text-justify md:text-2xl md:leading-loose lg:text-center"
			>
				{mainVision}
			</div>

			<div
				transition:fly={{ y: 200, duration: 1000, delay: 1000 }}
				class="flex flex-col lg:flex-row lg:items-center lg:gap-20"
			>
				<div class="flex flex-col w-full gap-10">
					{#each visions.items as vision, index}
						<div>
							<button
								class="flex justify-between items-center gap-3.5 w-full text-left"
								on:click={() => openAccordion(index, !vision.isOpen)}
							>
								<div
									class="flex gap-3.5 items-center transition-all duration-500 ease-in-out {vision.isOpen
										? 'text-bwi-lion'
										: ''}"
								>
									<div class="min-w-[32px] min-h-[32px] max-w-[32px] max-h-[32px]">
										<VisionIcon width="100%" height="100%" />
									</div>
									<div class="font-optima leading-relaxed text-xl md:text-2xl md:leading-relaxed">
										{vision.title}
									</div>
								</div>
								<div
									class="w-6 h-6 transition-all duration-500 ease-in-out {vision.isOpen
										? 'rotate-180'
										: 'rotate-0'}"
								>
									<ChevronIcon width="100%" height="100%" />
								</div>
							</button>
							<div
								class="overflow-hidden transition-max-height duration-500 ease-in-out {vision.isOpen
									? 'max-h-96'
									: 'max-h-0'}"
							>
								<div
									class="mt-8 font-oakes text-lg lg:text-xl leading-loose md:text-2xl md:leading-loose lg:leading-loose"
								>
									{vision.content}
								</div>
							</div>
							<hr class="border border-bwi-eerie-black-23% mt-8" />
						</div>
					{/each}
				</div>
				<div bind:this={containerEl} class="flex overflow-hidden">
					{#each visions.items as vision}
						<img
							src={pb.files.getUrl(vision, vision.img)}
							alt="visions"
							class="rounded-2xl mt-16 max-h-[255px] md:max-h-[554px] min-w-full object-cover transition-all duration-500 ease-in-out"
						/>
					{/each}
				</div>
			</div>
		{/if}
	</div>
</div>
