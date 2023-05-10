import { getConcerts, getPage } from '$lib/utils/sanity';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load = (async () => {
	const page = await getPage('season');
	const concerts = await getConcerts();

	if (page && concerts) {
		return {
			page,
			concerts
		};
	}

	throw error(404, 'Not found');
}) satisfies PageLoad;
