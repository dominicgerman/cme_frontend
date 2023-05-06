<script lang="ts">
	import { PortableText } from '@portabletext/svelte';
	import { urlFor } from '$lib/utils/image';
	import type {Page} from '$lib/utils/sanity'

	export let data: Page;
</script>

<section>
	{#if data.mainImage}
		<img
			src={urlFor(data.mainImage).url()}
			alt="Cover image for {data.title}"
			height="300px"
		/>	
    {/if}
	<h1>{data.title}</h1>
    <PortableText value={data.content} />

</section>
