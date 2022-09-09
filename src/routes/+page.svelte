<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
	$: ({ GetPageById } = data);

	import Page from '~foundation/sections/Page.svelte';
	import Content from '~foundation/sections/Content.svelte';
	import { onMount } from 'svelte';

	onMount(() => {
		const swiper = new Swiper('.swiper', {
			// Optional parameters
			direction: 'horizontal',
			loop: true,
			slidesPerView: 4,

			// If we need pagination
			pagination: {
				el: '.swiper-pagination'
			},

			// Navigation arrows
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},

			// And if we need scrollbar
			scrollbar: {
				el: '.swiper-scrollbar'
			}
		});
	});
</script>

<svelte:head>
	<title>{$GetPageById?.data?.pageBy?.seo?.title}</title>
	{@html $GetPageById?.data?.pageBy?.seo?.fullHead}
	{@html `<link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css"
      />`}
	{@html `<script src="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js" ✂prettier:content✂="" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=">{}</script>`}
</svelte:head>

<Page cssId="" cssClass="">
	<Content>
		{@html $GetPageById?.data?.pageBy?.content}
	</Content>
</Page>
