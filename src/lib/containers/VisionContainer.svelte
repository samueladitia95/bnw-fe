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
				'https://s3-alpha-sig.figma.com/img/be00/6d5b/14031bc64d4a9639beff43f25fbadf19?Expires=1694390400&Signature=R1PlwRjPWuOjUH9FOwDYATAMKrKfrxeua6CY5sOFdsESMxnYgvpnn8hQ1CCGz8EnCGj1PA~rDNK0BF2DYa622-3ff5KpsBc6GsWWIa5r3I~Dhk7DM7uSMBdxpZwtPQV38GHD5Nfe98eOFyUsCBXxqft~G01CYSvmauEl7LFstbF661Cxe6iZEohzfgxegxzo-OYXd9wOrhi23hrsu27s7aZ~ZjYQnxtCuqAfyRpDavBKZgagjyxK7gSZaUSntw2wYQoMpf8lArGS5oN5ZEc0UGhfUNWNXDWbeu2wdphKvHsxe1oUsf7IoBuVkhpMtphFo9HOg6L6zIM4KHqfTPe4DA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
		},
		{
			title: 'Creating a unique marketing strategies',
			subTitle:
				'We want to implement a unique marketing strategies to strengthen our business partners’ brand awareness in Indonesia',
			isOpen: false,
			imgUrl:
				'https://s3-alpha-sig.figma.com/img/be00/6d5b/14031bc64d4a9639beff43f25fbadf19?Expires=1694390400&Signature=R1PlwRjPWuOjUH9FOwDYATAMKrKfrxeua6CY5sOFdsESMxnYgvpnn8hQ1CCGz8EnCGj1PA~rDNK0BF2DYa622-3ff5KpsBc6GsWWIa5r3I~Dhk7DM7uSMBdxpZwtPQV38GHD5Nfe98eOFyUsCBXxqft~G01CYSvmauEl7LFstbF661Cxe6iZEohzfgxegxzo-OYXd9wOrhi23hrsu27s7aZ~ZjYQnxtCuqAfyRpDavBKZgagjyxK7gSZaUSntw2wYQoMpf8lArGS5oN5ZEc0UGhfUNWNXDWbeu2wdphKvHsxe1oUsf7IoBuVkhpMtphFo9HOg6L6zIM4KHqfTPe4DA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
		},
		{
			title: 'Provide the inventive solutions',
			subTitle:
				'Support with a consistent, professional, and efficient solutions to our retailers.',
			isOpen: false,
			imgUrl:
				'https://s3-alpha-sig.figma.com/img/be00/6d5b/14031bc64d4a9639beff43f25fbadf19?Expires=1694390400&Signature=R1PlwRjPWuOjUH9FOwDYATAMKrKfrxeua6CY5sOFdsESMxnYgvpnn8hQ1CCGz8EnCGj1PA~rDNK0BF2DYa622-3ff5KpsBc6GsWWIa5r3I~Dhk7DM7uSMBdxpZwtPQV38GHD5Nfe98eOFyUsCBXxqft~G01CYSvmauEl7LFstbF661Cxe6iZEohzfgxegxzo-OYXd9wOrhi23hrsu27s7aZ~ZjYQnxtCuqAfyRpDavBKZgagjyxK7gSZaUSntw2wYQoMpf8lArGS5oN5ZEc0UGhfUNWNXDWbeu2wdphKvHsxe1oUsf7IoBuVkhpMtphFo9HOg6L6zIM4KHqfTPe4DA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
		}
	];

	export let mainVision: string =
		'To become the number one high quality baby products distributions company that provides locally fitted marketing and branding strategy to suit Indonesian diverse culture.';

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
