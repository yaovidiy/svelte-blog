<script lang="ts">
	import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';
	import { ModeWatcher } from 'mode-watcher';
	import { Toaster } from '$lib/components/ui/sonner';
	import Header from '$lib/components/app/header/Header.svelte';
	import { i18n } from '$lib/i18n';
	import { ParaglideJS } from '@inlang/paraglide-sveltekit';
	import '../app.css';

	let { children } = $props();

	injectSpeedInsights();
</script>

<ParaglideJS {i18n}>
	<Toaster />
	<ModeWatcher />
	<Header />
	<main class="max-w-7xl p-4 mx-auto">
		{@render children()}
	</main>
</ParaglideJS>
