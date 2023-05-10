<script lang="ts">
	import { urlFor } from '$lib/utils/image';
	import type { PageData } from './$types';

	export let data: PageData;
	$: console.log(data)
</script>

<section>
	<h1>Our 9th Season</h1>
	<img src={urlFor(data.page.mainImage).url()} alt="" width="900px">
	{#if data.concerts.length}
	<div>
		{#each data.concerts as concert}
        <a href={`/season/${concert.slug.current}`}>
            <h3>{concert.title}</h3>
        </a>
		{/each}
	</div>
	{/if}
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
	div {
		display: flex;
		justify-content: space-between;
	}
</style>