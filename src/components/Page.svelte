<script lang="ts">
    import { PortableText } from '@portabletext/svelte';
	import { urlFor } from '$lib/utils/image';
    import type { Page } from '$lib/utils/sanity'


    export let page: Page;
</script>

<section>
    {#if page.mainImage}
    <div style={`background-image: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.7),
        rgba(0, 0, 0, 0.7)
    ), url(${urlFor(page.mainImage).url()});`}
        class="banner"
    >
        <h1>{page.title}</h1>
    </div>
    {/if}
    {#each page.content as contentBlock}
        <div class="content">
            {#if contentBlock.blockImage}
            <img src={urlFor(contentBlock.blockImage).url()} alt="" height="300px">
            {/if}
            <div>
                <PortableText value={contentBlock.blockText} />
            </div>
        </div>
    {/each}
</section>

<style>
    .banner {
        background-position: center;
        background-size: cover;
        height: 40vh;
        margin-bottom: 3rem;
    }
    h1 {
        font-size: 3rem;
        font-weight: 600;
        padding: 6rem 4rem;
    }
    .content {
        display: flex;
        gap: 2rem;
        align-items: center;
        justify-content: center;

        max-width: 900px;
        margin: 2rem auto;
    }
</style>