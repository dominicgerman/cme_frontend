import { getConcerts } from '$lib/utils/sanity';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load = (async () => {
	const concerts = await getConcerts();

	if (concerts) {
		return {
			concerts
		};
	}

	throw error(404, 'Not found');
}) satisfies PageLoad;
