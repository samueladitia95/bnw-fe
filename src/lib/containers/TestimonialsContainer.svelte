<script lang="ts">
	import ArrorIcon from '$lib/assets/svg/arror_icon.svelte';
	import TopbarPad from '$lib/components/TopbarPad.svelte';
	import { inview } from 'svelte-inview';
	import { fly } from 'svelte/transition';

	const testimonials = [
		{
			content:
				'Beyond their exceptional products, PT. B&W International’s customer service is top notch. Whenever we had questions or needed assistance, their friendly and knowledgeable staff was just a phone call away, ready to help us with anything  we needed.',
			name: 'Karen',
			position: 'Owner of Baby Light Store',
			imgUrl:
				'https://s3-alpha-sig.figma.com/img/c30e/327e/fde5b0f8530412e0a75c3d0b15dd58d5?Expires=1694995200&Signature=HHXj9QgeLIx46rtMuqBHv-MFR0FMS1MEQTuM~irwPMRbasRPuPGu2dy17GXtCPzIZncpHseXaoiFVh-WX7caM~6IKJZPt13zbKA9WAW3Wte3~qSbx4AvMmiutMkfm45ubr6grZSBAFWSeZP-WVdA~Qt6PMnnbzeLEkgXYxLjAmP3YGpnWWtRQbqZtz07iLh67eArZMRUKWi36O~so8BJVhFjqBh~n6wPjTm46bu7bCjJJxnH6yp~L0GAqpt83~K8zzhEGeG-~QqDv42G9zhgbzV8RuqTZynAnSAcx8M1lnYdJM59kqHNTnejQH6KSxItcbiIUdYtm5lb0lxTljqC~A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
		},
		{
			content:
				"Our partnership with PT. B&W International has not only improvedour family's life but also ourbusiness. Their reliable and timely deliveries have allowed us to meet the demands of our customers, and their marketing support has helped us promote their products effectively.",
			name: 'Michael Sean',
			position: 'Founder of Joy Baby Boutique',
			imgUrl:
				'https://s3-alpha-sig.figma.com/img/c30e/327e/fde5b0f8530412e0a75c3d0b15dd58d5?Expires=1694995200&Signature=HHXj9QgeLIx46rtMuqBHv-MFR0FMS1MEQTuM~irwPMRbasRPuPGu2dy17GXtCPzIZncpHseXaoiFVh-WX7caM~6IKJZPt13zbKA9WAW3Wte3~qSbx4AvMmiutMkfm45ubr6grZSBAFWSeZP-WVdA~Qt6PMnnbzeLEkgXYxLjAmP3YGpnWWtRQbqZtz07iLh67eArZMRUKWi36O~so8BJVhFjqBh~n6wPjTm46bu7bCjJJxnH6yp~L0GAqpt83~K8zzhEGeG-~QqDv42G9zhgbzV8RuqTZynAnSAcx8M1lnYdJM59kqHNTnejQH6KSxItcbiIUdYtm5lb0lxTljqC~A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
		},
		{
			content:
				'We wholeheartedly recommend PT. B&W International to any business looking to collaborate with a trustworthy and innovative baby products supplier. Their dedication to excellence. Thankyou!',
			name: 'Thomas West',
			position: 'Founder Tots & Toddlers Treasures',
			imgUrl:
				'https://s3-alpha-sig.figma.com/img/ac18/1f51/d09163e624008a987e9766821bb465c7?Expires=1694995200&Signature=fBqJyfDSXxtfeZL1JEKvPmqFIWDyPkO2VNgiFmFOaLbzVg8e~nXa785muuN8ziRNAUKsy9LHxgEQrdSKwA2tNuN9CMnkuG5gpTPP3hSGeUSf56zYgDoBfoVtHMvyriI9LeVNmU6bFzCa3c55E3NxWGYd0VLJwIyMoe6unNSEZt8hzVZWWsslb0LlLDkDJGEW9upoeXHgahDYfXHDcJTqWhL1NtG-hJqvCbA0It9aKPg0TVuV3q~SAMe7HC~~gl9lra0NWbgEizEjpsTYoKJ~tXk84oEmZId6ANP5EAj7a33jd9UDF9T6eu7l-WKmisI4DxKn0tI~UEFZPWn9XG-z6g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
		},
		{
			content:
				'Beyond their exceptional products, PT. B&W International’s customer service is top notch. Whenever we had questions or needed assistance, their friendly and knowledgeable staff was just a phone call away, ready to help us with anything  we needed.',
			name: 'Karen',
			position: 'Owner of Baby Light Store',
			imgUrl:
				'https://s3-alpha-sig.figma.com/img/c30e/327e/fde5b0f8530412e0a75c3d0b15dd58d5?Expires=1694995200&Signature=HHXj9QgeLIx46rtMuqBHv-MFR0FMS1MEQTuM~irwPMRbasRPuPGu2dy17GXtCPzIZncpHseXaoiFVh-WX7caM~6IKJZPt13zbKA9WAW3Wte3~qSbx4AvMmiutMkfm45ubr6grZSBAFWSeZP-WVdA~Qt6PMnnbzeLEkgXYxLjAmP3YGpnWWtRQbqZtz07iLh67eArZMRUKWi36O~so8BJVhFjqBh~n6wPjTm46bu7bCjJJxnH6yp~L0GAqpt83~K8zzhEGeG-~QqDv42G9zhgbzV8RuqTZynAnSAcx8M1lnYdJM59kqHNTnejQH6KSxItcbiIUdYtm5lb0lxTljqC~A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
		},
		{
			content:
				"Our partnership with PT. B&W International has not only improvedour family's life but also ourbusiness. Their reliable and timely deliveries have allowed us to meet the demands of our customers, and their marketing support has helped us promote their products effectively.",
			name: 'Michael Sean',
			position: 'Founder of Joy Baby Boutique',
			imgUrl:
				'https://s3-alpha-sig.figma.com/img/c30e/327e/fde5b0f8530412e0a75c3d0b15dd58d5?Expires=1694995200&Signature=HHXj9QgeLIx46rtMuqBHv-MFR0FMS1MEQTuM~irwPMRbasRPuPGu2dy17GXtCPzIZncpHseXaoiFVh-WX7caM~6IKJZPt13zbKA9WAW3Wte3~qSbx4AvMmiutMkfm45ubr6grZSBAFWSeZP-WVdA~Qt6PMnnbzeLEkgXYxLjAmP3YGpnWWtRQbqZtz07iLh67eArZMRUKWi36O~so8BJVhFjqBh~n6wPjTm46bu7bCjJJxnH6yp~L0GAqpt83~K8zzhEGeG-~QqDv42G9zhgbzV8RuqTZynAnSAcx8M1lnYdJM59kqHNTnejQH6KSxItcbiIUdYtm5lb0lxTljqC~A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
		},
		{
			content:
				'We wholeheartedly recommend PT. B&W International to any business looking to collaborate with a trustworthy and innovative baby products supplier. Their dedication to excellence. Thankyou!',
			name: 'Thomas West',
			position: 'Founder Tots & Toddlers Treasures',
			imgUrl:
				'https://s3-alpha-sig.figma.com/img/ac18/1f51/d09163e624008a987e9766821bb465c7?Expires=1694995200&Signature=fBqJyfDSXxtfeZL1JEKvPmqFIWDyPkO2VNgiFmFOaLbzVg8e~nXa785muuN8ziRNAUKsy9LHxgEQrdSKwA2tNuN9CMnkuG5gpTPP3hSGeUSf56zYgDoBfoVtHMvyriI9LeVNmU6bFzCa3c55E3NxWGYd0VLJwIyMoe6unNSEZt8hzVZWWsslb0LlLDkDJGEW9upoeXHgahDYfXHDcJTqWhL1NtG-hJqvCbA0It9aKPg0TVuV3q~SAMe7HC~~gl9lra0NWbgEizEjpsTYoKJ~tXk84oEmZId6ANP5EAj7a33jd9UDF9T6eu7l-WKmisI4DxKn0tI~UEFZPWn9XG-z6g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
		},
		{
			content:
				'Beyond their exceptional products, PT. B&W International’s customer service is top notch. Whenever we had questions or needed assistance, their friendly and knowledgeable staff was just a phone call away, ready to help us with anything  we needed.',
			name: 'Karen',
			position: 'Owner of Baby Light Store',
			imgUrl:
				'https://s3-alpha-sig.figma.com/img/c30e/327e/fde5b0f8530412e0a75c3d0b15dd58d5?Expires=1694995200&Signature=HHXj9QgeLIx46rtMuqBHv-MFR0FMS1MEQTuM~irwPMRbasRPuPGu2dy17GXtCPzIZncpHseXaoiFVh-WX7caM~6IKJZPt13zbKA9WAW3Wte3~qSbx4AvMmiutMkfm45ubr6grZSBAFWSeZP-WVdA~Qt6PMnnbzeLEkgXYxLjAmP3YGpnWWtRQbqZtz07iLh67eArZMRUKWi36O~so8BJVhFjqBh~n6wPjTm46bu7bCjJJxnH6yp~L0GAqpt83~K8zzhEGeG-~QqDv42G9zhgbzV8RuqTZynAnSAcx8M1lnYdJM59kqHNTnejQH6KSxItcbiIUdYtm5lb0lxTljqC~A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
		},
		{
			content:
				"Our partnership with PT. B&W International has not only improvedour family's life but also ourbusiness. Their reliable and timely deliveries have allowed us to meet the demands of our customers, and their marketing support has helped us promote their products effectively.",
			name: 'Michael Sean',
			position: 'Founder of Joy Baby Boutique',
			imgUrl:
				'https://s3-alpha-sig.figma.com/img/c30e/327e/fde5b0f8530412e0a75c3d0b15dd58d5?Expires=1694995200&Signature=HHXj9QgeLIx46rtMuqBHv-MFR0FMS1MEQTuM~irwPMRbasRPuPGu2dy17GXtCPzIZncpHseXaoiFVh-WX7caM~6IKJZPt13zbKA9WAW3Wte3~qSbx4AvMmiutMkfm45ubr6grZSBAFWSeZP-WVdA~Qt6PMnnbzeLEkgXYxLjAmP3YGpnWWtRQbqZtz07iLh67eArZMRUKWi36O~so8BJVhFjqBh~n6wPjTm46bu7bCjJJxnH6yp~L0GAqpt83~K8zzhEGeG-~QqDv42G9zhgbzV8RuqTZynAnSAcx8M1lnYdJM59kqHNTnejQH6KSxItcbiIUdYtm5lb0lxTljqC~A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
		},
		{
			content:
				'We wholeheartedly recommend PT. B&W International to any business looking to collaborate with a trustworthy and innovative baby products supplier. Their dedication to excellence. Thankyou!',
			name: 'Thomas West',
			position: 'Founder Tots & Toddlers Treasures',
			imgUrl:
				'https://s3-alpha-sig.figma.com/img/ac18/1f51/d09163e624008a987e9766821bb465c7?Expires=1694995200&Signature=fBqJyfDSXxtfeZL1JEKvPmqFIWDyPkO2VNgiFmFOaLbzVg8e~nXa785muuN8ziRNAUKsy9LHxgEQrdSKwA2tNuN9CMnkuG5gpTPP3hSGeUSf56zYgDoBfoVtHMvyriI9LeVNmU6bFzCa3c55E3NxWGYd0VLJwIyMoe6unNSEZt8hzVZWWsslb0LlLDkDJGEW9upoeXHgahDYfXHDcJTqWhL1NtG-hJqvCbA0It9aKPg0TVuV3q~SAMe7HC~~gl9lra0NWbgEizEjpsTYoKJ~tXk84oEmZId6ANP5EAj7a33jd9UDF9T6eu7l-WKmisI4DxKn0tI~UEFZPWn9XG-z6g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
		},
		{
			content:
				'Beyond their exceptional products, PT. B&W International’s customer service is top notch. Whenever we had questions or needed assistance, their friendly and knowledgeable staff was just a phone call away, ready to help us with anything  we needed.',
			name: 'Karen',
			position: 'Owner of Baby Light Store',
			imgUrl:
				'https://s3-alpha-sig.figma.com/img/c30e/327e/fde5b0f8530412e0a75c3d0b15dd58d5?Expires=1694995200&Signature=HHXj9QgeLIx46rtMuqBHv-MFR0FMS1MEQTuM~irwPMRbasRPuPGu2dy17GXtCPzIZncpHseXaoiFVh-WX7caM~6IKJZPt13zbKA9WAW3Wte3~qSbx4AvMmiutMkfm45ubr6grZSBAFWSeZP-WVdA~Qt6PMnnbzeLEkgXYxLjAmP3YGpnWWtRQbqZtz07iLh67eArZMRUKWi36O~so8BJVhFjqBh~n6wPjTm46bu7bCjJJxnH6yp~L0GAqpt83~K8zzhEGeG-~QqDv42G9zhgbzV8RuqTZynAnSAcx8M1lnYdJM59kqHNTnejQH6KSxItcbiIUdYtm5lb0lxTljqC~A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
		},
		{
			content:
				"Our partnership with PT. B&W International has not only improvedour family's life but also ourbusiness. Their reliable and timely deliveries have allowed us to meet the demands of our customers, and their marketing support has helped us promote their products effectively.",
			name: 'Michael Sean',
			position: 'Founder of Joy Baby Boutique',
			imgUrl:
				'https://s3-alpha-sig.figma.com/img/c30e/327e/fde5b0f8530412e0a75c3d0b15dd58d5?Expires=1694995200&Signature=HHXj9QgeLIx46rtMuqBHv-MFR0FMS1MEQTuM~irwPMRbasRPuPGu2dy17GXtCPzIZncpHseXaoiFVh-WX7caM~6IKJZPt13zbKA9WAW3Wte3~qSbx4AvMmiutMkfm45ubr6grZSBAFWSeZP-WVdA~Qt6PMnnbzeLEkgXYxLjAmP3YGpnWWtRQbqZtz07iLh67eArZMRUKWi36O~so8BJVhFjqBh~n6wPjTm46bu7bCjJJxnH6yp~L0GAqpt83~K8zzhEGeG-~QqDv42G9zhgbzV8RuqTZynAnSAcx8M1lnYdJM59kqHNTnejQH6KSxItcbiIUdYtm5lb0lxTljqC~A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
		},
		{
			content:
				'We wholeheartedly recommend PT. B&W International to any business looking to collaborate with a trustworthy and innovative baby products supplier. Their dedication to excellence. Thankyou!',
			name: 'Thomas West',
			position: 'Founder Tots & Toddlers Treasures',
			imgUrl:
				'https://s3-alpha-sig.figma.com/img/ac18/1f51/d09163e624008a987e9766821bb465c7?Expires=1694995200&Signature=fBqJyfDSXxtfeZL1JEKvPmqFIWDyPkO2VNgiFmFOaLbzVg8e~nXa785muuN8ziRNAUKsy9LHxgEQrdSKwA2tNuN9CMnkuG5gpTPP3hSGeUSf56zYgDoBfoVtHMvyriI9LeVNmU6bFzCa3c55E3NxWGYd0VLJwIyMoe6unNSEZt8hzVZWWsslb0LlLDkDJGEW9upoeXHgahDYfXHDcJTqWhL1NtG-hJqvCbA0It9aKPg0TVuV3q~SAMe7HC~~gl9lra0NWbgEizEjpsTYoKJ~tXk84oEmZId6ANP5EAj7a33jd9UDF9T6eu7l-WKmisI4DxKn0tI~UEFZPWn9XG-z6g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
		},
		{
			content:
				'Beyond their exceptional products, PT. B&W International’s customer service is top notch. Whenever we had questions or needed assistance, their friendly and knowledgeable staff was just a phone call away, ready to help us with anything  we needed.',
			name: 'Karen',
			position: 'Owner of Baby Light Store',
			imgUrl:
				'https://s3-alpha-sig.figma.com/img/c30e/327e/fde5b0f8530412e0a75c3d0b15dd58d5?Expires=1694995200&Signature=HHXj9QgeLIx46rtMuqBHv-MFR0FMS1MEQTuM~irwPMRbasRPuPGu2dy17GXtCPzIZncpHseXaoiFVh-WX7caM~6IKJZPt13zbKA9WAW3Wte3~qSbx4AvMmiutMkfm45ubr6grZSBAFWSeZP-WVdA~Qt6PMnnbzeLEkgXYxLjAmP3YGpnWWtRQbqZtz07iLh67eArZMRUKWi36O~so8BJVhFjqBh~n6wPjTm46bu7bCjJJxnH6yp~L0GAqpt83~K8zzhEGeG-~QqDv42G9zhgbzV8RuqTZynAnSAcx8M1lnYdJM59kqHNTnejQH6KSxItcbiIUdYtm5lb0lxTljqC~A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
		},
		{
			content:
				"Our partnership with PT. B&W International has not only improvedour family's life but also ourbusiness. Their reliable and timely deliveries have allowed us to meet the demands of our customers, and their marketing support has helped us promote their products effectively.",
			name: 'Michael Sean',
			position: 'Founder of Joy Baby Boutique',
			imgUrl:
				'https://s3-alpha-sig.figma.com/img/c30e/327e/fde5b0f8530412e0a75c3d0b15dd58d5?Expires=1694995200&Signature=HHXj9QgeLIx46rtMuqBHv-MFR0FMS1MEQTuM~irwPMRbasRPuPGu2dy17GXtCPzIZncpHseXaoiFVh-WX7caM~6IKJZPt13zbKA9WAW3Wte3~qSbx4AvMmiutMkfm45ubr6grZSBAFWSeZP-WVdA~Qt6PMnnbzeLEkgXYxLjAmP3YGpnWWtRQbqZtz07iLh67eArZMRUKWi36O~so8BJVhFjqBh~n6wPjTm46bu7bCjJJxnH6yp~L0GAqpt83~K8zzhEGeG-~QqDv42G9zhgbzV8RuqTZynAnSAcx8M1lnYdJM59kqHNTnejQH6KSxItcbiIUdYtm5lb0lxTljqC~A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
		},
		{
			content:
				'We wholeheartedly recommend PT. B&W International to any business looking to collaborate with a trustworthy and innovative baby products supplier. Their dedication to excellence. Thankyou!',
			name: 'Thomas West',
			position: 'Founder Tots & Toddlers Treasures',
			imgUrl:
				'https://s3-alpha-sig.figma.com/img/ac18/1f51/d09163e624008a987e9766821bb465c7?Expires=1694995200&Signature=fBqJyfDSXxtfeZL1JEKvPmqFIWDyPkO2VNgiFmFOaLbzVg8e~nXa785muuN8ziRNAUKsy9LHxgEQrdSKwA2tNuN9CMnkuG5gpTPP3hSGeUSf56zYgDoBfoVtHMvyriI9LeVNmU6bFzCa3c55E3NxWGYd0VLJwIyMoe6unNSEZt8hzVZWWsslb0LlLDkDJGEW9upoeXHgahDYfXHDcJTqWhL1NtG-hJqvCbA0It9aKPg0TVuV3q~SAMe7HC~~gl9lra0NWbgEizEjpsTYoKJ~tXk84oEmZId6ANP5EAj7a33jd9UDF9T6eu7l-WKmisI4DxKn0tI~UEFZPWn9XG-z6g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
		}
	];

	const itemNumber: number = testimonials.length;
	let viewItem: number = 0;
	let containerEl: Element;
	let isShow: boolean = false;

	function scrollIntoView(action: 'plus' | 'minus') {
		const maxWidth = containerEl.scrollWidth;

		if (action === 'plus' && viewItem < itemNumber - 1) {
			viewItem = viewItem + 1;
		} else if (action === 'minus' && viewItem > 0) {
			viewItem = viewItem - 1;
		}

		containerEl.scrollTo({ left: (maxWidth / itemNumber) * viewItem, behavior: 'smooth' });
	}

	const handleChange = ({ detail }: CustomEvent<ObserverEventDetails>) => {
		if (!isShow && detail.inView) isShow = true;
	};
</script>

<div
	id="testimonials-container"
	class="min-h-screen w-full bg-bwi-alabaster text-bwi-eerie-black font-optima pb-32"
	use:inview={{
		rootMargin: '-100px',
		unobserveOnEnter: true
	}}
	on:inview_change={handleChange}
>
	<TopbarPad />
	<div class="flex flex-col justify-start items-start">
		{#if isShow}
			<div
				transition:fly={{ y: -200, duration: 1000, delay: 500 }}
				class="container flex flex-col justify-start items-start mb-8"
			>
				<div class="text-lg mb-6 border border-bwi-eerie-black rounded-full py-3 px-6">
					Testimonials
				</div>
				<div class="w-full flex justify-between lg:min-w-[355px]">
					<div class="text-4xl lg:text-5xl">What our clients say</div>
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

			<div
				transition:fly={{ x: -200, duration: 1000, delay: 500 }}
				class="container pr-0 xl:max-w-[calc(100%-(100%-1280px)/2)] xl:ml-[calc((100%-1280px)/2)] 2xl:max-w-[calc(100%-(100%-1536px)/2)] 2xl:ml-[calc((100%-1536px)/2)]"
			>
				<div
					id="events-container"
					class="flex overflow-hidden snap-x snap-mandatory gap-5 relative max-w-full pr-8"
					bind:this={containerEl}
				>
					{#each testimonials as testimonial}
						<div
							class="min-w-[306px] snap-start p-6 border border-bwi-eerie-black rounded-2xl flex flex-col justify-between gap-9"
						>
							<div class="font-oakes leading-relaxed">{testimonial.content}</div>
							<div class="flex gap-4">
								<img
									src={testimonial.imgUrl}
									alt="profile"
									class="max-w-[72px] max-h-[72px] min-w-[72px] min-h-[72px] rounded-full object-cover"
								/>
								<div>
									<div class="font-optima text-lg">{testimonial.name}</div>
									<div class="font-optima text-sm leading-relaxed">{testimonial.position}</div>
								</div>
							</div>
						</div>
					{/each}
				</div>
			</div>

			<div
				transition:fly={{ x: -200, duration: 1000, delay: 500 }}
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
