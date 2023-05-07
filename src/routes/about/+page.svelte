<script lang="ts">
    import type { PageData } from "./$types";
    import { PortableText } from "@portabletext/svelte";

    export let data: PageData;
    $: console.log(data)
</script>

<section>
    <h1>About page</h1>
    {#each data.pages as {title, slug}}
        <h2><a href={`/about/${slug.current}`}>{title}</a></h2>
    {/each}
</section>