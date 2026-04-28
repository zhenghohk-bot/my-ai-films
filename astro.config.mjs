import { defineConfig } from 'astro/config';

// TODO: 替换为你的 GitHub 用户名和仓库名
// site 示例: 'https://yourname.github.io'
// base 示例: '/my-ai-films'
export default defineConfig({
  output: 'static',
  site: 'https://YOUR_USERNAME.github.io',
  base: '/YOUR_REPO_NAME',
});
