<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<section>
	{#if data.pages.length}
	<h1>These are all the generic pages</h1>
		{#each data.pages as page}
		<h2>
			<a href={`/${page.parentRoute}/${page.slug.current}`}>
				{page.title}
			</a>
		</h2>
		{/each}
	{:else}
		<h1>You fucked up</h1>
	{/if}
</section>

<style>
	h1 {
		font-size: 3rem;
	}

	h2 {
		margin: 1rem;
	}
</style>