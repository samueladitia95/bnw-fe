<script lang="ts">
	export let marketingDesc: string =
		'We provide marketing service for Easywalker such as manage Easywalker Indonesia Instagram account, Advertisement & provide Key Opinion leaders to increase brand awareness.';
	export let socialMediaImgs: string[] = [
		'https://dev2.samueladitia.com/api/files/bnizqfnu1wdkpi5/if4ins04ghpfdk9/social1_H03E6ALQhz.jpg?token=',
		'https://dev2.samueladitia.com/api/files/bnizqfnu1wdkpi5/if4ins04ghpfdk9/social2_so5FUecZ2k.jpg?token='
	];
	export let socialMediaDesc: string =
		'As the result for the instagram account of Easywalker Indonesia, there was an improvement of account reached from June 2023 to July 2023';
</script>

<div class="text-bwi-eerie-black min-h-screen pt-14 bg-bwi-alabaster">
	<div class="container">
		<!-- Marketing Main -->
		<div class="flex flex-col justify-start items-start gap-8 lg:grid lg:grid-cols-2">
			<div
				class="text-2xl border border-bwi-eerie-black rounded-full py-3 px-10 font-optima lg:max-w-[231px]"
			>
				The Marketing
			</div>
			<div class="flex flex-col justify-start items-start gap-8">
				<div class="font-oakes leading-loose md:text-xl md:leading-loose">{marketingDesc}</div>
			</div>
		</div>

		<!-- Social Media -->
		<div class="mt-8 lg:mt-20">
			<div>
				<div class="flex flex-col gap-6 lg:flex-row">
					{#each socialMediaImgs as image}
						<img
							src={image}
							alt="Social Media"
							class="max-h-[285px] md:max-h-[609px] lg:max-h-[531px] w-full object-cover"
						/>
					{/each}
				</div>
				<div class="mt-8 font-optima text-2xl">Social Media Instagram</div>
				<div class="mt-4 font-oakes leading-loose md:text-lg/loose lg:max-w-5xl">
					{socialMediaDesc}
				</div>
			</div>
		</div>
	</div>
</div>
