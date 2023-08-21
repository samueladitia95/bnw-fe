<script lang="ts">
	import FacebookIcon from '$lib/assets/svg/facebook_icon.svelte';
	import Instagram from '$lib/assets/svg/instagram.svelte';
	import MainIcon from '$lib/assets/svg/main_icon.svelte';
	import TwitterIcon from '$lib/assets/svg/twitter_icon.svelte';
	import { isContactOpen } from '$lib/store';
	import { inview } from 'svelte-inview';
	import { fly } from 'svelte/transition';

	const navbars = [
		{
			label: 'About Us',
			link: '#about-us-container'
		},
		{
			label: 'Benefits',
			link: '#benefits-container'
		},
		{
			label: 'Products',
			link: '#products-container'
		},
		{
			label: 'Events',
			link: '#events-container'
		},
		{
			label: 'Testimonials',
			link: '#testimonials-container'
		}
	];

	let isShow: boolean = false;

	const scrollToView = (id: string) => {
		const targetEl = document.querySelector(id);
		if (!targetEl) return;
		targetEl.scrollIntoView({ behavior: 'smooth' });
	};

	const handleChange = ({ detail }: CustomEvent<ObserverEventDetails>) => {
		if (!isShow && detail.inView) isShow = true;
	};
</script>

<div
	use:inview={{
		rootMargin: '50px',
		unobserveOnEnter: true
	}}
	on:inview_change={handleChange}
	class="bg-bwi-battleship text-bwi-alabaster"
>
	{#if isShow}
		<div transition:fly={{ y: 200, duration: 1000, delay: 500 }} class="container py-16">
			<div class="w-28 md:w-44 text-white">
				<MainIcon width="100%" height="100%" />
			</div>
			<div class="lg:flex lg:gap-60">
				<div>
					<div class="mt-10 font-oakes text-xl leading-relaxed lg:max-w-[416px]">
						Interested in discussing a potential project or want to find out more?
					</div>
					<button
						class="mt-6 font-oakes text-bwi-alabaster border-2 border-bwi-alabaster p-4 rounded-full hover:bg-white hover:text-bwi-chamoisee"
						on:click={() => {
							isContactOpen.set(true);
						}}
					>
						Get In Touch
					</button>
				</div>

				<div class="mt-12 flex justify-between md:justify-start md:gap-80">
					<div class="flex flex-col gap-3.5 items-start">
						{#each navbars as navItem}
							<button class="font-oakes" on:click={() => scrollToView(navItem.link)}>
								{navItem.label}
							</button>
						{/each}
					</div>

					<div class="flex flex-col gap-3.5">
						<div class="font-oakes font-semibold leading-loose">Follow Us</div>
						<div class="flex gap-5">
							<div class="w-6 h-6">
								<TwitterIcon width="100%" height="100%" />
							</div>
							<div class="w-6 h-6">
								<FacebookIcon width="100%" height="100%" />
							</div>
							<div class="w-6 h-6">
								<Instagram width="100%" height="100%" />
							</div>
						</div>
					</div>
				</div>
			</div>

			<hr class="border border-bwi-alabaster w-full mt-16" />

			<div class="text-sm font-oakes text-bwi-alabaster tracking-tighter mt-4">
				© 2023 B&W International. , All Rights Reserved
			</div>
		</div>
	{/if}
</div>
