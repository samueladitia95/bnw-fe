<script lang="ts">
	import { onMount } from 'svelte';
	import TopbarPad from '$lib/components/TopbarPad.svelte';
	import { backgroundColor, isTopbarBackground, isTopbarLight } from '$lib/store';
	import type { PageData } from './$types';
	import type { Record } from 'pocketbase';
	import { inview } from 'svelte-inview';
	import CloseFilledIcon from '$lib/assets/svg/close_filled_icon.svelte';
	import { fly } from 'svelte/transition';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { flip } from 'svelte/animate';
	import { pb } from '$lib/pocketbase';

	const options = [
		{
			label: 'All Events',
			value: ''
		},
		{
			label: 'Upcoming Events',
			value: 'Upcoming Event'
		},
		{
			label: 'Past Events',
			value: 'Past Event'
		}
	];

	export let data: PageData;

	let selectedEvent: Record;
	let isOpen: boolean = false;
	let isShow = false;
	const setEvent = (event: Record) => {
		selectedEvent = event;
		isOpen = true;
	};

	let q: string = $page.url.searchParams.get('q') || ''; // query search
	let n: string = $page.url.searchParams.get('n') || '1'; // total item in a page
	let l: string = $page.url.searchParams.get('l') || ''; // label filter

	onMount(() => {
		isTopbarBackground.set(false);
		isTopbarLight.set(false);
		backgroundColor.set('bg-bwi-alabaster');
	});

	let onSubmit = async () => {
		const query = {
			q: q.trim(),
			n,
			l: l.trim()
		};
		await goto(`?${new URLSearchParams(query).toString()}`, {
			keepFocus: true,
			noScroll: true
		});
	};

	const handleChange = ({ detail }: CustomEvent<ObserverEventDetails>) => {
		if (!isShow && detail.inView) isShow = true;
	};
</script>

<div
	class="bg-bwi-alabaster min-h-screen"
	use:inview={{
		rootMargin: '-100px',
		unobserveOnEnter: true
	}}
	on:inview_change={handleChange}
>
	<TopbarPad />
	<div class="container flex flex-col gap-4 text-bwi-eerie-black pb-20">
		<div class="font-optima text-3xl md:text-5xl">Events</div>
		<div class="font-oakes flex gap-2 justify-between md:justify-start">
			{#each options as option}
				<button
					class="text-xs md:text-base p-3 border border-bwi-eerie-black rounded-full hover:bg-bwi-eerie-black hover:text-bwi-alabaster lg:text-lg hover:disabled:bg-bwi-battleship hover:disabled:text-bwi-alabaster disabled:bg-bwi-battleship disabled:border-bwi-battleship disabled:text-bwi-alabaster whitespace-nowrap"
					disabled={option.value === l}
					on:click={() => {
						l = option.value;
						onSubmit();
					}}
				>
					{option.label}
				</button>
			{/each}
		</div>
		<form on:submit|preventDefault={onSubmit}>
			<input
				placeholder="Find Event Here"
				class="py-2 px-4 w-full rounded bg-bwi-alabaster border border-bwi-eerie-black-23% outline-bwi-eerie-black-23%"
				bind:value={q}
				on:blur|preventDefault={onSubmit}
			/>
		</form>

		{#if data.events.items.length && isShow}
			<div
				class="flex flex-col gap-6 md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:gap-y-8"
				transition:fly={{ y: 200, duration: 1000, delay: 100 }}
			>
				{#each data.events.items as event, index (index)}
					<!-- Event Card -->
					<div
						class="min-w-full snap-start flex flex-col items-start"
						animate:flip={{ duration: 200 }}
					>
						<img
							src={pb.files.getUrl(event, event.img)}
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
		{:else if data.events.items.length < 1 && q}
			<div
				class="text-bwi-bwi-eerie-black font-oakes h-[30vh] w-full flex justify-center items-center"
			>
				Sorry we haven’t found any event with “{q}”
			</div>
		{/if}

		<div class="flex w-full justify-center items-center mt-20">
			<button
				class="flex font-oakes text-center border-2 border-bwi-eerie-black rounded-full px-5 py-3 gap-4 mt-5 hover:bg-bwi-eerie-black hover:text-bwi-alabaster lg:text-lg hover:disabled:bg-bwi-alabaster hover:disabled:text-bwi-eerie-black disabled:opacity-50"
				on:click={() => {
					n = String(+n + 1);
					onSubmit();
				}}
				disabled={data.events.items.length >= data.events.totalItems}
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
					<img
						alt="modal"
						src={pb.files.getUrl(selectedEvent, selectedEvent.img)}
						class="w-full max-h-[345px] object-cover"
					/>
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
