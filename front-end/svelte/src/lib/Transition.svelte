<script>
	import { fade, fly } from 'svelte/transition';
	let visible = true;
</script>

<label>
	<input type="checkbox" bind:checked={visible}>
	visible
</label>

{#if visible}
	<p transition:fade>
		Fades in and out
	</p>
{/if}

{#if visible}
	<p transition:fly="{{ x: 50, duration: 1000 }}">
		Fades in and out
	</p>
{/if}