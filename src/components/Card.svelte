<script lang="ts">
	import { PortableText } from '@portabletext/svelte';
	import { urlFor } from '$lib/utils/image';
	import type { Artist } from '$lib/utils/sanity';

	export let artist: Artist;
</script>

<div>
	{#if artist.mainImage}
		<img
			src={urlFor(artist.mainImage).width(300).height(300).url()}
			alt="Cover image for {artist.name}"
		/>
	{:else}
		null
	{/if}

	<div>
		<h3>
			<a href={`/about/singers/${artist.slug.current}`}>
				{artist.name},
			</a>
			{artist.voicePart}
		</h3>
	</div>
</div>

<style>
	h3 {
		margin-bottom: 2rem;
	}
</style>