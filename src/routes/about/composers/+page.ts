import { getComposers } from '$lib/utils/sanity';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load = (async () => {
	const composers = await getComposers();

	if (composers) {
		return {
			composers
		};
	}

	throw error(404, 'Not found');
}) satisfies PageLoad;
