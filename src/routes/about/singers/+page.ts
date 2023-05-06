import { getArtists } from '$lib/utils/sanity';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load = (async () => {
	const artists = await getArtists();

	if (artists) {
		return {
			artists
		};
	}

	throw error(404, 'Not found');
}) satisfies PageLoad;
