<script lang="ts">
    import Card from '../../../components/Card.svelte';
    import type {PageData} from './$types'

    export let data: PageData;
</script>

<section>
    <h1>
    <strong>
        Singers
    </strong>    
    </h1>
    <div>
        {#if data.artists.length}
        {#each data.artists as artist}
        <Card {artist} />           
        {/each}        
        {/if}
    </div>
</section>

<style>
    h1 {
		font-size: 2rem;
        margin: 3rem 0rem;
        text-align: center;
	}
    div {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        justify-items: center;
        row-gap: 3rem;
    }
</style>