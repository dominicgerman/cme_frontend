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

// /////////////// ALL PAGES //////////////// //

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

// /////////////// ABOUT //////////////// //

export async function getAboutPages() {
	return await client.fetch(
		groq`*[_type == "genericPage" && parentRoute == "about" && defined(slug.current)] | order(_createdAt desc)`
	);
}
// /////////////// LISTEN //////////////// //

export async function getListenPages() {
	return await client.fetch(
		groq`*[_type == "genericPage" && parentRoute == "listen" && defined(slug.current)] | order(_createdAt desc)`
	);
}
// /////////////// SUPPORT //////////////// //

export async function getSupportPages() {
	return await client.fetch(
		groq`*[_type == "genericPage" && parentRoute == "support" && defined(slug.current)] | order(_createdAt desc)`
	);
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

// /////////////// SINGERS //////////////// //

export async function getSingers() {
	return await client.fetch(
		groq`*[_type == "artist" && role == "singer" && defined(slug.current)] | order(_createdAt desc)`
	);
}

export async function getSinger(slug: string) {
	return await client.fetch(
		groq`*[_type == "artist" && role == "singer" && slug.current == $slug][0]`,
		{
			slug
		}
	);
}

// /////////////// COMPOSERS //////////////// //

export async function getComposers() {
	return await client.fetch(
		groq`*[_type == "artist" && role == "composer" && defined(slug.current)] | order(_createdAt desc)`
	);
}

export async function getComposer(slug: string) {
	return await client.fetch(
		groq`*[_type == "artist" && role == "composer" && slug.current == $slug][0]`,
		{
			slug
		}
	);
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

// /////////////// AUDIO TRACKS //////////////// //

export async function getAudioTracks() {
	return await client.fetch(
		groq`*[_type == "audio" && defined(slug.current)] {
			title,
			composer,
			"audioURL": audioFile.asset->url
		} | order(_createdAt desc)`
	);
}

export async function getAudioTrack(slug: string) {
	return await client.fetch(
		groq`*[_type == "audio" && slug.current == $slug][0] {
			title,
			composer,
			"audioURL": audioFile.asset->url
		}`,
		{
			slug
		}
	);
}
