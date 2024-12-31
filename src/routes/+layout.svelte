<script lang="ts">
	import { ModeWatcher } from 'mode-watcher';
	import ThemeToggle from '$lib/components/app/theme-toggle/ThemeToggle.svelte';
	import { i18n } from '$lib/i18n';
	import { ParaglideJS } from '@inlang/paraglide-sveltekit';
	import '../app.css';
	let { children } = $props();
</script>

<ParaglideJS {i18n}>
	<ModeWatcher />
	<ThemeToggle />
	{@render children()}
</ParaglideJS>
