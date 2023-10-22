<script lang="ts">
	import '../app.css';
	import FooterContainer from '$lib/containers/FooterContainer.svelte';

	import MainIcon from '$lib/assets/svg/main_icon.svelte';
	import CloseIcon from '$lib/assets/svg/close_icon.svelte';
	import MenuICon from '$lib/assets/svg/menu_icon.svelte';
	import {
		backgroundColor,
		isContactOpen,
		isTopbarBackground,
		isTopbarLight,
		isTransparent
	} from '$lib/store';
	import Input from '$lib/components/Input.svelte';
	import type { PageData } from './$types';
	import { superForm } from 'sveltekit-superforms/client';
	import { schemaContactUs } from '$lib';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';

	export let data: PageData;

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
	let isBackground: boolean = false;
	let isTransparentTopbar: boolean = false;
	let contactUsIsOpen: boolean = false;
	let isSuccess: boolean = false;
	let isLightText: boolean = false;
	let bgColor: string = 'bg-bwi-battleship';

	isTopbarBackground.subscribe((value) => (isBackground = value));
	isContactOpen.subscribe((value) => (contactUsIsOpen = value));
	isTopbarLight.subscribe((value) => (isLightText = value));
	backgroundColor.subscribe((value) => (bgColor = value));
	isTransparent.subscribe((value) => (isTransparentTopbar = value));

	const scrollToView = (id: string) => {
		if ($page.url.pathname === '/') {
			const targetEl = document.querySelector(id);
			if (!targetEl) return;
			sideBarIsOpen = false;
			targetEl.scrollIntoView({ behavior: 'smooth' });
		} else {
			goto(`/${id}`);
		}
	};

	const { form, errors, enhance, reset } = superForm(data.form, {
		validationMethod: 'onblur',
		validators: schemaContactUs,
		onUpdated({ form }) {
			if (form.valid) {
				isSuccess = true;
			}
		}
	});

	onMount(() => {
		document.body.classList.add('no-scrollbar');
		window.scrollTo(0, 0);
	});
</script>

<div>
	<!-- Sidebar -->
	<div
		class="z-30 h-screen w-screen fixed top-0 right-0 duration-500 transition-transform {sideBarIsOpen
			? 'translate-x-0'
			: 'translate-x-full'}"
	>
		<div
			class="h-full w-full px-6 md:px-12 py-7 bg-bwi-battleship text-bwi-alabaster flex flex-col gap-10 justify-between overflow-auto no-scrollbar"
		>
			<div>
				<!-- main logo -->
				<div class="flex justify-between">
					<a class="w-28 md:w-32 text-white" href="/">
						<MainIcon width="100%" height="100%" />
					</a>

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
						<button
							class="font-normal text-2xl md:text-4xl"
							on:click={() => scrollToView(navItem.link)}
						>
							{navItem.label}
						</button>
					{/each}

					<button
						class="font-normal text-2xl md:text-3xl text-white border-2 border-white p-5 md:p-7 rounded-full hover:bg-white hover:text-bwi-chamoisee"
						on:click={() => {
							sideBarIsOpen = false;
							isContactOpen.set(true);
						}}
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
	<div class="z-20 px-6 md:px-16 py-7 fixed w-full top-0 {isBackground ? '' : bgColor}">
		<!-- main logo -->
		<div class="flex justify-between {isLightText ? 'text-bwi-alabaster' : 'text-bwi-eerie-black'}">
			<a class="w-28 md:w-32" href="/">
				<MainIcon width="100%" height="100%" />
			</a>

			<button
				class="w-8 h-8 md:w-11 md:h-11 lg:hidden"
				on:click={() => {
					sideBarIsOpen = !sideBarIsOpen;
				}}
			>
				<MenuICon width="100%" height="100%" />
			</button>

			<!-- Navbar Items In Topbar -->
			<div class="hidden lg:flex gap-8 font-oakes items-center">
				{#each navbars as navItem}
					<button class="font-normal" on:click={() => scrollToView(navItem.link)}>
						{navItem.label}
					</button>
				{/each}

				<button
					class="font-normal font-oakes leading-tight border-2 {isLightText
						? 'border-bwi-alabaster hover:bg-bwi-alabaster hover:text-bwi-chamoisee'
						: 'border-bwi-eerie-black hover:bg-bwi-eerie-black hover:text-bwi-alabaster'} px-5 py-4 rounded-full"
					on:click={() => {
						sideBarIsOpen = false;
						isContactOpen.set(true);
					}}
				>
					Get In Touch
				</button>
			</div>
		</div>
	</div>

	<!-- Contact Us Sidebar -->
	<div>
		{#if contactUsIsOpen}
			<div class="fixed top-0 left-0 z-40 bg-black opacity-50 h-screen w-screen" />
		{/if}
		<div
			class="z-50 h-screen w-11/12 md:w-[720px] fixed top-0 right-0 duration-500 transition-transform {contactUsIsOpen
				? 'translate-x-0'
				: 'translate-x-full'}"
		>
			<div
				class="bg-bwi-alabaster text-bwi-eerie-black h-full w-full px-6 py-12 md:p-12 overflow-auto"
			>
				<div class="flex justify-between mb-7">
					<div class="font-optima text-3xl md:text-5xl">Contact Us</div>
					<button
						class="w-8 h-8 opacity-60 hover:opacity-100"
						on:click={() => {
							reset();
							isContactOpen.set(false);
						}}
					>
						<CloseIcon height="100%" width="100%" />
					</button>
				</div>

				{#if isSuccess}
					<div class="font-oakes leading-loose mb-8 md:max-w-lg">Thank you for submitting!</div>
					<div class="font-oakes leading-loose mb-8 md:max-w-lg">
						Our team will get back to you as soon as possible
					</div>
					<button
						type="button"
						class="mt-4 px-10 py-3 font-oakes bg-bwi-lion text-bwi-alabaster rounded-full hover:bg-bwi-chamoisee"
						on:click={() => {
							isSuccess = false;
							reset();
						}}
					>
						Send Another Message
					</button>
				{:else}
					<div class="font-oakes leading-loose mb-8 md:max-w-lg">
						We love hearing from new and current clients, so if you would like to discuss a project,
						or require more information regarding our services, please don’t hesitate to contact us.
					</div>

					<!-- Contact Us Form -->
					<form method="post" action="/" use:enhance class="flex flex-col gap-5 items-end">
						<Input
							name="name"
							label="Fill Your Name"
							bind:value={$form.name}
							error={$errors.name}
						/>
						<Input
							name="sender"
							label="Fill Your Email"
							bind:value={$form.sender}
							error={$errors.sender}
						/>
						<Input
							name="phone"
							label="Phone Number"
							bind:value={$form.phone}
							error={$errors.phone}
						/>
						<div class="w-full flex flex-col gap-4 font-oakes">
							<div class="text-xs text-black-60%">Subject*</div>
							<div class="flex flex-col gap-5 w-full ml-3 md:ml-0 md:flex-row md:gap-8">
								<div class="flex gap-2 items-center">
									<input
										name="subject"
										type="radio"
										class="w-5 h-5 appearance-none border-2 border-bwi-lion rounded-full box-content checked:bg-bwi-lion checked:ring-4 checked:ring-bwi-alabaster checked:ring-inset"
										bind:group={$form.subject}
										value="Partnership"
									/>
									<div class="text-sm text-bwi-eerie-black">Partnership</div>
								</div>
								<div class="flex gap-2 items-center">
									<input
										name="subject"
										type="radio"
										class="w-5 h-5 appearance-none border-2 border-bwi-lion rounded-full box-content checked:bg-bwi-lion checked:ring-4 checked:ring-bwi-alabaster checked:ring-inset"
										bind:group={$form.subject}
										value="Be Our Official Retailer"
									/>
									<div class="text-sm text-bwi-eerie-black">Be Our Official Retailer</div>
								</div>
								<div class="flex gap-2 items-center">
									<input
										name="subject"
										type="radio"
										class="w-5 h-5 appearance-none border-2 border-bwi-lion rounded-full box-content checked:bg-bwi-lion checked:ring-4 checked:ring-bwi-alabaster checked:ring-inset"
										bind:group={$form.subject}
										value="Customer Service"
									/>
									<div class="text-sm text-bwi-eerie-black">Customer Service</div>
								</div>
							</div>
						</div>
						<Input
							name="message"
							label="Message"
							bind:value={$form.message}
							error={$errors.message}
						/>
						<button
							type="submit"
							class="mt-4 px-10 py-3 font-oakes bg-bwi-lion text-bwi-alabaster rounded-full hover:bg-bwi-chamoisee"
						>
							Send
						</button>
					</form>
				{/if}
			</div>
		</div>
	</div>

	<div class="">
		<slot />
		<FooterContainer />
	</div>
</div>
