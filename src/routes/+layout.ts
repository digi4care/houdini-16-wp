import WebsiteStore from '$houdini/stores/Website'

export function load({ event }) {
	WebsiteStore.fetch({ event })

	return {
		Website: WebsiteStore
	}
}
