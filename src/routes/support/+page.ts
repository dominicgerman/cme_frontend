import { getSupportPages } from '$lib/utils/sanity';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load = (async () => {
	const pages = await getSupportPages();

	if (pages) {
		return {
			pages
		};
	}

	throw error(404, 'Not found');
}) satisfies PageLoad;
