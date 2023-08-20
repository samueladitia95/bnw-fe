import { schemaContactUs } from '$lib';
import { superValidate } from 'sveltekit-superforms/server';

export const load = async () => {
	const form = await superValidate(schemaContactUs);

	return { form };
};
