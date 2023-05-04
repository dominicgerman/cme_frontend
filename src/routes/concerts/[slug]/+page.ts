import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { getConcert } from '$lib/utils/sanity';

export const ssr = false;

export const load = (async ({ params }) => {
	const concert = await getConcert(params.slug);
	if (concert) return concert;

	throw error(404, 'Not found');
}) satisfies PageLoad;
