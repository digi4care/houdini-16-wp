<script lang="ts">
	import { fragment, graphql } from '$houdini';

	export let user;

	$: data = fragment(
		user,
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
</script>
