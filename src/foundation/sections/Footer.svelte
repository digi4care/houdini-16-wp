<script lang="ts">
	import { page } from '$app/stores';
	import { DateTime } from '~/lib/class/Managers/DateTimeManager';
	import {
		Footer,
		FooterBrand,
		FooterCopyright,
		FooterIcon,
		FooterLink,
		FooterLinkGroup
	} from 'flowbite-svelte';

	export let nodes, copyrightText;

	$: _copyrightText = copyrightText?.replace('[current_year]', DateTime.getCurrentDate('year'));

	// $: console.log(copyrightText);
</script>

<Footer id="footer" class="site-footer">
	<FooterCopyright href="/" year="2003" by={_copyrightText} />
	<FooterLinkGroup
		ulClass="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0"
	>
		{#if nodes}
			{#each nodes as node}
				<FooterLink href={node.path} active={$page.url.pathname === node.path}
					>{node.label}</FooterLink
				>
			{/each}
		{/if}
	</FooterLinkGroup>
</Footer>
