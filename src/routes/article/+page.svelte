<script lang="ts">
	import { languageTag, type AvailableLanguageTag } from '$lib/paraglide/runtime';
	import * as m from '$lib/paraglide/messages';
	import { fly } from 'svelte/transition';

	type ArticleDesctiption = {
		title: string;
		slug: string;
		createdAt: string;
		shortDescription: string;
	};

	const articles: Record<AvailableLanguageTag, ArticleDesctiption[]> = {
		en: [
			{
				title: 'My First Post',
				slug: 'WhatIsSvelte',
				createdAt: '01-01-2025',
				shortDescription: 'Everyone starts somewhere and this is my beginning to work on this blog'
			}
		],
		uk: [
			{
				title: 'Мій перший Пост',
				slug: 'WhatIsSvelte',
				createdAt: '01-01-2025',
				shortDescription: 'Всі десь починають і це мій початок для роботи над цим блогом'
			},
			{
				title: 'Що таке Runes',
				slug: 'WhatIsRunes',
				createdAt: '08-03-2025',
				shortDescription: 'Runes - це новий підхід до роботи зі Svelte та покращення його функціональності'
			}
		]
	};
</script>

<svelte:head>
	<title>Articles</title>
</svelte:head>
<section class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
	{#each articles[languageTag()] as article}
		<div
			transition:fly={{ x: 100 }}
			class="rounded-lg border border-gray-200 p-4 dark:border-gray-800"
		>
			<h2 class="text-xl font-bold">{article.title}</h2>
			<p class="text-gray-500 dark:text-gray-400">{article.shortDescription}</p>
			<p class="text-xs text-gray-500 dark:text-gray-400">{article.createdAt}</p>
			<a href={`/article/${article.slug}`} class="text-blue-500 dark:text-blue-400"
				>{m.read_more()}</a
			>
		</div>
	{/each}
</section>
