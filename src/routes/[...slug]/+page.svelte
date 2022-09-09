<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
	$: ({ GetPageByUri } = data);

	import Page from '~foundation/sections/Page.svelte';
	import Content from '~foundation/sections/Content.svelte';
    $:console.log($GetPageByUri.data)
</script>

<svelte:head>
	<title>{$GetPageByUri?.data?.pageByUri?.seo?.title}</title>
	{@html $GetPageByUri?.data?.pageByUri?.seo?.fullHead}
	{@html `<link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css"
      />`}
	{@html `<script src="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js" ✂prettier:content✂="" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=">{}</script>`}
</svelte:head>

<Page cssId="" cssClass="">
	<Content>
		{@html $GetPageByUri?.data?.pageByUri?.content}
	</Content>
</Page>
