import type { PortableTextBlock } from '@portabletext/types';
import { createClient } from '@sanity/client';
import type { ImageAsset, Slug } from '@sanity/types';
import groq from 'groq';

import { PUBLIC_SANITY_DATASET, PUBLIC_SANITY_PROJECT_ID } from '$env/static/public';

if (!PUBLIC_SANITY_PROJECT_ID || !PUBLIC_SANITY_DATASET) {
	throw new Error('Did you forget to run sanity init --env?');
}

export const client = createClient({
	projectId: PUBLIC_SANITY_PROJECT_ID,
	dataset: PUBLIC_SANITY_DATASET,
	useCdn: false, // `false` if you want to ensure fresh data
	apiVersion: '2023-03-20' // date of setup
});

// /////////////// PAGES //////////////// //

export async function getPages() {
	return await client.fetch(
		groq`*[_type == "genericPage" && defined(slug.current)] | order(_createdAt desc)`
	);
}

export async function getPage(slug: string) {
	return await client.fetch(groq`*[_type == "genericPage" && slug.current == $slug][0]`, {
		slug
	});
}

export interface Page {
	_type: 'genericPage';
	_createdAt: string;
	title: string;
	slug: Slug;
	content: PortableTextBlock[];
	mainImage?: ImageAsset;
	parentRoute: string;
}

// /////////////// ARTISTS //////////////// //

export async function getArtists() {
	return await client.fetch(
		groq`*[_type == "artist" && defined(slug.current)] | order(_createdAt desc)`
	);
}

export async function getArtist(slug: string) {
	return await client.fetch(groq`*[_type == "artist" && slug.current == $slug][0]`, {
		slug
	});
}

export interface Artist {
	_type: 'artist';
	_createdAt: string;
	name: string;
	role: string;
	mainImage?: ImageAsset;
	slug: Slug;
	bio: PortableTextBlock[];
	voicePart: string;
}

// /////////////// CONCERTS //////////////// //

export async function getConcerts() {
	return await client.fetch(
		groq`*[_type == "concert" && defined(slug.current)] | order(_createdAt desc)`
	);
}

export async function getConcert(slug: string) {
	return await client.fetch(groq`*[_type == "concert" && slug.current == $slug][0]`, {
		slug
	});
}

export interface Concert {
	_type: 'concert';
	_createdAt: string;
	title?: string;
	slug: Slug;
	mainImage?: ImageAsset;
	description: PortableTextBlock[];
	performance1: object;
	performance2: object;
}
