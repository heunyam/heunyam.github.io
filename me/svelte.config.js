import adapter from '@sveltejs/adapter-auto';
import adapterStatic from '@sveltejs/adapter-static';

const isGitHubPages = process.env.GITHUB_PAGES === 'true';

const config = {
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
      entries: ['/']
    }
  }
};

export default config;
