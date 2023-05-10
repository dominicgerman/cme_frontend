import { getPage, getSupportPages } from '$lib/utils/sanity';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load = (async () => {
	const page = await getPage('support');
	const pages = await getSupportPages();

	if (page && pages) {
		return {
			page,
			pages
		};
	}

	throw error(404, 'Not found');
}) satisfies PageLoad;
