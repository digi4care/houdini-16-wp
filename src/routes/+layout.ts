import { graphql } from '$houdini'

export const houdini_load = graphql`
query Websitev1 {
	generalSettings {
		description
		language
		title
		url
	}
	readingSettings {
		showOnFront
		postsPerPage
		pageOnFront
		pageForPosts
	}
	headerSettings: getHeader {
		favicon
		siteLogoUrl
		siteTagLine
		siteTitle
	}
	footerSettings: getFooter {
		copyrightText
		sidebarOne
		sidebarTwo
	}
	getHeaderMenu: menuItems(where: { location: HCMS_MENU_HEADER }, first: 99) {
		nodes {
			...menuFieldItems
		}
	}
	getFooterMenu: menuItems(where: { location: HCMS_MENU_FOOTER }, first: 99) {
		nodes {
			...menuFieldItems
		}
	}
	getLoggedInMenu: menuItems(where: { location: HCMS_MENU_LOGGEDIN }, first: 99) {
		nodes {
			...menuFieldItems
		}
	}
	getLoggedOutMenu: menuItems(where: { location: HCMS_MENU_LOGGEDOUT }, first: 99) {
		nodes {
			...menuFieldItems
		}
	}
}`
