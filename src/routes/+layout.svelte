<script lang="ts">
	import '../app.css';
	import MainIcon from '$lib/assets/svg/main_icon.svelte';
	import CloseIcon from '$lib/assets/svg/close_icon.svelte';
	import MenuICon from '$lib/assets/svg/menu_icon.svelte';

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
	let sideBarIsOpen: boolean = false;
</script>

<div>
	<!-- Sidebar -->
	<div
		class="z-10 h-screen w-screen fixed top-0 right-0 duration-500 transition-transform {sideBarIsOpen
			? 'translate-x-full'
			: 'translate-x-0'}"
	>
		<div
			class="h-full w-full px-6 pb-8 pt-11 bg-bwi-chamoisee text-bwi-Alabaster flex flex-col justify-between"
		>
			<div>
				<!-- main logo -->
				<div class="flex justify-between">
					<div class="w-28 text-white">
						<MainIcon width="100%" height="100%" />
					</div>

					<button
						class="w-8 h-8"
						on:click={() => {
							sideBarIsOpen = !sideBarIsOpen;
						}}
					>
						<CloseIcon width="100%" height="100%" />
					</button>
				</div>

				<!-- Navbar Items -->
				<div class="flex flex-col gap-9 font-oakes text-white mt-32 justify-start items-start">
					{#each navbars as navItem}
						<a class="font-normal text-2xl" href={navItem.link}>
							{navItem.label}
						</a>
					{/each}

					<div
						class="font-normal text-2xl text-bwi-Alabaster border-2 border-bwi-Alabaster p-5 rounded-full"
					>
						Get In Touch
					</div>
				</div>
			</div>

			<div class="font-oakes text-sm text-70%-white">
				© 2023 B&W International. , All Rights Reserved
			</div>
		</div>
	</div>

	<!-- Topbar -->
	<div class="px-8 pb-8 pt-11 sticky top-0">
		<!-- main logo -->
		<div class="flex justify-between">
			<div class="w-28 text-black">
				<MainIcon width="100%" height="100%" />
			</div>

			<button
				class="w-8 h-8 text-black"
				on:click={() => {
					sideBarIsOpen = !sideBarIsOpen;
				}}
			>
				<MenuICon width="100%" height="100%" />
			</button>
		</div>
	</div>

	<slot />
</div>
