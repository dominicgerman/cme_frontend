<script lang="ts">
	import type { PageData } from './$types';
    import AudioPlayer from '../../../components/AudioPlayer.svelte';

	export let data: PageData;
</script>

<section>
	<div>   
        <AudioPlayer audioURL={data.audioURL} title={data.title} composer={data.composer} />
	</div>
</section>
