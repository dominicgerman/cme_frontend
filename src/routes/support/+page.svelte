<script lang="ts">
	import { urlFor } from "$lib/utils/image";
	import { PortableText } from "@portabletext/svelte";
    import type { PageData } from "./$types";

    export let data: PageData;
</script>

<section>
    <h1>Support page</h1>
    <img src={urlFor(data.page.mainImage).url()} alt="" width="900px">
    

    {#each data.pages as {title, slug}}
        <h3><a href={`/about/${slug.current}`}>{title}</a></h3>
    {/each}
</section>

<style>
    section {
		max-width: 900px;
		margin: 0 auto;
	}
    h1 {
		font-size: 4rem;
		text-align: center;
	}
</style>