<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<section>
	{#if data.concerts.length}
		{#each data.concerts as concert}
        <a href={`/concerts/${concert.slug.current}`}>
            <h1>{concert.title}</h1>
        </a>
		{/each}
	{:else}
		<h1>You fucked up</h1>
	{/if}
</section>