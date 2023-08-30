import { pb } from '$lib/pocketbase';
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
	const banners = await pb.collection('banner_images').getFullList({
		filter: 'project_name="bnw"'
	});
	const basicInformation = await pb
		.collection('basic_informations')
		.getFirstListItem('project_name="bnw"');

	return {
		banners,
		whoweare: {
			content: basicInformation['who_we_are'],
			img: basicInformation['who_we_are_img']
		},
		visions: {
			mainVision: basicInformation['main_vision']
		},
		benefits: {
			mainBenefits: basicInformation['main_benefits']
		}
	};
};
