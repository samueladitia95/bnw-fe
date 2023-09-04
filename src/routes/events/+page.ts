import { pb } from '$lib/pocketbase';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ url }) => {
	const maxPage = url.searchParams.get('n') || 1;
	const filterName = url.searchParams.get('q') || '';
	const filterLabel = url.searchParams.get('l') || '';

	const events = await pb.collection('events').getList(1, +maxPage * 6, {
		filter: `project_name="bnw" ${filterName ? '&& name~"' + filterName + '"' : ''} ${
			filterLabel ? '&& label="' + filterLabel + '"' : ''
		}`
	});

	return {
		events
	};
};
