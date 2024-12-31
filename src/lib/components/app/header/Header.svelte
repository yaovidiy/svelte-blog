<script lang="ts">
	import ThemeToggle from '$lib/components/app/theme-toggle/ThemeToggle.svelte';
	import LanguageToggle from '$lib/components/app/language-toggle/LanguageToggle.svelte';
	import * as m from '$lib/paraglide/messages';
</script>

<header class="flex items-center justify-between p-4">
	<a href="/" class="header text-lg dark:text-emerald-400 text-red-300 md:text-xl lg:text-5xl"> SvelteBlog </a>
	<nav>
		<ul class="flex gap-4">
			<li>
				<a href="/" class="hover:text-teal-400 transition-colors">
					{m.menu_home()}
				</a>
			</li>
			<li>
				<a href="/articles" class="hover:text-teal-400 transition-colors">
					{m.menu_articles()}
				</a>
			</li>
			<li>
				<a href="/about" class="hover:text-teal-400 transition-colors">
					{m.menu_about()}
				</a>
			</li>
		</ul>
	</nav>
	<div class="flex gap-4">
		<ThemeToggle />
		<LanguageToggle />
	</div>
</header>
