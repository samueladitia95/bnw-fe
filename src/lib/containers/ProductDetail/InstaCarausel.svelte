<script lang="ts">
	import '@splidejs/svelte-splide/css';
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
	import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
	import { inview } from 'svelte-inview';
	import { fade, fly } from 'svelte/transition';

	const instaDummy: string[] = [
		'https://s3-alpha-sig.figma.com/img/2ecd/14bf/614e40ce59bd3c9730fb0a4dafc20e5a?Expires=1699228800&Signature=gWp5Xe-2MgUzyO8WMa~F00PpViC3uRKNOhvsugzgaAtZVb59bYvYnVhlXbRZej-4BzBcg8DFj7D-kSBbKABEYBQ62eFdxmpdhWC2NJUnzD5dX128cElad-QhhXoFTNVraj~tVURHnUumecSE9wbu822XHjQH0E-PR15RU3QIgD86Ja-QdUSzXLytoKKR38cjUXFl1M0mIS4XQcN7lYAJ5QVgocAMBeVVuRWguBNOpoNKcaNfQa1y2v1NF3hTAo9c4EE3i0Z3S4lQx5cjU5KR4efD9q4DTAYaifD5zhfW-lLWLdo85StMODlCCTKxyxk1~1UZifxXZ9ra5xGCfZDdBg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
		'https://s3-alpha-sig.figma.com/img/9f54/2598/1a2ebb2f51e8863128af67bfe1af0ae8?Expires=1699228800&Signature=IhdP9hRTa41qSLdtb1PNpVvIAMqcK6sOGYXBwB3gIB1JPxL~S9OW78gFe-lj5yw0zsmG4Gk~8QI2UTaPVV2xLIQkak0YGuJUSL14RYWBvu6bqJgAXWlkXl6rQXVI7paYjLJy1sNUwTheT16PtUxRuKVs4iIi9cE~T6V4AMyi14El5IWGTrtaEFgHfncr1IF1WSht-avYFFkZDZeHhbhn8ScJWPDTOxfg1kdKRlSxAFLMrnMUl7UiqzTPJ4g7lmYFK5sLoZfOMI5FwfnJmdEYBDxsJIsJ1RClqbgYESw9iM6v7YojFMTow~NQFehPYPJR-UdwfkXFnXUscwiJdoepgQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
		'https://s3-alpha-sig.figma.com/img/adbf/0288/eb2157e9720a97f7cd8e3cfc1c802cbf?Expires=1699228800&Signature=KP8pmPy6Krk0Vk4eX2NbnQ-UX074iZUwQwHq-oC5TJcA8~xeYknAA99MV7uzPscyyiSq-Mtx6uH56BoYlZYz3vMBtsznHoaqn677uEz~0SGy8I5B~fWOMhPona4GqS3heKj3Oe-mUIw3l-2xIq2Fq0A3G1XA3TkBlgmwF7x9BK0O6K-WWOlSSDyivtjAuYj4j39o50HLE7sltcFPXUG~0uF-PgQYi21alFToHkBKMP7A6bVH5uh65gpIVqBDFg1vbbtnODXYuobPG3fLgiDY9l9kf2G6-AP4U9ei7VpLBwJkuKK8nvhVfut0BmRvW-wnDcX5SN2oaT5MlAQogc~SKQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
		'https://s3-alpha-sig.figma.com/img/f917/311b/00c18d33415dc2fb8ebca26d701c6ab7?Expires=1699228800&Signature=B4yZIgdsW50nCbVw4tW4CZZItnt4Hsz4qnh0JvfATCCUb5YZPaBz~G6RTy~YyQoWX5j4iiVtJXwzOfZK3JMSBsJnfRfwWXd31ucNMaKWo0AdTM9y58qTHNl2cKIEdcXvhjxuyCRYoklheb3sZwDJlFgqwBCXrqHgQ-hylWJ8ay~v5Oy2E-~OOgos-gR~sYJWdw8aL7XhPi7s4a3j6Q9QXT39C~Lhi1~J9wBmM7wLy6QmPhRm~hI8tcOkNLF9nnspBWGIQCF8sKHbM4hI05oDbIBdX1EFy5L1fqbqMQINKjG20pYoVWFXzvtQd4IBdQTOvA9M3KbbfqUhjFusY7ZCDA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
		'https://s3-alpha-sig.figma.com/img/3607/a2fd/64914285875c196b12a68ef68d9908dc?Expires=1699228800&Signature=dxFDfdtSuKu64L0mYbmpn7qaTv97rcCiVw0pcUKFVo~dHZ60WXN911gmidg00yujHD1wrinw~D4eAyX4GM0RTo3qeglxF5UJAsh3K-eoqdPmKvfThoocvurYkR1K-WbPNdMskgUJDUU3uuC0v9~q7aP0RBZUDg8mYOuZMllTAvzvqn7ICUkkwbTeNp5d6dlUPlvrGZpt6A-DHBAhwVdR-2Jhvy1TNydWf~H~E8Kv9Tr4KsKqeMmiiailZPiftyfgVGV4uyKuxcaumgidQpMvEVIZ0xmk4oyw7xy0Sigg7aomqcd-tS7bqMa01RFdJ40yHRIPZtTggAV-OG3xsHMcrA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
	];

	let isShow: boolean = false;

	const handleChange = ({ detail }: CustomEvent<ObserverEventDetails>) => {
		if (!isShow && detail.inView) isShow = true;
	};
</script>

<div
	use:inview={{
		rootMargin: '-100px',
		unobserveOnEnter: true
	}}
	on:inview_change={handleChange}
	class="py-28 bg-bwi-alabaster"
>
	<div transition:fade={{ duration: 1000, delay: 1500 }}>
		<Splide
			aria-label="invite countdown carausel"
			extensions={{ AutoScroll }}
			options={{
				arrows: false,
				pagination: false,
				type: 'loop',
				gap: '24px',
				autoScroll: {
					rewind: true
				},
				autoWidth: true
			}}
		>
			{#each instaDummy as image}
				<SplideSlide>
					<img src={image} alt="invite" class="object-cover w-[184px] h-[184px] md:w-[271px] md:h-[271px] rounded" />
				</SplideSlide>
			{/each}
		</Splide>
	</div>
</div>
