import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { getPage } from '$lib/utils/sanity';

export const ssr = false;

export const load = (async ({ params }) => {
	const page = await getPage(params.slug);
	if (page) return page;

	throw error(404, 'Not found');
}) satisfies PageLoad;
