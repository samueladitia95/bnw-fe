<script lang="ts">
	import FacebookIcon from '$lib/assets/svg/facebook_icon.svelte';
	import Instagram from '$lib/assets/svg/instagram.svelte';
	import MainIcon from '$lib/assets/svg/main_icon.svelte';
	import TwitterIcon from '$lib/assets/svg/twitter_icon.svelte';
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
</script>

<div class="bg-bwi-battleship text-bwi-alabaster">
	<div class="container py-16">
		<div class="w-28 md:w-44 text-white">
			<MainIcon width="100%" height="100%" />
		</div>
		<div class="mt-10 font-oakes text-xl leading-relaxed">
			Interested in discussing a potential project or want to find out more?
		</div>
		<button
			class="mt-6 font-oakes text-xl md:text-2xl text-bwi-alabaster border-2 border-bwi-alabaster p-4 rounded-full hover:bg-white hover:text-bwi-chamoisee"
		>
			Get In Touch
		</button>

		<div class="mt-12 flex justify-between">
			<div class="flex flex-col gap-3.5">
				{#each navbars as navItem}
					<a class="font-oakes" href={navItem.link}>
						{navItem.label}
					</a>
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

		<hr class="border border-bwi-alabaster w-full mt-16" />

		<div class="text-sm font-oakes text-white opacity-70 tracking-tighter mt-4">
			© 2023 B&W International. , All Rights Reserved
		</div>
	</div>
</div>
