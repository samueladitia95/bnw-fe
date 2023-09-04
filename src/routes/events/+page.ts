import { pb } from '$lib/pocketbase';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ url }) => {
	const page = url.searchParams.get('n') || 1;
	const filterName = url.searchParams.get('q') || '';
	const filterLabel = url.searchParams.get('label') || '';

	const events = await pb.collection('events').getList(+page, 6, {
		filter: `project_name="bnw" ${filterName ? '&& name~"' + filterName + '"' : ''} ${
			filterLabel ? '&& label="' + filterLabel + '"' : ''
		}`
	});

	return {
		events
	};
};
