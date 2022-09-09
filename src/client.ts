import { HoudiniClient, type RequestHandlerArgs } from '$houdini';

import _config from '$lib/config';

async function fetchQuery({ fetch, text = '', variables = {}, metadata }: RequestHandlerArgs) {
	const url = _config.apiUrl;
	const result = await fetch(url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			query: text,
			variables
		})
	});
	return await result.json();
}

export default new HoudiniClient(fetchQuery);
