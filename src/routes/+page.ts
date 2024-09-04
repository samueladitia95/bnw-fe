import { pb } from '$lib/pocketbase';
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
	const banners = await pb.collection('Banners').getFullList();

	const basicInformation = await pb.collection('Basic_Info').getFirstListItem('project_name="bnw"');

	const products = await pb.collection('Products').getList(1, 3, {
		filter: 'shown = true',
		sort: '-created'
	});

	// events logic
	const filterUpcoming = `event_start_date > "${new Date().toISOString()}"`;
	const filterPast = `event_start_date <= "${new Date().toISOString()}"`;

	const upcomingEvents = await pb.collection('Events').getList(1, 6, {
		filter: filterUpcoming,
		sort: 'event_start_date'
	});

	const pastEvents = await pb.collection('Events').getList(1, 6, {
		filter: filterPast,
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

	//end of event logic

	const benefits = await pb.collection('Benefits').getList(1, 3);
	const visions = await pb.collection('Vision_and_Missions').getList(1, 3);

	return {
		banners,
		whoweare: {
			content: basicInformation['who_we_are'],
			videoLink: basicInformation['videoLink']
		},
		visions: {
			mainVision: basicInformation['main_vision'],
			list: visions
		},
		benefits: {
			mainBenefit: basicInformation['main_benefit'],
			list: benefits
		},
		products,
		events
	};
};
