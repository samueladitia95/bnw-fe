<script lang="ts">
	import OptionIcon from '$lib/assets/svg/option_icon.svelte';
	import { pb } from '$lib/pocketbase';
	import type { RecordModel } from 'pocketbase';
	import { fly } from 'svelte/transition';

	export let selectedProduct: RecordModel;
	export let retailers_image: string;
	export let index: number;

	let isDownloadPrompt = false;

	const toDataURL = async (url: string) => {
		const blob = await fetch(url).then((res) => res.blob());
		return URL.createObjectURL(blob);
	};

	const downloadImage = async () => {
		const a = document.createElement('a');
		a.href = await toDataURL(pb.files.getUrl(selectedProduct, retailers_image));
		a.download = setFileName();
		document.body.appendChild(a);
		a.click();
		document.body.removeChild(a);
		isDownloadPrompt = false;
	};

	const setFileName = () => {
		const allowedFormat = ['jpeg', 'jpg', 'png', 'svg', 'webp'];
		const imageNameArr = retailers_image.split('.');
		const format = imageNameArr[imageNameArr.length - 1];

		return `${selectedProduct.name}_${index + 1}.${
			allowedFormat.includes(format) ? format : 'jpeg'
		}`;
	};
</script>

<div class="rounded-2xl">
	<img
		src={pb.files.getUrl(selectedProduct, retailers_image)}
		alt="retail"
		class="rounded-t-2xl rounded-b"
	/>
	<div
		class={`flex items-center justify-between p-4 rounded-b-2xl ${
			isDownloadPrompt ? 'bg-[#D3D2C8] ' : 'bg-white'
		} relative`}
	>
		<div>{setFileName()}</div>
		<button on:click={() => (isDownloadPrompt = !isDownloadPrompt)}>
			<OptionIcon height="1.5em" width="1.5em" opacity={0.6} />
		</button>
		{#if isDownloadPrompt}
			<div
				class="absolute right-8 top-8 bg-white py-4 px-2 rounded-lg"
				transition:fly={{ duration: 200, y: 50 }}
			>
				<button class="flex gap-1" on:click={() => downloadImage()}>
					<svg
						width="16"
						height="16"
						viewBox="0 0 16 16"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M8 12L3 7L4.4 5.55L7 8.15V0H9V8.15L11.6 5.55L13 7L8 12ZM2 16C1.45 16 0.979167 15.8042 0.5875 15.4125C0.195833 15.0208 0 14.55 0 14V11H2V14H14V11H16V14C16 14.55 15.8042 15.0208 15.4125 15.4125C15.0208 15.8042 14.55 16 14 16H2Z"
							fill="#181817"
						/>
					</svg>
					<div>Download Image</div>
				</button>
			</div>
		{/if}
	</div>
</div>
