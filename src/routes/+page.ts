import { pb } from '$lib/pocketbase';
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
	const banners = await pb.collection('banner_images').getFullList({
		filter: 'project_name = "bnw"'
	});

	return {
		banners
	};
};
