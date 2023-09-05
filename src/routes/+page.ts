import { pb } from '$lib/pocketbase';
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
	const banners = await pb.collection('banner_images').getFullList({
		filter: 'project_name="bnw"'
	});

	const basicInformation = await pb
		.collection('basic_informations')
		.getFirstListItem('project_name="bnw"');

	const products = await pb.collection('products').getFullList({
		filter: 'project_name="bnw"'
	});
	const events = await pb.collection('events').getList(1, 6, {
		filter: 'project_name="bnw"'
	});

	return {
		banners,
		whoweare: {
			content: basicInformation['who_we_are'],
			img: basicInformation['who_we_are_img']
		},
		visions: {
			mainVision: basicInformation['main_vision'],
			id: basicInformation['id'],
			list: [
				{
					title: basicInformation['vision1_title'],
					content: basicInformation['vision1_content'],
					isOpen: false,
					imgUrl: basicInformation['vision1_img']
				},
				{
					title: basicInformation['vision2_title'],
					content: basicInformation['vision2_content'],
					isOpen: false,
					imgUrl: basicInformation['vision2_img']
				},
				{
					title: basicInformation['vision3_title'],
					content: basicInformation['vision3_content'],
					isOpen: false,
					imgUrl: basicInformation['vision3_img']
				}
			]
		},
		benefits: {
			mainBenefits: basicInformation['main_benefits']
		},
		products,
		events
	};
};
