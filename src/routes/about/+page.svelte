<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<section>
	{#if data.pages.length}
		{#each data.pages as page}
        <a href={`/${page.parentRoute}/${page.slug.current}`}>
            <h1>{page.title}</h1>
        </a>
		{/each}
	{:else}
		<h1>You fucked up</h1>
	{/if}
</section>