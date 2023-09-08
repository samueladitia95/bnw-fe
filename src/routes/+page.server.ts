import { schemaContactUs } from '$lib';
import type { Actions } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms/server';
import { fail } from '@sveltejs/kit';
import { pb } from '$lib/pocketbase';

export const actions = {
	default: async ({ request }) => {
		const form = await superValidate(request, schemaContactUs);

		// Convenient validation check:
		if (!form.valid) {
			// Again, always return { form } and things will just work.
			return fail(400, { form });
		}

		const data = {
			sender: form.data.sender,
			name: form.data.name,
			phone_number: form.data.phone,
			subject: form.data.subject,
			message: form.data.message
		};
		await pb.collection('Contact_us').create(data);

		// TODO: Do something with the validated data

		// Yep, return { form } here too
		return { form };
	}
} satisfies Actions;
