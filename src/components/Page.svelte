<script lang="ts">
    import { PortableText } from '@portabletext/svelte';
	import { urlFor } from '$lib/utils/image';
    // import type { Page } from '$lib/utils/sanity'


    export let page: any;
</script>

<section>
    {#if page.mainImage}
    <div style={`background-image: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.7),
        rgba(0, 0, 0, 0.7)
    ), url(${urlFor(page.mainImage).url()});`}>
        <h1>{page.title}</h1>
    </div>
    {/if}
    <PortableText value={page.content} />
</section>

<style>
    div {
        background-position: center;
        background-size: cover;
        height: 40vh;
    }
    h1 {
        font-size: 3rem;
        font-weight: 600;
        padding: 6rem 4rem;
    }

</style>