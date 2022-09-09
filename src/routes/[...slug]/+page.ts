// src/routes/myRoute/+page.ts
import GetPageByUriStore from '$houdini/stores/GetPageByUri';

export async function load({ event, params }) {
	await GetPageByUriStore.fetch({ event, variables: { uri: params.slug } });

	return {
		GetPageByUri: GetPageByUriStore
	};
}
