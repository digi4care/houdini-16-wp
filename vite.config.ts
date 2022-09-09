import { sveltekit } from '@sveltejs/kit/vite';
import houdini from 'houdini/vite';
import type { UserConfig } from 'vite';
import path from 'path';

const config: UserConfig = {
	plugins: [houdini(), sveltekit()],
	resolve: {
		alias: {
			'~': path.resolve('src'),
			$houdini: path.resolve('.', '$houdini'),
			'~foundation': path.resolve('.', 'src', 'foundation')
		}
	}
};

export default config;
