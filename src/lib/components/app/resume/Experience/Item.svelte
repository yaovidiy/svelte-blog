<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import * as Avatar from '$lib/components/ui/avatar';
	import { slide } from 'svelte/transition';

	let {
		title,
		company,
		location,
		startDate,
		endDate,
		description,
		responsibilities,
		companyAvatar,
		technologies
	}: {
		title?: string;
		company?: string;
		location?: string;
		startDate?: string;
		endDate?: string;
		description?: string;
		companyAvatar?: string;
		responsibilities?: string[];
		technologies?: string[];
	} = $props();

	let showFull = $state(false);

	function calculateWorkExperience(startDate?: string, endDate?: string) {
		if (!startDate) return 'N/A';
		const start = new Date(startDate);
		const end = endDate && endDate !== 'Present' ? new Date(endDate) : new Date();
		const diff = Math.abs(end.getTime() - start.getTime());
		const months = diff / (1000 * 3600 * 24 * 30);
		return months.toFixed(0);
	}

	function dateToReadableLocale(date?: string) {
		if (!date) return 'N/A';
		if (date === 'Present') return date;

		return new Date(date).toLocaleDateString('uk-UA', {
			year: 'numeric',
			month: 'short',
			day: 'numeric'
		});
	}
</script>

<div class="flex gap-2 {showFull ? 'md:col-span-2 lg:col-span-3 xl:col-span-4' : ''}">
	<Avatar.Root class="h-16 w-16">
		<Avatar.Image src={companyAvatar} alt={company} />
		<Avatar.Fallback>{company ? company[0] : 'N/A'}</Avatar.Fallback>
	</Avatar.Root>
	<div>
		<h2 class="m-0 p-0 text-2xl">{company}</h2>
		<h3 class="m-0 p-0 text-lg text-neutral-600">{title}</h3>
		<p class="m-0 p-0 text-neutral-400 text-xs">{location}</p>
		<p class="m-0 p-0 text-xs">
			{dateToReadableLocale(startDate)} - {dateToReadableLocale(endDate)} ({calculateWorkExperience(
				startDate,
				endDate
			)} months)
		</p>
		<p class="m-0 p-0 py-2">{description}</p>
		{#if showFull}
			<h6 class="m-0 p-0 py-2">My main responsibilities:</h6>
			<ul transition:slide>
				{#each responsibilities ?? [] as responsibility}
					<li>- {responsibility}</li>
				{/each}
			</ul>

			<h6 class="m-0 p-0 py-2">Technologies that I used:</h6>
			<ul transition:slide class="flex flex-wrap gap-2">
				{#each technologies ?? [] as technology}
					<li>{technology},</li>
				{/each}
			</ul>
		{/if}
		<Button onclick={() => (showFull = !showFull)} variant="outline" size="sm">
			{showFull ? 'Згорнути' : 'Детальніше'}
		</Button>
	</div>
</div>
