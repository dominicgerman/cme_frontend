<script lang="ts">
	import { PortableText } from '@portabletext/svelte';
	import { urlFor } from '$lib/utils/image';
	// import type { PageData } from './$types';
	import type { Concert } from '$lib/utils/sanity';

	export let data: Concert;
</script>

<section>
	<h1>{data.title}</h1>
	<div class="concert">
		{#if data.mainImage}
			<img
			src={urlFor(data.mainImage).url()}
			alt="Cover image for {data.title}"
			height="300px"
			/>	
		{/if}
		<div class="concertDetails">
			<div>
				<h4>{data.performance1.dateTime}</h4>
				<p>{data.performance1.venue}</p>
				<button><a href={data.performance1.ticketsLink}>Get tickets</a></button>
			</div>
			<div>
				<h4>{data.performance2.dateTime}</h4>
				<p>{data.performance2.venue}</p>
				<button><a href={data.performance2.ticketsLink}>Get tickets</a></button>
			</div>
		</div>
	</div>
	<PortableText value={data.description} />
</section>

<style>
	section {
		max-width: 900px;
		margin: 0 auto;	
	}
	h1 {
		font-size: 3rem;
		margin-bottom: 2rem;
	}
	a {
		color: var(--black);
		text-decoration: none;
	}
	h4 {
		font-size: 1.2rem;
		font-weight: 600;
	}
	.concert {
		display: flex;
		align-items: center;
		gap: 3rem;
		margin-bottom: 2rem;
	}
	.concertDetails {
		display: flex;
		flex-direction: column;
		gap: 3rem;
	}
</style>
