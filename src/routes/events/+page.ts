import { pb } from '$lib/pocketbase';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ url }) => {
	const maxPage = url.searchParams.get('n') || 1;
	const filterName = url.searchParams.get('q') || '';
	const filterLabel = url.searchParams.get('l') || '';
	const filterUpcoming = `event_start_date > "${new Date().toISOString()}"`;
	const filterPast = `event_start_date <= "${new Date().toISOString()}"`;

	const totalFilter = `${filterName ? 'name~"' + filterName + '"' : ''} ${
		filterLabel ? '&& status="' + filterLabel + '"' : ''
	}`;

	const upcomingEvents = await pb.collection('Events').getList(1, +maxPage * 6, {
		filter: totalFilter.trim() ? `${totalFilter.trim()} && ${filterUpcoming}` : filterUpcoming,
		sort: 'event_start_date'
	});

	const pastEvents = await pb.collection('Events').getList(1, +maxPage * 6, {
		filter: totalFilter.trim() ? `${totalFilter.trim()} && ${filterPast}` : filterPast,
		sort: '-event_end_date'
	});

	const combinedItems = [...upcomingEvents.items, ...pastEvents.items];

	const events = {
		page: 1,
		perPage: upcomingEvents.perPage + pastEvents.perPage, // Adjust this as needed
		totalItems: upcomingEvents.totalItems + pastEvents.totalItems,
		totalPages: Math.ceil(
			(upcomingEvents.totalItems + pastEvents.totalItems) /
				(upcomingEvents.perPage + pastEvents.perPage)
		),
		items: combinedItems
	};

	return {
		events
	};
};
