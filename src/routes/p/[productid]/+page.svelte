<script lang="ts">
	import BrandContainer from '$lib/containers/ProductDetail/BrandContainer.svelte';
	import IntroContainer from '$lib/containers/ProductDetail/IntroContainer.svelte';
	import MarketingContainer from '$lib/containers/ProductDetail/MarketingContainer.svelte';

	import { isTopbarBackground, isTransparent } from '$lib/store';
	import { onMount } from 'svelte';
	import type { PageData } from './$types';
	import { pb } from '$lib/pocketbase';
	import InstaCarausel from '$lib/containers/ProductDetail/InstaCarausel.svelte';

	export let data: PageData;

	onMount(() => {
		isTopbarBackground.set(false);
		isTransparent.set(true);
		// isTopbarLight.set(true);
	});

	const brandCarausel: string[] = data.product.brand_carausel;
	const socialMediaImgs: string[] = data.product.img_social_media;
	const opinionImgs: string[] = data.product.img_key_opinion_leaders;
</script>

<div>
	<IntroContainer imgCover={pb.files.getUrl(data.product, data.product.img_cover)} />
	<BrandContainer
		title={data.product.brand_title}
		desc={data.product.brand_desc}
		carauselImages={brandCarausel.map((el) => {
			return pb.files.getUrl(data.product, el);
		})}
	/>
	<MarketingContainer
		marketingDesc={data.product.marketing_desc}
		socialMediaImgs={socialMediaImgs.map((el) => {
			return pb.files.getUrl(data.product, el);
		})}
		socialMediaDesc={data.product.social_media_desc}
		advertisementVideoUrl={data.product.advertisement_video_url}
		advertisementDesc={data.product.advertisement_desc}
		opinionDesc={data.product.key_opinion_leaders_desc}
		opinionImgs={opinionImgs.map((el) => {
			return pb.files.getUrl(data.product, el);
		})}
	/>
	<InstaCarausel />
</div>
