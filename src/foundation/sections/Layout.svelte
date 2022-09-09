<script lang="ts">
	export let pageData;
	import Header from '~foundation/sections/Header.svelte';
	import Navbar from '~foundation/sections/Navbar.svelte';
	import Footer from '~foundation/sections/Footer.svelte';
</script>

<Header>
	<Navbar nodes={pageData?.getHeaderMenu?.nodes} />
</Header>

<slot />

<Footer
	nodes={pageData?.getFooterMenu?.nodes}
	copyrightText={pageData?.footerSettings?.copyrightText}
/>
