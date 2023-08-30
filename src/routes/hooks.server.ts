import { createInstance } from '$lib/pocketbase';
import type { Handle } from '@sveltejs/kit';

export const handle = (async ({ event, resolve }) => {
	const pb = createInstance();

	// set pocketbase instance to local
	event.locals.pb = pb;

	const response = await resolve(event);

	// send back the default 'pb_auth' cookie to the client with the latest store state
	response.headers.set('set-cookie', pb.authStore.exportToCookie({ httpOnly: false }));

	return response;
}) satisfies Handle;
