<script lang="ts">
	import ArrorIcon from '$lib/assets/svg/arror_icon.svelte';
	import MindIcon from '$lib/assets/svg/mind_icon.svelte';
	import TopbarPad from '$lib/components/TopbarPad.svelte';
	import { inview } from 'svelte-inview';
	import { fly } from 'svelte/transition';

	const benefits = [
		{
			title: 'Key Player',
			subTitle:
				'We pride ourselves to be the melting point for our partners to be the preferred brands for our customers.',
			imgUrl:
				'https://s3-alpha-sig.figma.com/img/8494/f5c5/70805deda024efb76f18298d5953843f?Expires=1694390400&Signature=QRjdYStNomNt0a22mqcMZ9X60j7jvq7FS~dEUEZiPOi2CtZ4zUKmbv3SNRYPOvkRzAxssUI7N3~ga0J2OP34Mb50DDyZrObQvnnNZVEBYZGuuonq1cnLMowDbr9kK1n94mJSfGxe16xl5-1O8rhwhmTOXD~kJHXrSvsCVZb5PvD6emM2YicY21lcoWYRkR4qqeNWVIRkbXHVeeE0Z8Zy7vOehtFaCfte3rX5GBFZoyxRSeA8T94rfy8USqcK1ulwonkDkJq6bJcvyw3FDHtwDsPQKASQRJ0qWFPGQoafMzsQlPxWU61q4vQxKLDGvxR~NnWWk1h1wo22usDw8qYqbw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
		},
		{
			title: 'Embrace Diversity',
			subTitle:
				'We pride ourselves to be the melting point for our partners to be the preferred brands for our customers.',
			imgUrl:
				'https://s3-alpha-sig.figma.com/img/7d50/2ac3/ec4d9891bff314ae85405e1a0999e37a?Expires=1694390400&Signature=gwI2xBXuHddpwCW68utbhJyclwH2diw5h2v6~7L3pC5mHZZjxTl531sGbDwkzSjY6skumJtr2gRLlNgh~s0vrTnszxSg7M~hIyy~cQjI16dcDnnCCunrLhINA1LVKsBe6TZlqlfqQ3dLCVnL2JM2fPVWL4MxSAozHsIlkrAlrBSquKcj5cECytA1GMr6VZo7HozBs4KpQC4STnOepdKs~pRogCEdsXmW2eAl-qU69bzOoKaZvLvX51czCUqpwUtK6ZZVdTS8886h5qSj3nn3eQWL745sd4NVGRQ0U8t1WLC3HleyCoVxxDW~ennM71G4sD0aF1ZRP6prcHcu8THR~g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
		},
		{
			title: 'Personal Approach',
			subTitle:
				'We pride ourselves to be the melting point for our partners to be the preferred brands for our customers.',
			imgUrl:
				'https://s3-alpha-sig.figma.com/img/1f59/7c22/8ad2d73be1fc235e624190f1e9f4d322?Expires=1694390400&Signature=nMuWD~oOyexuT5y86hhKtrGbcbIVHc5RpL0ZDQQ5OQLbW-vhuAOC6IkR-~UstVGQQCv7bOxA8aHMTWbnkhf~gBO0f8rQY~g2pQSO0t~KZaLdEbu9saUIU4XViEUqOSGWAlMDdtmJsChhkuzSW94M7Wu7zMXRCFex0jk7YjtZxdFtFPEpAPBuBgfXR6ONpetanPPr8dzM-uMMSfsQqyeCANAjKquwUoTu2dYbe8-oBYO1Hyr7Aw0BeoTisUoY3z29nhGmhsEevby0c7NtrZGzCWTdKzIzkNZNTP-S8iuwZ-Q3Nl8PjSC5Q6yVGFD7HmrmBsWvHNylL-P-Aab0lE5m4g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
		}
	];

	export let mainBenefits: string =
		'To other companies, you might just be a portfolio. To us, a brand is an achievement, a family and a promise of success.';

	const itemNumber: number = 3;
	let benefitView: number = 0;
	let containerEl: Element;
	let containerImgEl: Element;
	let isShow = false;

	function scrollIntoView(action: 'plus' | 'minus') {
		const maxWidth = containerEl.scrollWidth;
		const maxWidthImg = containerImgEl.scrollWidth;

		if (action === 'plus' && benefitView < itemNumber - 1) {
			benefitView = benefitView + 1;
		} else if (action === 'minus' && benefitView > 0) {
			benefitView = benefitView - 1;
		}

		containerEl.scrollTo({ left: (maxWidth / 3) * benefitView, behavior: 'smooth' });
		containerImgEl.scrollTo({ left: (maxWidthImg / 3) * benefitView, behavior: 'smooth' });
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
		<div class="text-lg mb-6 border border-bwi-eerie-black rounded-full py-3 px-6">
			Benefits of Partnership
		</div>

		<div class="flex flex-col lg:flex-row lg:items-start lg:justify-between lg:w-full lg:gap-10">
			{#if isShow}
				<div transition:fly={{ y: -200, duration: 1000, delay: 500 }}>
					<div class="text-4xl md:text-5xl mb-6">Why go with us?</div>
					<div
						class="md:text-xl font-oakes font-normal mb-8 md:mb-16 lg:mb-0 leading-loose md:leading-loose md:max-w-xl"
					>
						{mainBenefits}
					</div>
				</div>
			{/if}
			{#if isShow}
				<div transition:fly={{ x: -100, duration: 1000, delay: 1000 }}>
					<div
						class="flex flex-col items-start md:flex-row md:items-end md:gap-32 lg:max-w-2xl lg:gap-4"
					>
						<div class="flex flex-col items-start">
							<div class="w=[66px] h-[78px]">
								<MindIcon height="100%" width="100%" />
							</div>

							<div bind:this={containerEl} class="flex overflow-hidden snap-x snap-mandatory">
								{#each benefits as benefit, index}
									<div class="min-w-full snap-center">
										<div class="text-2xl md:text-3xl mt-5">{benefit.title}</div>
										<div class="font-oakes leading-loose mt-5">{benefit.subTitle}</div>
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
						src={benefit.imgUrl}
						alt="visions"
						class="rounded-2xl mt-6 lg:max-h-[525px] min-w-full object-cover transition-all duration-500 ease-in-out"
					/>
				{/each}
			</div>
		{/if}
	</div>
</div>
