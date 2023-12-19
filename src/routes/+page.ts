import { pb } from '$lib/pocketbase';
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
	const banners = await pb.collection('Banners').getFullList();

	const basicInformation = await pb.collection('Basic_Info').getFirstListItem('project_name="bnw"');

	const products = await pb.collection('Products').getList(1, 3, {
		filter: 'shown = true',
		sort: '-created'
	});

	const events = await pb.collection('Events').getList(1, 6);

	const benefits = await pb.collection('Benefits').getList(1, 3);
	const visions = await pb.collection('Vision_and_Missions').getList(1, 3);

	return {
		banners,
		whoweare: {
			content: basicInformation['who_we_are']
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
