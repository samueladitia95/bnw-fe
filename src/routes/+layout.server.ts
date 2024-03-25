import { schemaContactUs } from '$lib';
import { pb } from '$lib/pocketbase';
import { superValidate } from 'sveltekit-superforms/server';

export const load = async () => {
	const form = await superValidate(schemaContactUs);
	const basicInformation = await pb.collection('Basic_Info').getFirstListItem('project_name="bnw"');

	return {
		form,
		socialMedia: {
			youtube: basicInformation['youtube_social_media_link'],
			instagram: basicInformation['instagram_social_media_link'],
			whatsapp: basicInformation['whatsapp_social_media_link']
		}
	};
};
