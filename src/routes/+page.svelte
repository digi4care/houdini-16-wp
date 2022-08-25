<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	$: ({ Continents } = data);
</script>

<h2>Home</h2>

This is the home page, with the list of continents

{#each $Continents?.data?.continents ?? [] as { code, name }}
	<div>{code} - {name}</div>
{/each}
