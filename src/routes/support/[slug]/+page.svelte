<script lang="ts">
	import { PortableText } from '@portabletext/svelte';
	import { urlFor } from '$lib/utils/image';
	import type { Page } from '$lib/utils/sanity'

	export let data: Page;
</script>

<section>
    {#if data.mainImage}
    <div style="background-image: url({urlFor(data.mainImage).url()});">
        <h1>{data.title}</h1>
    </div>
    {/if}
    <PortableText value={data.content} />
</section>

<style>
    div {
        background-position: center;
        background-size: cover;
        height: 30vh;
    }
    h1 {
        font-size: 3rem;
        font-weight: 600;
        padding: 4rem;
    }

</style>