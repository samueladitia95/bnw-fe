import { schemaContactUs } from '$lib';
import type { Actions } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms/server';
import { fail } from '@sveltejs/kit';

export const actions = {
	contact: async ({ request }) => {
		const form = await superValidate(request, schemaContactUs);
		console.log('POST', form);

		// Convenient validation check:
		if (!form.valid) {
			// Again, always return { form } and things will just work.
			return fail(400, { form });
		}

		// TODO: Do something with the validated data

		// Yep, return { form } here too
		return { form };
	}
} satisfies Actions;
