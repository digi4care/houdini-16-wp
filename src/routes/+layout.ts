import WebsiteStore from '$houdini/stores/Website';

export async function load({ event }) {
	await WebsiteStore.fetch({ event });

	return {
		Website: WebsiteStore
	};
}
