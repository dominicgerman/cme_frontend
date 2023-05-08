<script lang="ts">
	export let audioURL: string;
	export let title: string;
	export let composer: object;

	let time: number = 0;
	let duration: number = 0;
	let paused: boolean = true;

	function format(time: number) {
		if (isNaN(time)) return '...';

		const minutes = Math.floor(time / 60);
		const seconds = Math.floor(time % 60);

		return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
	}
</script>

<div class="player" class:paused>
    <audio
    src={audioURL}
    bind:currentTime={time}
    bind:duration
    bind:paused
    on:ended={() => {
		time = 0;
	}}
/>
	<button
		class="play"
		aria-label={paused ? 'play' : 'pause'}
        on:click={() => paused = !paused}
	/>

	<div class="info">
		<div class="description">
			<strong>{title}</strong> /
			<span>{composer}</span>
		</div>

		<div class="time">
			<span>{format(time)}</span>
			<div
				class="slider"
				on:pointerdown={e => {
					const div = e.currentTarget;
					
					function seek(e) {
						const { left, width } = div.getBoundingClientRect();

						let p = (e.clientX - left) / width;
						if (p < 0) p = 0;
						if (p > 1) p = 1;
						
                        time = p * duration;
					}

					seek(e);

					window.addEventListener('pointermove', seek);

					window.addEventListener('pointerup', () => {
						window.removeEventListener('pointermove', seek);
					}, {
						once: true
					});
				}}
			>
				<div class="progress" style="--progress: {time / duration}%" />
			</div>
			<span>{duration ? format(duration) : '--:--'}</span>
		</div>
	</div>
</div>

<style>
	.player {
		display: grid;
		grid-template-columns: 2.5em 1fr;
		align-items: center;
		gap: 1em;
		padding: 0.5em 1em 0.5em 0.5em;
		border-radius: 2em;
		background: var(--light-blue);
		transition: filter 0.2s;
		color: var(--off-white);
		user-select: none;

		margin: 2rem 0;
	}

	.player:not(.paused) {
		color: var(--off-white);
		filter: drop-shadow(0.5em 0.5em 1em rgba(0,0,0,0.1));
	}
	
	button {
		width: 100%;
		aspect-ratio: 1;
		background-repeat: no-repeat;
		background-position: 50% 50%;
		border-radius: 50%;
        background-color: var(--off-white);
	}

	button:hover {
		background-color: var(--white);
	}
	
	[aria-label="pause"] {
		background-image: url(./pause.svg);
	}

	[aria-label="play"] {
		background-image: url(./play.svg);
	}

	.info {
		overflow: hidden;
	}

	.description {
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		line-height: 1.2;
	}

	.time {
		display: flex;
		align-items: center;
		gap: 0.5em;
	}

	.time span {
		font-size: 0.7em;
	}

	.slider {
		flex: 1;
		height: 0.5em;
		background: var(--off-white);
		border-radius: 0.5em;
		overflow: hidden;
	}

	.progress {
		width: calc(100 * var(--progress));
		height: 100%;
		background: var(--dark-blue);
	}
</style>