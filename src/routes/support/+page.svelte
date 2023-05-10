<script lang="ts">
    import type { PageData } from "./$types";

    export let data: PageData;
</script>

<section>
    <h1>Support page</h1>
    {#each data.pages as {title, slug}}
        <h3><a href={`/about/${slug.current}`}>{title}</a></h3>
    {/each}
</section>