<script lang="ts">
	export let cssId = 'page';
	export let cssClass = 'hfeed';
</script>

<div class="site {cssClass}" id={cssId}>
	<div class="site-content" id="content">
		<div class="content-area" id="primary">
			<main class="site-main" id="main">
				<slot />
			</main>
		</div>
	</div>
</div>
