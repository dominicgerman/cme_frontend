import { getAudioTracks } from '$lib/utils/sanity';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load = (async () => {
	const tracks = await getAudioTracks();

	if (tracks) {
		return {
			tracks
		};
	}

	throw error(404, 'Not found');
}) satisfies PageLoad;
