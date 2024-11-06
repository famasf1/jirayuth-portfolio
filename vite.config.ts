import { paraglide } from '@inlang/paraglide-sveltekit/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
	plugins: [
		sveltekit(),
		paraglide({
			project: './project.inlang',
			outdir: './src/lib/paraglide'
		})
	],
	resolve: {
		alias: {
			'@assets' : path.resolve(__dirname, './src/assets'),
			'@images' : path.resolve(__dirname, './src/assets/img'),
			'@logo' : path.resolve(__dirname, './src/assets/logo'),
		}
	}
});
