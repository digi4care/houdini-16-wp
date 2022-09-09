// src/routes/myRoute/+page.ts
import GetPageByIdStore from '$houdini/stores/GetPageById';

export async function load({ event }) {
	await GetPageByIdStore.fetch({ event, variables: { pageId: 17 } });

	return {
		GetPageById: GetPageByIdStore
	};
}
