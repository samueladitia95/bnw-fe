import { pb } from '$lib/pocketbase';
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
	const banners = await pb.collection('banner_images').getFullList({
		filter: 'project_name="bnw"'
	});

	const basicInformation = await pb
		.collection('basic_informations')
		.getFirstListItem('project_name="bnw"');

	const products = await pb.collection('products').getFullList();

	const events = await pb.collection('events').getList(1, 6);

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
