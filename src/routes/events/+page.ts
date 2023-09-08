import { pb } from '$lib/pocketbase';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ url }) => {
	const maxPage = url.searchParams.get('n') || 1;
	const filterName = url.searchParams.get('q') || '';
	const filterLabel = url.searchParams.get('l') || '';

	const totalFIlter = `${filterName ? 'name~"' + filterName + '"' : ''} ${
		filterLabel ? '&& status="' + filterLabel + '"' : ''
	}`;

	const events = await pb.collection('Events').getList(1, +maxPage * 6, {
		filter: totalFIlter.trim() ? totalFIlter.trim() : ''
	});

	return {
		events
	};
};
