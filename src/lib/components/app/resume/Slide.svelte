<script lang="ts">
	import type { Snippet } from 'svelte';
	import { fade, fly } from 'svelte/transition';
	import { ScrollArea } from '$lib/components/ui/scroll-area';

	let {
		children
	}: {
		children?: Snippet;
	} = $props();
</script>

<section
	in:fly={{ x: 300, duration: 300, delay: 300 }}
	out:fade={{ duration: 250 }}
	class="full-screen flex max-w-full items-center justify-center px-4 py-2 md:px-8 md:py-4"
>
	<ScrollArea class="h-full w-full">
		{#if children}
			{@render children()}
		{:else}
			<div class="flex flex-col items-center justify-center">
				<h1 class="text-center text-4xl font-bold">Hi, I'm John Doe</h1>
				<p class="text-center text-lg">I'm a full-stack developer</p>
				<div class="flex items-center justify-center">
					<a href="#about" class="btn btn-primary">About Me</a>
					<a href="#contact" class="btn btn-secondary">Contact Me</a>
				</div>
			</div>
		{/if}
	</ScrollArea>
</section>

<style>
	.full-screen {
		height: calc(100vh - 10rem);
	}
</style>
