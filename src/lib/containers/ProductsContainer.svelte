<script lang="ts">
	import TopbarPad from '$lib/components/TopbarPad.svelte';
	import { pb } from '$lib/pocketbase';
	import type { Record } from 'pocketbase';
	import { inview } from 'svelte-inview';
	import { fly } from 'svelte/transition';

	// const products = [
	// 	{
	// 		name: 'Easywalker',
	// 		description:
	// 			'a Dutch stroller brand, aims to simplify parent-child mobility. Affordable,  smooth-riding, and visually appealing strollers inspire new bonds and cherished memories.',
	// 		link: 'https://www.google.com',
	// 		imgUrl:
	// 			'https://s3-alpha-sig.figma.com/img/429d/edf1/f7525742712823471564d37610c171bc?Expires=1693180800&Signature=JnkAKDXf8MiPlgtQzzbkDVX7Vheg1lhr5qzQjTzH~EV82XyYUQ3cQHu6P5N0SSP7rYtsYg6Hz67N55U4pz9z~nCeoVxnyl5vwXyqHJZIV8YbdTBeu~J3YvziPz-Y7nFKfZ-agTfc3aoGCIm7aKbRZ5-MUsEmiMmk1Ux0LPWna-3yh~pZKZo0qZHaXUKUy5zUNZSHtdTS-pRAFs5rUjiv2~eTHqmHnkXV3dB9AwibWI1RgSbdv7G-3tthm0Z5nE3idgo2Zlw27tU4tj-1rvmC2kwEyn7-XWbn7HAJOqhqm62J5OIGW5dmLANemda0UYR-Au0UNvZQ8pezbWTEnC1eSw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
	// 	},
	// 	{
	// 		name: 'Pacapod',
	// 		description: 'Known for it’s innovate diaper bags and baby travel accessories',
	// 		link: 'https://www.google.com',
	// 		imgUrl:
	// 			'https://s3-alpha-sig.figma.com/img/429d/edf1/f7525742712823471564d37610c171bc?Expires=1693180800&Signature=JnkAKDXf8MiPlgtQzzbkDVX7Vheg1lhr5qzQjTzH~EV82XyYUQ3cQHu6P5N0SSP7rYtsYg6Hz67N55U4pz9z~nCeoVxnyl5vwXyqHJZIV8YbdTBeu~J3YvziPz-Y7nFKfZ-agTfc3aoGCIm7aKbRZ5-MUsEmiMmk1Ux0LPWna-3yh~pZKZo0qZHaXUKUy5zUNZSHtdTS-pRAFs5rUjiv2~eTHqmHnkXV3dB9AwibWI1RgSbdv7G-3tthm0Z5nE3idgo2Zlw27tU4tj-1rvmC2kwEyn7-XWbn7HAJOqhqm62J5OIGW5dmLANemda0UYR-Au0UNvZQ8pezbWTEnC1eSw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
	// 	},
	// 	{
	// 		name: 'B.Box',
	// 		description:
	// 			'An Australian-based brand known for it’s innovative and practical baby products and accessories. Their range includes baby bottles, sippy cups, snack container, diaper wallets, and more.',
	// 		link: 'https://www.google.com',
	// 		imgUrl:
	// 			'https://s3-alpha-sig.figma.com/img/228c/a0bc/d9c9c5eaf00a89f09395d5b154298228?Expires=1693180800&Signature=D-KspcPKuHVkokK0hopvlwWOkfZNNGL0~HoU8Y5AZ~et9QW2Tt0Z6ysmed21x-Z3GeSI8wAo7Eq8vX9K2l~Ct4D~Nu2QPP-r0TnqJ1AmWZs2zQn5MgndMgl9Eb9j0VBcEDf5hcr~HaWmfJ8mxijbS9GC8T3IRHQ1RPo9mIGfrPzlMhk3Fb2p402UmUpE98rYAKQw5Hj5c0XZC-WsKD31hh8jsv51tFY6bN2dbUbFxfeLkTK~~~j4nbhEsSskS8D07Jd5yTNFRGaLvRX8q6V5-gfznKcg4KdmpWuoPhnx88N5iCt3vqEDTr5LdF49cVBQvGQRPRIZarMFkr5xFfSzcQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
	// 	}
	// ];
	export let products: Record[] = [];
	let isShow: boolean = false;

	const handleChange = ({ detail }: CustomEvent<ObserverEventDetails>) => {
		if (!isShow && detail.inView) isShow = true;
	};
</script>

<div
	id="products-container"
	class="min-h-screen w-full bg-bwi-alabaster text-bwi-eerie-black font-optima pb-32"
	use:inview={{
		rootMargin: '-100px',
		unobserveOnEnter: true
	}}
	on:inview_change={handleChange}
>
	<TopbarPad />
	<div class="container">
		<div class="flex flex-col">
			{#each products as product, index}
				{#if isShow}
					<div
						transition:fly={{
							x: -100,
							duration: 1000,
							delay: 500 * (index + 1)
						}}
						class="flex flex-col bg-bwi-bone text-bwi-eerie-black {index % 2 === 0
							? 'lg:flex-row-reverse'
							: 'lg:flex-row'}"
					>
						<div
							class="min-w-full max-h-[302px] md:max-h-[664px] lg:max-w-[50%] lg:min-w-[50%] overflow-hidden"
						>
							<img
								src={pb.files.getUrl(product, product.img)}
								alt="product"
								class=" hover:scale-125 transition-transform duration-200 ease-in-out cursor-pointer"
							/>
						</div>
						<div
							class="flex flex-col gap-5 p-5 items-start lg:max-w-[50%] lg:min-w-[50%] lg:justify-between"
						>
							<div class="flex flex-col gap-5">
								<div class="font-optima text-3xl md:text-5xl lg:text-4xl">{product.name}</div>
								<div
									class="font-oakes text-sm md:text-xl md:leading-loose leading-loose min-h-[131px] md:min-h-[471px] md:max-w-[500px] lg:min-h-0"
								>
									{product.description}
								</div>
							</div>
							<a
								class="font-oakes text-center border-2 border-bwi-eerie-black rounded-full px-5 py-3 flex gap-4"
								href={product.insta_link}
								target="_blank"
							>
								<span class="md:text-xl">View Instagram</span>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 25"
									fill="none"
								>
									<path
										d="M12 4.5L10.59 5.91L16.17 11.5H4V13.5H16.17L10.59 19.09L12 20.5L20 12.5L12 4.5Z"
										fill="currentColor"
									/>
								</svg>
							</a>
						</div>
					</div>
				{/if}
			{/each}
		</div>
	</div>
</div>
