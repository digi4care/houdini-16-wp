import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		preprocess({
			postcss: true,
			preserve: ['ld+json']
		})
	],

	kit: {
		adapter: adapter(),
		alias: {
			'~': path.resolve('./src'),
			$houdini: path.resolve('./$houdini'),
			$lib: path.resolve('./src/lib'),
			'~foundation': path.resolve('./src/foundation')
		},
		trailingSlash: 'always',
		version: {
			name: Date.now().toString(),
			pollInterval: 0
		}
	}
};

export default config;
