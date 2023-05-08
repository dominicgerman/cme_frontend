<script lang="ts">
	import type { PageData } from './$types';
    import AudioPlayer from '../../components/AudioPlayer.svelte';
    export let data: PageData;
</script>

<section>
    <h1>Listen page</h1>
    {#each data.tracks as track}
        <AudioPlayer {...track} />
    {/each}
</section>