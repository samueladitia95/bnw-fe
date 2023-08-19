<script lang="ts">
	import ArrorIcon from '$lib/assets/svg/arror_icon.svelte';
	import TopbarPad from '$lib/components/TopbarPad.svelte';
	import { afterUpdate } from 'svelte';

	const events = [
		{
			name: 'Baby Products Exhibition',
			date: '12 - 17 July 2023',
			location: 'Jakarta International Expo Hall D no 24',
			imgUrl:
				'https://s3-alpha-sig.figma.com/img/9565/4573/906cf8f9affd18c6787bd2c583a054a8?Expires=1693180800&Signature=MJy3TgaOK9qZ4KXS337x53obADeXIImp8NbbWS4gjQyDHu5OLD8ZUjsNhFwg76cJMhDJq8S6VhvUyWv-kagUTHOxVclVYk5V0JUR2dH~fSHuJqm5kVYcGPDMBkvUTqwx3Q4CG1stzn~MBUo0KwiCecgeL6rekvsnGavOcm85MZYhVLnD7Qk4EM2hl~gVSjyGn-4~RU2~tUamTz6lE1mBAkdY-ucZFvfTnd8uxl9UxOIQA~B-0usX9s22tDvlXF7hkW1JxhA~5Sst5h0IOgmXeb76ULCSEhXqM1q5cuKW4b8vd76AzMnKn-xz2ZmOcoDUMe3NNgg5x11Z15CcQWTeiA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
			description:
				'CKE is the flagship baby products fair in Asia, where overseas buyers can meet and source directly from the largest number of Chinese manufacturers. The suppliers are from main production regions of China and specialize in a wide variety of products.',
			link: 'www.google.com'
		},
		{
			name: 'Baby Products Exhibition',
			date: '12 - 17 July 2023',
			location: 'Jakarta International Expo Hall D no 24',
			imgUrl:
				'https://s3-alpha-sig.figma.com/img/ffb9/6ff1/f6e8173c8cbdbf3b847469dbe9bdd842?Expires=1693180800&Signature=bs55nF8p1DhzapxSK2xsW7jQCuC7OAUUmmwDiHlNCOsbDshguivFacItHFRFt1twaagS-XRD~mObcv9gr4JVCgFyIu3oNIjiWEYTCG4VfVvBZEPXJaO3nUBkVBbexzv1~0HtFAuhMEyOpr9tE57gMWdxQS78tnonYLsvyfQfnSGMFIZOljshi8g9x8hLXlCHsjB07agT6~-ebY-yj47QwntKLIkXpOplwtiotVrLZpPm7q6S4OQidW4J~sFjYBX~KsM4RKKPaCj4or8oGlIsrfgAzMxM6EFU3xADkDkSlMYtzmSXAGkRzkgffX2iiwyF1dzqtJJlzJYPPPHzivxD7g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
			description:
				'CKE is the flagship baby products fair in Asia, where overseas buyers can meet and source directly from the largest number of Chinese manufacturers. The suppliers are from main production regions of China and specialize in a wide variety of products.',
			link: 'www.google.com'
		},
		{
			name: 'Baby Products Exhibition',
			date: '12 - 17 July 2023',
			location: 'Jakarta International Expo Hall D no 24',
			imgUrl:
				'https://s3-alpha-sig.figma.com/img/9565/4573/906cf8f9affd18c6787bd2c583a054a8?Expires=1693180800&Signature=MJy3TgaOK9qZ4KXS337x53obADeXIImp8NbbWS4gjQyDHu5OLD8ZUjsNhFwg76cJMhDJq8S6VhvUyWv-kagUTHOxVclVYk5V0JUR2dH~fSHuJqm5kVYcGPDMBkvUTqwx3Q4CG1stzn~MBUo0KwiCecgeL6rekvsnGavOcm85MZYhVLnD7Qk4EM2hl~gVSjyGn-4~RU2~tUamTz6lE1mBAkdY-ucZFvfTnd8uxl9UxOIQA~B-0usX9s22tDvlXF7hkW1JxhA~5Sst5h0IOgmXeb76ULCSEhXqM1q5cuKW4b8vd76AzMnKn-xz2ZmOcoDUMe3NNgg5x11Z15CcQWTeiA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
			description:
				'CKE is the flagship baby products fair in Asia, where overseas buyers can meet and source directly from the largest number of Chinese manufacturers. The suppliers are from main production regions of China and specialize in a wide variety of products.',
			link: 'www.google.com'
		},
		{
			name: 'Baby Products Exhibition',
			date: '12 - 17 July 2023',
			location: 'Jakarta International Expo Hall D no 24',
			imgUrl:
				'https://s3-alpha-sig.figma.com/img/02b1/ee1a/e70e11cfea7968800eeaa2982ff7faab?Expires=1693180800&Signature=p2dMfeuvFHMGMAb2EIpBE3heTaQrPf~IZBMo-HyQHAW~47vjvR51aEBL9vq4hUC9CKttkmdFzqsDN4feCdFkCc3QQBMB2nBMYZUMI6zGfpAs5eqtEKGC3N38~scapbOH3bGWtPza5cY2VHJhZElMDz5HgmEiZtI56MPE61qLu~AY8mkVS5EOAPPJwh8J5rsbMH0BXhsfHibjEC1JbyZjrRy61pw0486My~nHL~NDb~yKVSRqCJO8aSfERPQ-r2l8raHyxD-dMBlRijGe6ShZmwcC6xNI0LhMV6TL8e3gT6IphmqF0lDIhKEUOMQFlrBjkXchw3i10zUp5LblaUvNTQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
			description:
				'CKE is the flagship baby products fair in Asia, where overseas buyers can meet and source directly from the largest number of Chinese manufacturers. The suppliers are from main production regions of China and specialize in a wide variety of products.',
			link: 'www.google.com'
		},
		{
			name: 'Baby Products Exhibition',
			date: '12 - 17 July 2023',
			location: 'Jakarta International Expo Hall D no 24',
			imgUrl:
				'https://s3-alpha-sig.figma.com/img/ffb9/6ff1/f6e8173c8cbdbf3b847469dbe9bdd842?Expires=1693180800&Signature=bs55nF8p1DhzapxSK2xsW7jQCuC7OAUUmmwDiHlNCOsbDshguivFacItHFRFt1twaagS-XRD~mObcv9gr4JVCgFyIu3oNIjiWEYTCG4VfVvBZEPXJaO3nUBkVBbexzv1~0HtFAuhMEyOpr9tE57gMWdxQS78tnonYLsvyfQfnSGMFIZOljshi8g9x8hLXlCHsjB07agT6~-ebY-yj47QwntKLIkXpOplwtiotVrLZpPm7q6S4OQidW4J~sFjYBX~KsM4RKKPaCj4or8oGlIsrfgAzMxM6EFU3xADkDkSlMYtzmSXAGkRzkgffX2iiwyF1dzqtJJlzJYPPPHzivxD7g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
			description:
				'CKE is the flagship baby products fair in Asia, where overseas buyers can meet and source directly from the largest number of Chinese manufacturers. The suppliers are from main production regions of China and specialize in a wide variety of products.',
			link: 'www.google.com'
		}
	];

	const itemNumber: number = events.length;
	let viewItem: number = 0;
	let containerEl: Element;

	function scrollIntoView(action: 'plus' | 'minus') {
		const maxWidth = containerEl.scrollWidth;

		if (action === 'plus' && viewItem < itemNumber - 1) {
			viewItem = viewItem + 1;
		} else if (action === 'minus' && viewItem > 0) {
			viewItem = viewItem - 1;
		}

		containerEl.scrollTo({ left: (maxWidth / itemNumber) * viewItem, behavior: 'smooth' });
	}
</script>

<div class="min-h-screen w-full bg-bwi-alabaster text-bwi-eerie-black font-optima pb-32">
	<TopbarPad />
	<div class="flex flex-col justify-start items-start">
		<div class="container flex flex-col justify-start items-start mb-8">
			<div class="text-lg mb-6 border border-bwi-eerie-black rounded-full py-3 px-6">Events</div>
			<div class="w-full flex justify-between">
				<div class="text-4xl">All of Our Events</div>
				<div class="md:flex gap-3 hidden">
					<button
						class="w-8 h-8 md:w-12 md:h-12 rotate-180 {viewItem === 0
							? 'text-bwi-eerie-black-23%'
							: ''}"
						on:click|preventDefault={() => scrollIntoView('minus')}
					>
						<ArrorIcon height="100%" width="100%" />
					</button>
					<button
						class="w-8 h-8 md:w-12 md:h-12 {viewItem === itemNumber - 1
							? 'text-bwi-eerie-black-23%'
							: ''}"
						on:click|preventDefault={() => scrollIntoView('plus')}
					>
						<ArrorIcon height="100%" width="100%" />
					</button>
				</div>
			</div>
		</div>

		<div class="container pr-0">
			<div
				id="events-container"
				class="flex overflow-hidden snap-x snap-mandatory gap-6 relative max-w-full pr-8"
				bind:this={containerEl}
			>
				{#each events as event, index}
					<div class="min-w-[306px] snap-start">
						<img
							src={event.imgUrl}
							alt="events"
							class="max-w-[306px] min-w-[306px] object-cover min-h-[337px] max-h-[337px]"
						/>
						<div class="font-optima text-xl mt-5">{event.name}</div>
						<div class="font-oakes mt-3">{event.date}</div>
						<div class="font-oakes mt-5">{event.location}</div>
					</div>
				{/each}
			</div>
		</div>

		<div class="container flex gap-3 mt-11 md:hidden">
			<button
				class="w-8 h-8 md:w-12 md:h-12 rotate-180 {viewItem === 0
					? 'text-bwi-eerie-black-23%'
					: ''}"
				on:click|preventDefault={() => scrollIntoView('minus')}
			>
				<ArrorIcon height="100%" width="100%" />
			</button>
			<button
				class="w-8 h-8 md:w-12 md:h-12 {viewItem === itemNumber - 1
					? 'text-bwi-eerie-black-23%'
					: ''}"
				on:click|preventDefault={() => scrollIntoView('plus')}
			>
				<ArrorIcon height="100%" width="100%" />
			</button>
		</div>
	</div>
</div>
