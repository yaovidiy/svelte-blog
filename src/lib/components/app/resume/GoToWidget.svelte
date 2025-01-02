<script lang="ts">
	import { globalStore } from '$lib/stores/global.svelte';
	import * as Popover from '$lib/components/ui/popover';
	import { buttonVariants, Button } from '$lib/components/ui/button';
	import { StickyNote } from 'lucide-svelte';

	const PagesMap = [
		{ title: 'Головна', index: 0 },
		{ title: 'Про мене', index: 1 },
		{ title: 'Досвід', index: 2 },
		{ title: 'Освіта', index: 3 },
		{ title: 'Навички', index: 4 },
		{ title: 'Проекти', index: 5 },
		{ title: 'Контакти', index: 6 }
	];

  let open = $state(false);

	let {
		gotoPage
	}: {
		gotoPage?: (index: number) => void;
	} = $props();
</script>

<Popover.Root bind:open>
	<Popover.Trigger
		class={`${buttonVariants({ variant: 'outline', size: `${globalStore.isDesktop ? 'lg' : 'icon'}` })} fixed bottom-4 right-4 lg:bottom-0 lg:top-28`}
	>
		{#if globalStore.isDesktop}
			<span>Показати зміст</span>
		{:else}
			<StickyNote />
		{/if}
	</Popover.Trigger>
	<Popover.Content align="end">
		<div class="flex w-full flex-col gap-4">
			{#each PagesMap as { title, index } (index)}
				<Button
					class="w-full"
					variant="default"
					size="lg"
					onclick={() => {
						if (gotoPage) {
							gotoPage(index);
              open = false;
						}
					}}
				>
					{title}
				</Button>
			{/each}
		</div>
	</Popover.Content>
</Popover.Root>
