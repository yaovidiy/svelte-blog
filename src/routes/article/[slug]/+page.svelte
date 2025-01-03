<script lang="ts">
	import { languageTag } from '$lib/paraglide/runtime';
	import { page } from '$app/state';
	import { LucideLoaderPinwheel } from 'lucide-svelte';
	import { onMount } from 'svelte';
	import type { Component } from 'svelte';

	let Content = $state<Component | null>(null);

	onMount(async () => {
		Content = (await import(`$lib/articles/${languageTag()}/${page.params.slug}.svx`)) as Component;
	});
</script>

<svelte:head>
	<title>{page.params.slug}</title>
</svelte:head>

<article>
	{#if Content}
		<Content.default />
	{:else}
		<LucideLoaderPinwheel class="mx-auto animate-spin" size="64" />
	{/if}
</article>
