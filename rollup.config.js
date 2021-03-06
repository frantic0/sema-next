import { createRollupConfigs } from './scripts/base.config.js'
import autoPreprocess from 'svelte-preprocess'
import postcssImport from 'postcss-import'
// import cssnext from 'postcss-cssnext';
// import cssnano from 'cssnano';
const production = !process.env.ROLLUP_WATCH;



export const config = {
  staticDir: 'static',
  distDir: 'dist',
  buildDir: `dist/build`,
  serve: !production,
  production,
  rollupWrapper: cfg => cfg,
  svelteWrapper: svelte => {
    svelte.preprocess = [
			autoPreprocess({
				postcss: {
					plugins: [
						postcssImport({
							// path: [
							// 	'node_modules/codemirror/lib/',
							// 	'node_modules/codemirror/addon/dialog/',
							// 	'node_modules/codemirror/theme/',
							// 	'src/utils',
							// ],
							// plugins: [cssnext(), cssnano()],
							// addModulesDirectories: ['node_modules'],
							// from: 'node_modules/codemirror/lib/codemirror.css',
						}),
					],
				},
				defaults: { style: 'postcss' },
			}),
		]
  },
  swWrapper: cfg => cfg,
}

const configs = createRollupConfigs(config)

export default configs


/** wrapper example 1 */
// svelteWrapper: (cfg, ctx) => ({
//   ...cfg,
//   preprocess: mdsvex({ extension: '.md' }),
// })

/** wrapper example 2 */
// rollupWrapper: cfg => {
//   cfg.plugins = [...cfg.plugins, myPlugin()]
//   return cfg
// }