<script lang="ts">
	import { urlFor } from '$lib/utils/image';
    import type {PageData} from './$types'
    import { PortableText } from '@portabletext/svelte';

    export let data: PageData;
    $: console.log(data)
</script>

<section>
    <h1>Meet the Composers</h1>
    {#if data}
    {#each data.composers as {name, artistLink, mainImage, bio}}
        <h2>
            <a href={artistLink}>
                {name}
            </a>
        </h2>
        <img src={urlFor(mainImage).url()} alt={`Headshot for ${name}`} height="300px">
        <PortableText value={bio} />
    {/each}
    {/if}
</section>