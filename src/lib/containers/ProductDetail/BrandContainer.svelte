<script lang="ts">
	import '@splidejs/svelte-splide/css';
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
	import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';

	export let title: string = 'It’s about the journey, right? Easywalker';
	export let desc: string =
		'A Dutch stroller brand which was founded in 1989 whose mission is to make it easier for parents and their children to move around together. Easywalker always strive to design affordable strollers that ride smoothly which are also simple to use and pleasing to the eye. In hope to encourage parents to go out into the world and rediscover it through the eyes of their children; to create a new bond and a lifetime of memories. Because Easywalker believes ultimately it is not the things that you own, but it is the moments that you experience together that matter the most.';
	export let carauselImages: string[] = [
		'https://dev2.samueladitia.com/api/files/bnizqfnu1wdkpi5/if4ins04ghpfdk9/brand1_wK8wNAk9Hv.jpg?token=',
		'https://dev2.samueladitia.com/api/files/bnizqfnu1wdkpi5/if4ins04ghpfdk9/brand2_vdgPAIbCzW.jpg?token=',
		'https://dev2.samueladitia.com/api/files/bnizqfnu1wdkpi5/if4ins04ghpfdk9/brand3_LhRrfuc2zx.jpg?token=',
		'https://dev2.samueladitia.com/api/files/bnizqfnu1wdkpi5/if4ins04ghpfdk9/brand4_EIM8ouVVlQ.png?token=',
		'https://dev2.samueladitia.com/api/files/bnizqfnu1wdkpi5/if4ins04ghpfdk9/brand5_lHcUHDUoq4.jpg?token=',
		'https://dev2.samueladitia.com/api/files/bnizqfnu1wdkpi5/if4ins04ghpfdk9/brand6_stKVawmFbf.png?token='
	];
</script>

<div class="text-bwi-eerie-black min-h-screen pt-14 bg-bwi-alabaster">
	<div class="container">
		<!-- TITLE + DESCRIPTION -->
		<div class="flex flex-col justify-start items-start gap-8 lg:grid lg:grid-cols-2">
			<div
				class="text-2xl border border-bwi-eerie-black rounded-full py-3 px-10 font-optima lg:max-w-[188px]"
			>
				The Brand
			</div>
			<div class="flex flex-col justify-start items-start gap-8">
				<div class="font-optima text-3xl md:text-5xl">{title}</div>
				<div class="font-oakes leading-loose md:text-xl md:leading-loose">{desc}</div>
			</div>
		</div>
	</div>
	<!-- Carausel -->
	<div class="pt-8 md:pt-20 lg:pt-28">
		<Splide
			aria-label="invite countdown carausel"
			extensions={{ AutoScroll }}
			options={{
				arrows: false,
				pagination: false,
				type: 'loop',
				gap: '24px',
				autoScroll: {
					rewind: true
				},
				autoWidth: true
			}}
		>
			{#each carauselImages as image}
				<SplideSlide>
					<img src={image} alt="invite" class="object-cover w-[306px] max-h-[383px] rounded" />
				</SplideSlide>
			{/each}
		</Splide>
	</div>
	<div class="bg-bwi-bone">
		<div
			class="container font-optima text-4xl leading-normal md:text-5xl md:leading-normal lg:text-6xl lg:leading-normal text-center text-bwi-chamoisee py-36 md:pt-40 md:pb-48"
		>
			Find your perfect companion
		</div>
	</div>
</div>
