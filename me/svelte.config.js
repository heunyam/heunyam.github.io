import adapter from '@sveltejs/adapter-auto';
import adapterStatic from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const isGitHubPages = process.env.GITHUB_PAGES === 'true';

const config = {
  preprocess: vitePreprocess(),
  kit: {
    adapter: isGitHubPages 
      ? adapterStatic({
          pages: 'build',
          assets: 'build',
          fallback: null
        })
      : adapter(),
    paths: {
      base: ''
    },

    prerender: {
			entries: ['*'],
		}
  }
};

export default config;
