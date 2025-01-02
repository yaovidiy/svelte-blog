<script lang="ts">
	import Slide from './Slide.svelte';
	import Item from '$lib/components/app/resume/Experience/Item.svelte';

	type Experience = {
		title?: string;
		company?: string;
		location?: string;
		startDate?: string;
		endDate?: string;
		description?: string;
		responsibilities?: string[];
		technologies?: string[];
		companyAvatar?: string;
	};

	let {
		gotoPage
	}: {
		gotoPage?: (index: number) => void;
	} = $props();

	const ExperienceMap: Experience[] = [
		{
			title: 'Senior Frontend Developer',
			company: 'Softermii',
			location: 'Remote',
			startDate: '2024-06-01',
			endDate: 'Present',
			description: 'Some description',
			responsibilities: [''],
			technologies: ['Technology 1', 'Technology 2'],
			companyAvatar:
				'https://media.licdn.com/dms/image/v2/C4D0BAQHWUijS1hD4Ag/company-logo_100_100/company-logo_100_100/0/1646828118885/softermii_logo?e=1743638400&v=beta&t=XPLeqt6kmo6wbU82tge4Wnn0fSc_LaxDJJVYMHOJEK0'
		},
		{
			title: 'Senior Frontend Developer',
			company: 'Echoes',
			location: 'Remote',
			startDate: '2023-11-01',
			endDate: '2024-05-01',
			description: 'Another description',
			responsibilities: [
				'Added new features to the existing code base with saving previous functionality.',
				'Refactoring of the existing code from Vue Options API to Composition API, with new features implementation.',
				'Redesigned the existing components according to the new design from the designer.',
				'Communication and coordination with the designer about components, general behavior, animations and their realization.',
				'Covering code with tests by Vitest and manual testing of the task realization. Performance optimization by reducing the amount of the query requests to the Back End API.',
				'Code reviews of other Front End Developers.',
				'Task management, time and difficulty estimation of the tasks, splitting large tasks to smaller ones.',
				'Writing testing scenarios for tasks.',
				'Daily presentation and showcase of the technical aspects to the owner of the product.',
				'Conducting technical interviews, evaluating the candidate technical level, providing feedback for the management.',
				'Familiarization of new Front End Developers with platform code and workflow.'
			],
			technologies: [
				'Vite',
				'Vue 3',
				'Vue 3(options and compositions)',
				'GraphQL',
				'Apollo Client',
				'TypeScript',
				'Docker',
				'Figma'
			],
			companyAvatar:
				'https://media.licdn.com/dms/image/v2/D4E0BAQHZesH1NrZqyA/company-logo_100_100/company-logo_100_100/0/1689793548048/echoes_ai_logo?e=1743638400&v=beta&t=RpiZLXtO0BP3h9ZDHha9xeqPLV3DK-qLFPGz_7-pLvU'
		},
		{
			title: 'Senior Frontend Developer',
			company: 'Uproad',
			location: 'Remote',
			startDate: '2022-01-01',
			endDate: '2023-11-01',
			description: 'Another description',
			responsibilities: [
				'Conducted the technical interview, evaluation of the candidate technical level.',
				'Conducted task evaluation, splitting them into smaller tasks, adding testing scenarios, added prioritizations.',
				'Onboarded the new Front End specialist and introduced the platform specification.',
				'Conducted code reviews.',
				'Created E2E testing with the help of the DataDog Synthetics.',
				'Created component tests for the web version of the main application with the help of Cypress.',
				'Took part in planning and developing the new b2b user cabinet, and made a decision to use SvelteKit for the development.',
				'Had close cooperation with SEO, enhancement of the SEO part on the main marketing website.',
				'Created A/B tests with the help of the Craft CMS.',
				'Created a blog section on the marketing website for better SEO results.',
				'Added rich search results optimizations for the main pages.',
				'Redesigned the whole marketing website according to a new design system in close collaboration with the designer and made it responsive.',
				`Created a web version of the company's main mobile application with the help of React.js.`,
				'Automated synchronization of the Helpshift with the help section on the marketing website via API.',
				'Created Braze templates for in app notifications and user emails with the help of the Svelte.',
				'Optimized the main marketing website performance.'
			],
			technologies: [
				'Craft CMS',
				'PHP',
				'JavaScript (ES6)',
				'SvelteKit',
				'Svelte',
				'React',
				'CSS',
				'Braze',
				'Cypress',
				'DataDog Synthetics',
				'Docker'
			],
			companyAvatar:
				'https://media.licdn.com/dms/image/v2/C4D0BAQH4-jDhpjYVbg/company-logo_100_100/company-logo_100_100/0/1630530656549/uproad_app_logo?e=1743638400&v=beta&t=9YgwIgzd3EuYATzwFE0IA8LQlyh7XH1vFu-pLC3FUeQ'
		},
		{
			title: 'Middle JavaScript Developer',
			company: 'Ciklum',
			startDate: '2021-06-01',
			endDate: '2022-03-01',
			location: 'Kyiv, Ukraine',
			description: 'Another description',
			responsibilities: [
				'Created HTML based games.',
				'Participated in team meetings.',
				'Conducted evaluation of the assigned task.',
				'Worked with task trekking tools.'
			],
			technologies: ['HTML5', 'PIXI.js', 'CSS'],
			companyAvatar:
				'https://media.licdn.com/dms/image/v2/C4D0BAQGNh_4pInYIIQ/company-logo_100_100/company-logo_100_100/0/1647617951142/ciklum_logo?e=1743638400&v=beta&t=_mfhH7-ovZGfznGMCYbb4_MPjd8-4tX8XSEXcMsOby4'
		},
		{
			title: 'Junior front-end',
			company: 'Upplabs',
			location: 'Kyiv, Ukraine',
			startDate: '2019-07-01',
			endDate: '2021-06-01',
			description: 'Another description',
			responsibilities: [
				'Developed new features with Vue2.',
				'Maintained and enhanced legacy code written on jQuery.',
				'Created Data Source Provider component.',
				'Created test scenarios for the tasks.',
				'Conducted code reviews.',
				'Conducted task evaluations.',
				'Onboarded new Front End developers form outsource side.'
			],
			technologies: ['LESS', 'JavaScript', 'Git', 'HTML5', 'Responsiveness', 'VUE.js', 'jQuery'],
			companyAvatar:
				'https://media.licdn.com/dms/image/v2/D4E0BAQG4X0SywO8V-Q/company-logo_100_100/company-logo_100_100/0/1713187704983/upplabs_logo?e=1743638400&v=beta&t=VJbdBnCue9vZ1cgcIWdVnEgZborcTbriz9Ok6-Bqdow'
		},
		{
			title: 'Junior back-end',
			company: 'ООО"ОбликСофт"​',
			startDate: '2018-09-01',
			endDate: '2019-07-01',
			location: 'Poltava, Ukraine',
			description: 'Another description',
			responsibilities: [
				`Created back-end solutions for the company's existing plug-ins.`,
				`Created new plug-ins for Bitrix24 platform with React as front-end solution and PHP as back-end solution.`
			],
			technologies: ['PHP', 'React', 'Bitrix24', 'JavaScript', 'HTML5', 'Git'],
			companyAvatar:
				'https://media.licdn.com/dms/image/v2/C560BAQGAMjyHBNUktw/company-logo_100_100/company-logo_100_100/0/1631330019246?e=1743638400&v=beta&t=PyouL7lzKc5O3kLxsmJ4YvpXHgz5CC4gYzOeWUsSZeo'
		}
	];

	function calculateWorkExperience(startDate?: string, endDate?: string) {
		if (!startDate) return 'N/A';
		const start = new Date(startDate);
		const end = endDate && endDate !== 'Present' ? new Date(endDate) : new Date();
		const diff = Math.abs(end.getTime() - start.getTime());
		const months = diff / (1000 * 3600 * 24 * 30);
		return months.toFixed(0);
	}

	function calculateFullExperienceInYearsAndMonths() {
		const totalExperience = ExperienceMap.reduce((acc, exp) => {
			if (!exp.startDate) return acc;
			const start = new Date(exp.startDate);
			const end = exp.endDate && exp.endDate !== 'Present' ? new Date(exp.endDate) : new Date();
			const diff = Math.abs(end.getTime() - start.getTime());
			const months = diff / (1000 * 3600 * 24 * 30);
			return acc + months;
		}, 0);

		const years = Math.floor(totalExperience / 12);
		const months = totalExperience % 12;

		return `${years} years ${months.toFixed(0)} months`;
	}
</script>

<Slide>
	<h1 class="text-center">Мій досвід по компаніям</h1>
	<p class="mb-4 text-center text-sm">
		Загальний досвід в розробці ~ {calculateFullExperienceInYearsAndMonths()}
	</p>
	<div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
		{#each ExperienceMap as experience (experience.company)}
			<Item {...experience} />
		{/each}
	</div>
</Slide>
