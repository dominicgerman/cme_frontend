import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { getSinger } from '$lib/utils/sanity';

export const ssr = false;

export const load = (async ({ params }) => {
	const singer = await getSinger(params.slug);
	if (singer) return singer;

	throw error(404, 'Not found');
}) satisfies PageLoad;
