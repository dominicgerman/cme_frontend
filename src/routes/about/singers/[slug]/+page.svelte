<script lang="ts">
	import { PortableText } from '@portabletext/svelte';
	import { urlFor } from '$lib/utils/image';
    import type { Artist } from '$lib/utils/sanity'; 

	export let data: Artist;
</script>

<section>
    {#if data.mainImage}
    <img
    src={urlFor(data.mainImage).url()}
    alt="Cover image for {data.name}"
			height="300px"
            />	
    {/if}
    <div>
        <h1>{data.name}, {data.voicePart}</h1>
		<div class="bio">
			<PortableText value={data.bio} />
		</div>
	</div>
</section>

<style>
    section {
        max-width: 600px;
        margin: 0 auto;
    }
    h1 {
        margin: 1rem 0;
    }
    .bio {
        line-height: 1.4rem;
    }
</style>