<script lang="ts">
	import { type AvailableLanguageTag, languageTag } from '$lib/paraglide/runtime';
	import { i18n } from '$lib/i18n';
	import { page } from '$app/state';
	import { goto } from '$app/navigation';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu/';
	import { buttonVariants } from '$lib/components/ui/button';

	function switchToLanguage(newLanguage: AvailableLanguageTag) {
		const canonicalPath = i18n.route(page.url.pathname);
		const localisedPath = i18n.resolveRoute(canonicalPath, newLanguage);
		goto(localisedPath);
	}
</script>

<DropdownMenu.Root>
	<DropdownMenu.Trigger class={`${buttonVariants({ variant: 'outline', size: 'icon' })} uppercase`}>
		{languageTag()}
	</DropdownMenu.Trigger>
	<DropdownMenu.Content align="end">
		<DropdownMenu.Item class="cursor-pointer" onclick={() => switchToLanguage('uk')}>UK</DropdownMenu.Item>
		<DropdownMenu.Item class="cursor-pointer" onclick={() => switchToLanguage('en')}>EN</DropdownMenu.Item>
	</DropdownMenu.Content>
</DropdownMenu.Root>
