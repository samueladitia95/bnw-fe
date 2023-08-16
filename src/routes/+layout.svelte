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
		class="z-30 h-screen w-screen fixed top-0 right-0 duration-500 transition-transform {sideBarIsOpen
			? 'translate-x-0'
			: 'translate-x-full'}"
	>
		<div
			class="h-full w-full px-6 md:px-12 pb-8 md:pb-12 pt-11 bg-base01 text-bwi-alabaster flex flex-col gap-10 justify-between overflow-auto"
		>
			<div>
				<!-- main logo -->
				<div class="flex justify-between">
					<div class="w-28 md:w-44 text-white">
						<MainIcon width="100%" height="100%" />
					</div>

					<button
						class="w-8 h-8 md:w-11 md:h-11"
						on:click={() => {
							sideBarIsOpen = !sideBarIsOpen;
						}}
					>
						<CloseIcon width="100%" height="100%" />
					</button>
				</div>

				<!-- Navbar Items In Sidebar -->
				<div
					class="flex flex-col gap-9 md:gap-14 font-oakes text-white mt-32 justify-start items-start"
				>
					{#each navbars as navItem}
						<a class="font-normal text-2xl md:text-4xl" href={navItem.link}>
							{navItem.label}
						</a>
					{/each}

					<button
						class="font-normal text-2xl md:text-3xl text-bwi-alabaster border-2 border-bwi-alabaster p-5 md:p-7 rounded-full hover:bg-white hover:text-bwi-chamoisee"
					>
						Get In Touch
					</button>
				</div>
			</div>

			<div class="font-oakes text-sm text-white-70%">
				© 2023 B&W International. , All Rights Reserved
			</div>
		</div>
	</div>

	<!-- Topbar -->
	<!-- bg color disabled for now -->
	<div class="z-20 px-8 pb-8 pt-11 fixed w-full top-0 bg-bwi-eerie-black-23%-">
		<!-- main logo -->
		<div class="flex justify-between">
			<div class="w-28 md:w-44 text-white">
				<MainIcon width="100%" height="100%" />
			</div>

			<button
				class="w-8 h-8 md:w-11 md:h-11 text-bwi-alabaster lg:hidden"
				on:click={() => {
					sideBarIsOpen = !sideBarIsOpen;
				}}
			>
				<MenuICon width="100%" height="100%" />
			</button>

			<!-- Navbar Items In Topbar -->
			<div class="hidden lg:flex gap-8 font-oakes text-white items-center">
				{#each navbars as navItem}
					<a class="font-normal" href={navItem.link}>
						{navItem.label}
					</a>
				{/each}

				<button
					class="font-normal font-oakes leading-tight text-bwi-alabaster border-2 border-bwi-alabaster px-5 py-4 rounded-full hover:bg-white hover:text-bwi-chamoisee"
				>
					Get In Touch
				</button>
			</div>
		</div>
	</div>

	<div class="">
		<slot />
	</div>
</div>
