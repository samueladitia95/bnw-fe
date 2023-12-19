<script lang="ts">
	import { fly } from 'svelte/transition';

	export let name: string;
	export let label: string;
	export let error: string[] | undefined = undefined;
	export let value: string;
	export let type: string = 'text';
</script>

<div class="relative h-11 w-full min-w-[200px] {error ? 'mb-5' : ''}">
	<input
		class="peer text-bwi-eerie-black h-full w-full bg-transparent pt-4 pb-1.5 font-oakes font-normal outline outline-0 transition-all focus:outline-0 {error
			? 'border-bwi-error border-b-2'
			: 'border-black-60%  focus:border-bwi-lion border-b'}"
		placeholder=""
		{...{ type }}
		{name}
		bind:value
		required
	/>
	<div
		class="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-xs font-normal leading-tight transition-all after:absolute after:-bottom-1.5 after:block after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-focus:text-xs peer-focus:leading-tight peer-focus:text-bwi-lion {error
			? 'text-bwi-error  peer-focus:text-bwi-error'
			: 'text-black-60%'}"
	>
		{label}*
	</div>
	{#if error && error.length}
		<div transition:fly={{ y: -20, duration: 300 }} class="text-xs text-bwi-error pt-2">
			{error[0]}
		</div>
	{/if}
</div>
