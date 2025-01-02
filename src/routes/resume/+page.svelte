<script lang="ts">
	import Hero from '$lib/components/app/resume/Hero.svelte';
	import About from '$lib/components/app/resume/About.svelte';
	import GoToWidget from '$lib/components/app/resume/GoToWidget.svelte';
	import Experience from '$lib/components/app/resume/Experience.svelte';
	import { onMount } from 'svelte';
	import { page } from '$app/state';

	let currentPage = $state(-1);

	onMount(() => {
		setTimeout(() => {
			const savedPage = page.url.searchParams.get('page') ?? '0';
			gotoPage(parseInt(savedPage));
		}, 300);
	});

	function gotoPage(index: number) {
		currentPage = index;
		history.pushState(null, '', `resume?page=${index}`);
	}
</script>

{#if currentPage === 0}
	<Hero {gotoPage} />
{/if}
{#if currentPage === 1}
	<About {gotoPage} />
{/if}

{#if currentPage === 2}
  <Experience />
{/if}

<!-- {#if page === 3}
  <Education />
{/if} -->

<!-- {#if page === 4}
  <Skills />
{/if} -->

<!-- {#if page === 5}
  <Projects />
{/if} -->

<!-- {#if page === 6}
  <Contact />
{/if} -->

{#if currentPage > 0}
	<GoToWidget {gotoPage} />
{/if}
