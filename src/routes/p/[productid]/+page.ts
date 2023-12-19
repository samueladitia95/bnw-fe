import { pb } from '$lib/pocketbase';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
	params.productid;

	const product = await pb.collection('Products').getOne(params.productid);

	return {
		product
	};
};
