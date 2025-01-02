<script lang="ts">
	import Slide from './Slide.svelte';
	import { Button } from '$lib/components/ui/button/';

	let {
		gotoPage
	}: {
		gotoPage?: (index: number) => void;
	} = $props();
</script>

<Slide>
	<div class="">
		<h1 class="text-center text-4xl font-bold">Резюме</h1>
		<h1 class="text-center text-4xl font-bold">Ярослав Овдій</h1>
		<p class="text-center text-lg">Привіт, в цьому розділі ви можете знайти моє останнє резюме.</p>
		<p class="text-center text-lg">
			І якщо ви вже тут то я пропоную декілька варіантів як ви можете його проглянути:
		</p>
		<div class="flex flex-col items-center justify-center gap-4 md:flex-row">
			<Button variant="outline" class="w-full text-lg" size="lg">Завантажити PDF файл</Button>
			<Button onclick={() => {
        if (gotoPage) {
          gotoPage(1);
        }
      }} variant="default" class="w-full text-lg" size="lg">Переглянути онлайн</Button>
		</div>
	</div>
</Slide>
