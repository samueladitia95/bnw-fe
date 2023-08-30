<script lang="ts">
	import ChevronIcon from '$lib/assets/svg/chevron_icon.svelte';
	import VisionIcon from '$lib/assets/svg/vision_icon.svelte';
	import TopbarPad from '$lib/components/TopbarPad.svelte';
	import { inview } from 'svelte-inview';
	import { fly } from 'svelte/transition';

	let visions = [
		{
			title: 'Valuable Business Partnership',
			subTitle: 'Establish long-term, effective, and valuable business partnerships.',
			isOpen: false,
			imgUrl:
				'https://s3-alpha-sig.figma.com/img/be00/6d5b/14031bc64d4a9639beff43f25fbadf19?Expires=1693180800&Signature=FFRnsQwlKApWXIoA3Sjc5i5UbpZ4NPPK6-qAKRL-AhnqUqqUNLd674WP8sXwo-iWmdAveBKVmNHeBCMwG8OIz4~ZfrNkaAdWbbjLuUvunh2nYfNT8BXFAtyvQr1uU0zDHZDzIMcl8VnFt9qCStZgJp6JXz5~stnwFFkgeCFKowCC~jxnvaLJr542r2sVQMwWvYRFP4u7QKc-yaR~DgtBYHOPveSDHGVSTsDSBYw3nfizEkjNe4WM4oIrnGjowyPljdFvJris3TqBr5GdTQCnEKTG8XGomRC8nqiUnjziLcH5I5C8rr-cmW86hcjagnt0Z9Gc~YkZtBKdXXNbgw0u0Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
		},
		{
			title: 'Creating a unique marketing strategies',
			subTitle:
				'We want to implement a unique marketing strategies to strengthen our business partners’ brand awareness in Indonesia',
			isOpen: false,
			imgUrl:
				'https://s3-alpha-sig.figma.com/img/c16f/443f/08fa65166c6c2c853588ebb6456f2dc7?Expires=1693180800&Signature=q2g5t1Usr1N2326rNMVs5ajkcqBrybLxSsGU1oDpHQXAFCAsoLmoYvZQjTmEIH7Q1UD7WYugldC87SwD~uMkCy~3~dekN8Qffy59fHSow7pxBpoPvu2JJ6IPllI463IjQObLz3Kgr5VwAHzvCtRYvUoJlVPJdMN-W6UA4NOvKNXbOiQ6wX~n1nD3K5gtPkWN1nMKcMN1Dw0HE1vpW~1Dgaa~sMhWQx1CPmmWtCFw-Y954NHKcPghkodAt8IctWJDU1N7yprEVKp9fXoKnQR~ViDKhlsq6iq~7DNfRtH0F8Ut6DLno3Pv9Vy~zIs-03CAeRHc1QdjabuEvYDR0KBggQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
		},
		{
			title: 'Provide the inventive solutions',
			subTitle:
				'Support with a consistent, professional, and efficient solutions to our retailers.',
			isOpen: false,
			imgUrl:
				'https://s3-alpha-sig.figma.com/img/2a1f/8e4d/509fcaa48ae29269e186f444c7effe14?Expires=1693180800&Signature=LEso82keGslgq03MMQyvrpWY8RXEp7j7CAjH1ddrKwdZrDa6oUhkMJ5ym5PB5Mv9RPL-QJIveuqo-nLj92zfrv5EEH0FoJJzmQ9pvgcX85H0gmVSglC5jluDYVWijrpWDDigukcTepN6yNwBrwMsatcUu7wjtpU~Q3jPEYD6ntWT3DfclUMWMoOYSVpkE6gLgd-t1FDAXa7dfcwCoSh~ho9-OzlQuXU-Kq0XVtPtLNvJP-7Rk8J00uEN5PpcgfvCRnElqBOBdP~OnZMg2CYr-xErAVtumSGmM5UUMxJ80rBuqb-3G04UvoZ-6ziMqehg4i8UA4VeRzl-auBKg-Ykfw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
		}
	];

	export let mainVision: string;

	let containerEl: Element;
	let isShow = false;

	const openAccordion = (selectedIndex: number = 0, isOpen = false) => {
		const maxWidth = containerEl.scrollWidth;
		visions = visions.map((vision, visionIndex) => {
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
		<div class="text-lg mb-6 border border-bwi-eerie-black rounded-full py-3 px-6">
			Our Vision & Mission
		</div>
		{#if isShow}
			<div
				transition:fly={{ y: -200, duration: 1000, delay: 500 }}
				class="font-oakes font-normal mb-8 leading-loose text-justify md:text-2xl md:leading-loose lg:text-center"
			>
				{mainVision}
			</div>
		{/if}
		{#if isShow}
			<div
				transition:fly={{ y: 200, duration: 1000, delay: 1000 }}
				class="flex flex-col lg:flex-row lg:items-center lg:gap-20"
			>
				<div class="flex flex-col w-full gap-10">
					{#each visions as vision, index}
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
									<div class="w-8 h-8">
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
									class="mt-8 font-oakes font-normal text-xl leading-relaxed md:text-2xl md:leading-relaxed"
								>
									{vision.subTitle}
								</div>
							</div>
							<hr class="border border-bwi-eerie-black-23% mt-8" />
						</div>
					{/each}
				</div>
				<div bind:this={containerEl} class="flex overflow-hidden">
					{#each visions as vision}
						<img
							src={vision.imgUrl}
							alt="visions"
							class="rounded-2xl mt-16 max-h-[255px] md:max-h-[554px] min-w-full object-cover transition-all duration-500 ease-in-out"
						/>
					{/each}
				</div>
			</div>
		{/if}
	</div>
</div>
