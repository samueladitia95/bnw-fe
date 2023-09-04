import { pb } from '$lib/pocketbase';
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
	const events = await pb.collection('events').getList(1, 6, {
		filter: 'project_name="bnw"'
	});

	return {
		events
	};
};
