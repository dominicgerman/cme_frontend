<script lang="ts">
	import { PortableText } from '@portabletext/svelte';
	import { urlFor } from '$lib/utils/image';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<section>
	{#if data.mainImage}
		<img
			src={urlFor(data.mainImage).url()}
			alt="Cover image for {data.title}"
			height="300px"
		/>	
    {/if}
	<div>
		<h1 class="post__title">{data.title}</h1>
		<div>
			<PortableText value={data.description} />
		</div>
	</div>
</section>
