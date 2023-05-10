<script lang="ts">
    import type { PageData } from "./$types";
    import { PortableText } from "@portabletext/svelte";

    export let data: PageData;
</script>

<section>
    <h1>About page</h1>
    {#each data.pages as {title, slug}}
        <h3><a href={`/about/${slug.current}`}>{title}</a></h3>
    {/each}
</section>