import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { getAudioTrack } from '$lib/utils/sanity';

export const ssr = false;

export const load = (async ({ params }) => {
	const track = await getAudioTrack(params.slug);
	if (track) return track;

	throw error(404, 'Not found');
}) satisfies PageLoad;
