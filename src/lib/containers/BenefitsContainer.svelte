<script lang="ts">
	import ArrorIcon from '$lib/assets/svg/arror_icon.svelte';
	import MindIcon from '$lib/assets/svg/mind_icon.svelte';
	import TopbarPad from '$lib/components/TopbarPad.svelte';
	const benefits = [
		{
			title: 'Key Player',
			subTitle:
				'We pride ourselves to be the melting point for our partners to be the preferred brands for our customers.',
			imgUrl:
				'https://s3-alpha-sig.figma.com/img/8494/f5c5/70805deda024efb76f18298d5953843f?Expires=1693180800&Signature=HueOcNfsm9ARNzAaeVHMi~zWcRDfmlLgp5UZk5otVl3kHpY2BbLA0teR0KOePYsCk0YRVsaWi2d9tJv6mNcJs2OPn5k9EQBoFUeYx~tZLvz4zEhyQZ2IprMCRphl41jVrMoAa90yMHB3N7re~4J6X2XpTl~bxh-GjcSpNJzTwS2KEsl-5KBca~X18DyatLh-lhOjEJ1YpDaXX7q03N9X2vmYTLOE9xslLHMy4UJo1oDO3EZTyqp2NEw6ehydxgGFdlJcu5NumtqUbcwEs2ZTPZIkHbudbUaDTNY6uW8wJWfB0j88gkhlNjaQNA0q2m-AFfwD7IQDL6ehiVmu1rkOvw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
		},
		{
			title: 'Embrace Diversity',
			subTitle:
				'We pride ourselves to be the melting point for our partners to be the preferred brands for our customers.',
			imgUrl:
				'https://s3-alpha-sig.figma.com/img/7d50/2ac3/ec4d9891bff314ae85405e1a0999e37a?Expires=1693180800&Signature=Gsb8LDC~7ctJe5cR1L9J4AUx6x3M1aHK4ylQGzkMP4AsfAuwfLlHvSGMq9Zwi82dovF-YdDbDC9Q0Um7ZJ1c2wzQQirSfuwzLHr~bt5G75A~pEmoBMJV0m-2O2z9605DBiH3O5MCQtWewUQSQUrveMet9KrtGxyLodUXZo9varMler78~akIF7qGvVPrOGD~pS71gmviNWRWdBn8Dm6lF1wfdGrFHJdM8rRyLaf-vjFRO4T4TuYYunTQ5S-nbBrTrgHFPuZUcyPxvZC2XEWjOoFU4JKMOhAwTAWfYBXXtafxYtvsIPrNAskfrVNQhOtui3eabxpHvmKApug24rJnvg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
		},
		{
			title: 'Personal Approach',
			subTitle:
				'We pride ourselves to be the melting point for our partners to be the preferred brands for our customers.',
			imgUrl:
				'https://s3-alpha-sig.figma.com/img/1f59/7c22/8ad2d73be1fc235e624190f1e9f4d322?Expires=1693180800&Signature=YvpzBEUB1W~-2Gf3T2itoFjpxZW3iYp6aN-DO4n2mmdxa6NFfzVlohgf29VXPUxJCZEmhQhwqU~UuLUPymifowEbaUT5PCQlm540Ze1kohan17TKYEKKGDvZSRp3qiSTu5BC2kwkr4CzG0A2BpUoNsDg5ec4BdYnQVMGHk4PoqU0rQ1PFjCxOy8Y4JX6GryD-fiCRC-iIXXylNptGXoThWCFyMqPwFBPoGiF4-waZ4819MiAQG2sfHYXaD~YsOPYvFPkUSLvN7~4NhDASwybrU8mxr~cHp8K~UGOdi1Jn9oOXK-BOaWmt6OG2Z7YNoLGk12X2mp~P0dWBiSgDkpcOg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
		}
	];

	const itemNumber: number = 3;
	let benefitView: number = 0;

	function scrollIntoView(action: 'plus' | 'minus') {
		if (action === 'plus' && benefitView < itemNumber - 1) {
			benefitView = benefitView + 1;
		} else if (action === 'minus' && benefitView > 0) {
			benefitView = benefitView - 1;
		}

		let target: string = `#benefit-${benefitView}`;
		let targetImg: string = `#benefit-img-${benefitView}`;
		const el1 = document.querySelector(target);
		if (!el1) return;
		el1.scrollIntoView({
			behavior: 'smooth'
		});
		setTimeout(() => {
			const el2 = document.querySelector(targetImg);
			if (!el2) return;
			el2.scrollIntoView({
				behavior: 'auto'
			});
		}, 500);
	}
</script>

<div class="min-h-screen w-full bg-bwi-alabaster text-bwi-eerie-black font-optima pb-32">
	<TopbarPad />
	<div class="container flex flex-col justify-start items-start">
		<div class="text-lg md:text-2xl mb-6 border border-bwi-eerie-black rounded-full py-3 px-6">
			Benefits of choosing us
		</div>

		<div class="flex flex-col">
			<div>
				<div class="text-4xl md:text-5xl mb-6">Why go with us?</div>
				<div
					class="md:text-xl font-oakes font-normal mb-8 md:mb-16 leading-loose md:leading-loose md:max-w-xl"
				>
					To other companies, you might just be a portfolio. To us, a brand is an achievement, a
					family and a promise of success.
				</div>
			</div>
			<div class="flex flex-col items-start md:flex-row md:items-end md:gap-32">
				<div class="flex flex-col items-start">
					<div class="w=[66px] h-[78px]">
						<MindIcon height="100%" width="100%" />
					</div>

					<div class="flex overflow-hidden snap-x snap-mandatory">
						{#each benefits as benefit, index}
							<div class="min-w-full snap-center" id={`benefit-${index}`}>
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
						class="w-8 h-8 md:w-12 md:h-12 {benefitView === 2 ? 'text-bwi-eerie-black-23%' : ''}"
						on:click|preventDefault={() => scrollIntoView('plus')}
					>
						<ArrorIcon height="100%" width="100%" />
					</button>
				</div>
			</div>
		</div>

		<div class="w-full mt-5 relative">
			<hr class="absolute w-full border border-bwi-eerie-black-23%" />
			<hr
				class="absolute w-1/3 border border-bwi-eerie-black duration-500 transition-all translate-x-[{benefitView *
					100}%]"
			/>
		</div>

		<div class="flex overflow-hidden snap-x snap-mandatory">
			{#each benefits as benefit, index}
				<img
					src={benefit.imgUrl}
					alt="visions"
					class="rounded-2xl mt-6 w-full object-cover transition-all duration-500 ease-in-out"
					id={`benefit-img-${index}`}
				/>
			{/each}
		</div>
	</div>
</div>