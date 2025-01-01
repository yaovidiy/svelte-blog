<script lang="ts">
	import { languageTag } from '$lib/paraglide/runtime';
  import { onMount, type Component } from 'svelte';

  let HomePageContent: Component | null = $state(null);

  onMount(async () => {
    HomePageContent = await import(`$lib/articles/${languageTag()}/HomePage.svx`) as Component;
  });
</script>

<article>
  {#if HomePageContent}
    <HomePageContent.default />
  {:else}
    <p>Loading...</p>
  {/if}
</article>
