<script lang="ts">
	import '../app.postcss';
	import client from '../client';
	import type { PageData } from './$types';

	client.init();

	export let data: PageData;
	$: ({ Website } = data);

	import Layout from '~foundation/sections/Layout.svelte';
</script>

<Layout pageData={$Website.data}>
	<slot />
</Layout>
