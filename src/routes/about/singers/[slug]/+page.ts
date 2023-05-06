import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { getArtist } from '$lib/utils/sanity';

export const ssr = false;

export const load = (async ({ params }) => {
	const artist = await getArtist(params.slug);
	if (artist) return artist;

	throw error(404, 'Not found');
}) satisfies PageLoad;
