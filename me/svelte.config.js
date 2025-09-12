import adapter from '@sveltejs/adapter-auto';
import adapterStatic from '@sveltejs/adapter-static';

const isGitHubPages = process.env.GITHUB_PAGES === 'true';
const repoName = "heunyam.github.io"

const config = {
  kit: {
    adapter: isGitHubPages 
      ? adapterStatic({
          pages: 'build',
          assets: 'build',
          fallback: null
        })
      : adapter(), // 로컬 개발용
    paths: {
      base: isGitHubPages ? repoName : ''
    }
  }
};

export default config;