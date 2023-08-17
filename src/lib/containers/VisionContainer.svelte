<script>
	import ChevronIcon from '$lib/assets/svg/chevron_icon.svelte';
	import VisionIcon from '$lib/assets/svg/vision_icon.svelte';
	import TopbarPad from '$lib/components/TopbarPad.svelte';

	const visions = [
		{
			title: 'Valuable Business Partnership',
			subTitle: 'Establish long-term, effective, and valuable business partnerships.'
		},
		{
			title: 'Creating a unique marketing strategies',
			subTitle:
				'We want to implement a unique marketing strategies to strengthen our business partners’ brand awareness in Indonesia'
		},
		{
			title: 'Provide the inventive solutions',
			subTitle: 'Support with a consistent, professional, and efficient solutions to our retailers.'
		}
	];
</script>

<div class="min-h-screen w-full bg-bwi-bone text-bwi-eerie-black font-optima pb-32">
	<TopbarPad />
	<div class="container flex flex-col justify-start items-start">
		<div class="text-lg mb-6 border border-bwi-eerie-black rounded-full py-3 px-6">
			Our Vision & Mission
		</div>
		<div class="font-oakes font-normal mb-8 leading-loose text-justify">
			To become the number one high quality baby products distributions company that provides
			locally fitted marketing and branding strategy to suit Indonesian diverse culture.
		</div>
		<div class="flex flex-col w-full gap-10">
			{#each visions as vision}
				<div>
					<div class="flex justify-between items-center gap-3.5">
						<div class="w-8 h-8">
							<VisionIcon width="100%" height="100%" />
						</div>
						<div class="font-optima leading-relaxed text-xl">
							{vision.title}
						</div>
						<div class="w-6 h-6">
							<ChevronIcon width="100%" height="100%" />
						</div>
					</div>
					<hr class="border border-bwi-eerie-black-23% mt-8" />
				</div>
			{/each}
		</div>
		<img
			src="https://s3-alpha-sig.figma.com/img/be00/6d5b/14031bc64d4a9639beff43f25fbadf19?Expires=1693180800&Signature=FFRnsQwlKApWXIoA3Sjc5i5UbpZ4NPPK6-qAKRL-AhnqUqqUNLd674WP8sXwo-iWmdAveBKVmNHeBCMwG8OIz4~ZfrNkaAdWbbjLuUvunh2nYfNT8BXFAtyvQr1uU0zDHZDzIMcl8VnFt9qCStZgJp6JXz5~stnwFFkgeCFKowCC~jxnvaLJr542r2sVQMwWvYRFP4u7QKc-yaR~DgtBYHOPveSDHGVSTsDSBYw3nfizEkjNe4WM4oIrnGjowyPljdFvJris3TqBr5GdTQCnEKTG8XGomRC8nqiUnjziLcH5I5C8rr-cmW86hcjagnt0Z9Gc~YkZtBKdXXNbgw0u0Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
			alt="visions"
			class="rounded-2xl mt-16 max-h-[255px] w-full object-cover"
		/>
	</div>
</div>
