import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { getSinger } from '$lib/utils/sanity';

export const ssr = false;

export const load = (async ({ params }) => {
	const artist = await getSinger(params.slug);
	if (artist) return artist;

	throw error(404, 'Not found');
}) satisfies PageLoad;
