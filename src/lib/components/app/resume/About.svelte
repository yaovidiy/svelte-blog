<script lang="ts">
	import Slide from './Slide.svelte';
	import { Button } from '$lib/components/ui/button/';
	import * as Avatar from '$lib/components/ui/avatar';

	let {
		gotoPage
	}: {
		gotoPage?: (index: number) => void;
	} = $props();
</script>

<Slide>
	<div>
		<h1 class="mb-4 text-center text-4xl font-bold">Про мене</h1>

		<div class="mb-4 flex flex-col items-center gap-4 lg:flex-row-reverse">
			<Avatar.Root class="h-80 w-80 lg:h-96 lg:w-96">
				<Avatar.Image src="./assets/images/Avatar.jpg" alt="Ovdii Yaroslav" />
				<Avatar.Fallback>YO</Avatar.Fallback>
			</Avatar.Root>
			<p class="text-center text-lg">
				Досвідчений фронтенд-розробник з понад 7-річним досвідом у веб-розробці. Моя основна
				експертиза полягає в наступних фреймворках та бібліотеках: Vue.js, React.js. Я захоплююсь
				Svelte і маю досвід створення вебсайту для електронної комерції на основі SvelteKit та
				Strapi CMS для керування контентом. Тому я маю знання щодо роботи з CMS на базі Node.js та з
				чистим Node.js. Так само можу сказати про CMS на базі PHP, оскільки я працював з ними, і
				найбільш улюбленим я можу назвати Craft CMS. Відданий досягненню складних цілей згідно з
				жорсткими термінами, при цьому створюючи бездоганний код.
			</p>
		</div>

		<div class="flex items-center justify-end">
			<Button
				onclick={() => {
					if (gotoPage) {
						gotoPage(2);
					}
				}}
				variant="default"
				size="lg"
				class="w-full max-w-xs">Далі</Button
			>
		</div>
	</div>
</Slide>
