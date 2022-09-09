<script lang="ts">
	import { page } from '$app/stores';
	import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
	import { fragment, graphql } from '$houdini';

	export let nodes;
	$: data = fragment(
		nodes,
		graphql`
			fragment menuFieldItems on MenuItem {
				id
				parentId
				label
				cssClasses
				description
				linkRelationship
				order
				path
				target
				title
				uri
				url
			}
		`
	);
	// $: console.log(data);
</script>

<Navbar let:hidden let:toggle>
	<NavBrand href="/">
		<img
			src="https://flowbite.com/docs/images/logo.svg"
			class="mr-3 h-6 sm:h-9"
			alt="Flowbite Logo"
		/>
		<span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
			Flowbite
		</span>
	</NavBrand>
	<NavHamburger on:click={toggle} />
	<NavUl {hidden}>
		{#if nodes}
			{#each nodes as link}
				<NavLi href={link.path} active={$page.url.pathname === link.path}>{link.label}</NavLi>
			{/each}
		{/if}
	</NavUl>
</Navbar>
