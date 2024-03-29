import { getSingers } from '$lib/utils/sanity';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load = (async () => {
	const singers = await getSingers();

	if (singers) {
		return {
			singers
		};
	}

	throw error(404, 'Not found');
}) satisfies PageLoad;
