<script lang="ts">
	import ArrorIcon from '$lib/assets/svg/arror_icon.svelte';
	import CloseFilledIcon from '$lib/assets/svg/close_filled_icon.svelte';
	import TopbarPad from '$lib/components/TopbarPad.svelte';
	import { fly } from 'svelte/transition';
	import { inview } from 'svelte-inview';
	import type { ListResult, Record } from 'pocketbase';
	import { pb } from '$lib/pocketbase';

	export let events: ListResult<Record>;
	const itemNumber: number = events.items.length;
	let viewItem: number = 0;
	let containerEl: Element;
	let isOpen: boolean = false;
	let selectedEvent: Record;
	let isShow: boolean = false;

	const scrollIntoView = (action: 'plus' | 'minus') => {
		events;
		const maxWidth = containerEl.scrollWidth;

		if (action === 'plus' && viewItem < itemNumber - 1) {
			viewItem = viewItem + 1;
		} else if (action === 'minus' && viewItem > 0) {
			viewItem = viewItem - 1;
		}

		containerEl.scrollTo({ left: (maxWidth / itemNumber) * viewItem, behavior: 'smooth' });
	};

	const setEvent = (event: Record) => {
		selectedEvent = event;
		isOpen = true;
	};

	const handleChange = ({ detail }: CustomEvent<ObserverEventDetails>) => {
		if (!isShow && detail.inView) isShow = true;
	};
</script>

<div
	id="events-container"
	class="min-h-screen w-full bg-bwi-alabaster text-bwi-eerie-black font-optima pb-32"
	use:inview={{
		rootMargin: '-100px',
		unobserveOnEnter: true
	}}
	on:inview_change={handleChange}
>
	<TopbarPad />
	<div class="flex flex-col justify-start items-start lg:flex-row lg:container lg:gap-20">
		{#if isShow}
			<div
				transition:fly={{ y: -200, duration: 1000, delay: 500 }}
				class="container flex flex-col justify-start items-start mb-8 lg:px-0 lg:max-w-[355px]"
			>
				<div class="text-lg mb-6 border border-bwi-eerie-black rounded-full py-3 px-6">Events</div>
				<div class="w-full flex justify-between lg:min-w-[355px]">
					<div>
						<div class="text-4xl lg:text-5xl">All of Our Events</div>
						<a class="mt-3 md:mt-5 flex gap-3 text-lg md:text-xl font-oakes" href="/events">
							View All
							<div class="w-5 h-5">
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
							</div>
						</a>
					</div>
					<div class="md:flex gap-3 hidden lg:hidden">
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

			<div
				transition:fly={{ x: -200, duration: 1000, delay: 500 }}
				class="container pr-0 lg:max-w-full lg:min-w-0"
			>
				<div class="hidden lg:flex gap-3 mb-6 lg:justify-end">
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
				<!-- Events Container -->
				<div
					id="events-container"
					class="flex overflow-hidden snap-x snap-mandatory gap-6 relative max-w-full pr-8 xl:min-w-[calc(102%+(100vw-1280px)/2)] 2xl:min-w-[calc(102%+(100vw-1536px)/2)]"
					bind:this={containerEl}
				>
					{#each events.items as event}
						<!-- Event Card -->
						<div class="min-w-[306px] snap-start flex flex-col items-start">
							<img
								src={pb.files.getUrl(event, event.img)}
								alt="events"
								class="max-w-[306px] min-w-[306px] object-cover min-h-[337px] max-h-[337px]"
							/>
							<div
								class="px-4 py-2 font-oakes text-bwi-alabaster bg-bwi-battleship rounded-full mt-5"
							>
								{event.status}
							</div>
							<div class="font-optima text-xl mt-5">{event.name}</div>
							<div class="font-oakes mt-3">{event.date}</div>
							<button
								class="hidden lg:flex font-oakes text-center border-2 border-bwi-eerie-black rounded-full px-5 py-3 gap-4 mt-5 hover:bg-bwi-eerie-black hover:text-bwi-alabaster"
								on:click={() => setEvent(event)}
							>
								<span class="text-xl">View Details</span>
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
			</div>

			<div
				transition:fly={{ y: 200, duration: 1000, delay: 1000 }}
				class="container flex gap-3 mt-11 md:hidden"
			>
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
		{/if}
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
				class="absolute bg-bwi-alabaster max-h-[792px] h-full max-w-[900px] w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 overflow-y-auto no-scrollbar"
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
