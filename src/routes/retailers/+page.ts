import { pb } from '$lib/pocketbase';
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
	const products = await pb.collection('Products').getFullList({
		filter: 'shown = true',
		sort: '-created',
		fields: 'id,collectionId,collectionName,name,retailers_images,img'
	});
	return {
		products
	};
};
