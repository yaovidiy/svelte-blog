<script lang="ts">
	import ThemeToggle from '$lib/components/app/theme-toggle/ThemeToggle.svelte';
	import LanguageToggle from '$lib/components/app/language-toggle/LanguageToggle.svelte';
	import * as m from '$lib/paraglide/messages';
	import { globalStore } from '$lib/stores/global.svelte';
	import * as Sheet from '$lib/components/ui/sheet';
	import { Menu } from 'lucide-svelte';

	let openSheet = $state(false);
</script>

<header class="mx-auto flex max-w-7xl items-center justify-between p-4">
	<a href="/" class="header text-4xl text-red-300 dark:text-emerald-400 md:text-xl lg:text-5xl">
		SvelteBlog
	</a>
	{#if globalStore.isDesktop}
		<nav>
			<ul class="flex gap-4">
				<li>
					<a href="/" class="transition-colors hover:text-teal-400">
						{m.menu_home()}
					</a>
				</li>
				<li>
					<a href="/article" class="transition-colors hover:text-teal-400">
						{m.menu_articles()}
					</a>
				</li>
				<!-- <li>
					<a href="/about" class="transition-colors hover:text-teal-400">
						{m.menu_about()}
					</a>
				</li> -->
			</ul>
		</nav>
		<div class="flex gap-4">
			<ThemeToggle />
			<LanguageToggle />
		</div>
	{:else}
		<Sheet.Root bind:open={openSheet}>
			<Sheet.Trigger class="text-2xl">
				<Menu />
			</Sheet.Trigger>
			<Sheet.Content side="left">
				<ul class="mb-4 space-y-4">
					<li>
						<a
							onclick={() => (openSheet = false)}
							href="/"
							class="transition-colors hover:text-teal-400"
						>
							{m.menu_home()}
						</a>
					</li>
					<li>
						<a
							onclick={() => (openSheet = false)}
							href="/article"
							class="transition-colors hover:text-teal-400"
						>
							{m.menu_articles()}
						</a>
					</li>
					<!-- <li>
						<a href="/about" class="transition-colors hover:text-teal-400">
							{m.menu_about()}
						</a>
					</li> -->
				</ul>
				<div class="flex items-center gap-4">
					<ThemeToggle />
					<LanguageToggle />
				</div>
			</Sheet.Content>
		</Sheet.Root>
	{/if}
</header>
