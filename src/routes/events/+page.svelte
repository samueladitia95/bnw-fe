<script lang="ts">
	import { onMount } from 'svelte';
	import TopbarPad from '$lib/components/TopbarPad.svelte';
	import { backgroundColor, isTopbarBackground, isTopbarLight } from '$lib/store';
	import type { PageData } from './$types';
	import type { Record } from 'pocketbase';
	import CloseFilledIcon from '$lib/assets/svg/close_filled_icon.svelte';
	import { fly } from 'svelte/transition';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';

	const options: string[] = ['All Events', 'Upcoming Events', 'Past Events'];
	export let data: PageData;
	const imgUrl =
		'https://s3-alpha-sig.figma.com/img/1203/de7a/c03f268845b14f761c33e470396fd8d3?Expires=1694390400&Signature=Dxhtp1wE-jS5~zZYYHqOrHW3sLAy4Zteq2NSyWQ3tivUewDRo-ooTOWjodT27j9X8rZA4if4dNnJ5UFyVUG~I8KmCP6px8nG82wdRVreUVdOZ6N~f7-p9ELDP66tCpJNMjgIh0LMd0RdnTu6iy3gkNZaZbfjOoagMzV6D7P1DMEGTrCVIXfr5V10esTpotwlrJtrcBnR5qPtPi7Y2YHpTlHG-Lzq6ohuBr5R~WXpNgxKOk2MKSZnvLxzXluMjwodO1QOYpSY1u5ej~IdxclMamrDAtpKFh2aKBYnpiSrvZhwPa-QAekv09aGI6tnO8ZnM6OkhgYcrozSzsDzCCmjbQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4';

	let selectedEvent: Record;
	let isOpen: boolean = false;
	const setEvent = (event: Record) => {
		selectedEvent = event;
		isOpen = true;
	};
	let searchQuery: string = $page.url.searchParams.get('q') || '';

	onMount(() => {
		isTopbarBackground.set(false);
		isTopbarLight.set(false);
		backgroundColor.set('bg-bwi-alabaster');
	});

	let onSubmit = async () => {
		let currentSearchTerm = '';

		const urlParamsSearch = new URLSearchParams(window.location.search);
		currentSearchTerm = urlParamsSearch.get('q') || '';

		if (searchQuery.trim() == currentSearchTerm?.trim()) return;

		await goto(`/events?q=${encodeURIComponent(searchQuery.trim())}`, {
			keepFocus: true
		});
	};
</script>

<div class="bg-bwi-alabaster min-h-screen">
	<TopbarPad />
	<div class="container flex flex-col gap-4 text-bwi-eerie-black pb-20">
		<div class="font-optima text-3xl md:text-5xl">Events</div>
		<div class="font-oakes flex gap-2 justify-between md:justify-start">
			{#each options as option}
				<button class="text-xs md:text-base p-3 border border-bwi-eerie-black rounded-full">
					{option}
				</button>
			{/each}
		</div>

		<form on:submit|preventDefault={onSubmit}>
			<input
				placeholder="Find Event Here"
				class="py-2 px-4 w-full rounded bg-bwi-alabaster border border-bwi-eerie-black-23% outline-bwi-eerie-black-23%"
				bind:value={searchQuery}
				on:blur|preventDefault={onSubmit}
			/>
		</form>

		{#if data.events.items.length}
			<div
				class="flex flex-col gap-6 md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:gap-y-8"
			>
				{#each data.events.items as event}
					<!-- Event Card -->
					<div class="min-w-full snap-start flex flex-col items-start">
						<img
							src={imgUrl}
							alt="events"
							class="min-w-full object-cover min-h-[337px] max-h-[337px]"
						/>
						<div class="font-optima text-xl mt-5">{event.name}</div>
						<div class="font-oakes mt-3">{event.date}</div>
						<button
							class="flex font-oakes text-center border-2 border-bwi-eerie-black rounded-full px-5 py-3 gap-4 mt-5 hover:bg-bwi-eerie-black hover:text-bwi-alabaster"
							on:click={() => setEvent(event)}
						>
							<span class="lg:text-xl">View Details</span>
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
						</button>
					</div>
				{/each}
			</div>
		{:else if data.events.items.length < 1 && searchQuery}
			<div
				class="text-bwi-bwi-eerie-black font-oakes h-[30vh] w-full flex justify-center items-center"
			>
				Sorry we haven’t found any event with “{searchQuery}”
			</div>
		{/if}

		<div class="flex w-full justify-center items-center mt-20">
			<button
				class="flex font-oakes text-center border-2 border-bwi-eerie-black rounded-full px-5 py-3 gap-4 mt-5 hover:bg-bwi-eerie-black hover:text-bwi-alabaster lg:text-lg"
			>
				Show More
			</button>
		</div>
	</div>
</div>

{#if isOpen}
	<div>
		<div class="fixed top-0 left-0 z-40 bg-black opacity-50 h-screen w-screen" />
		<div
			class="fixed top-0 left-0 z-50 h-screen w-screen"
			transition:fly={{ y: 200, duration: 500 }}
		>
			<div
				class="absolute bg-bwi-alabaster max-h-[792px] h-full max-w-[900px] w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
			>
				<div class="relative">
					<img alt="modal" src={imgUrl} class="w-full max-h-[345px] object-cover" />
					<button
						class="w-8 h-8 fixed top-4 right-4 text-bwi-alabaster"
						on:click={() => (isOpen = false)}
					>
						<CloseFilledIcon height="100%" width="100%" />
					</button>
				</div>
				<div class="px-6 py-9">
					<div class="font-optima text-3xl mb-6">{selectedEvent.name}</div>
					<div class="font-oakes leading-loose mb-9">{selectedEvent.description}</div>
					<div class="flex gap-24">
						<div>
							<div class="font-oakes text-sm font-bold leading-loose">Venue</div>
							<div class="font-oakes text-xl">{selectedEvent.location}</div>
						</div>
						<div>
							<div class="font-oakes text-sm font-bold leading-loose">Date</div>
							<div class="font-oakes text-xl">{selectedEvent.date}</div>
						</div>
					</div>
					<button
						class="hidden lg:flex font-oakes text-center border-2 border-bwi-eerie-black rounded-full px-5 py-3 gap-4 mt-5 hover:bg-bwi-eerie-black hover:text-bwi-alabaster"
					>
						<span class="text-xl">Go To Website</span>
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
					</button>
				</div>
			</div>
		</div>
	</div>
{/if}
