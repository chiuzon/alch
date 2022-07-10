import { sveltekit } from '@sveltejs/kit/vite';
import nodePolyfills from 'rollup-plugin-polyfill-node';

const MODE = process.env.NODE_ENV;
const development = MODE === 'development';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [
		sveltekit(),
		development &&
			nodePolyfills({
				include: ['node_modules/**/*.js', new RegExp('node_modules/.vite/.*js')],
				http: true,
				crypto: true
			})
	],
	resolve: {
		alias: {
			crypto: 'crypto-browserify',
			stream: 'stream-browserify',
			assert: 'assert'
		}
	},
	build: {
		rollupOptions: {
			plugins: [nodePolyfills({ crypto: true, http: true })]
		},
		commonjsOptions: {
			transformMixedEsModules: true
		}
	}
};

export default config;
