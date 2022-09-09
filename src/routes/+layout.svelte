<script lang="ts">
	import '../app.postcss';
	import client from '../client';

	client.init();

	export let data;
	$: ({ Website } = data);

	$: console.log($Website);
</script>

<slot />
