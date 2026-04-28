# AI FILMS — AI 视频作品集

基于 Astro 构建的静态作品集网站，部署于 GitHub Pages。

---

## 本地运行

```bash
npm install
npm run dev
```

浏览器打开 `http://localhost:4321`

构建预览：

```bash
npm run build
npm run preview
```

---

## 部署前必填

编辑 `astro.config.mjs`，替换为你的仓库信息：

```js
site: 'https://YOUR_USERNAME.github.io',
base: '/YOUR_REPO_NAME',
```

编辑 `src/pages/index.astro` 底部 footer，替换 GitHub 链接：

```html
<a href="https://github.com/YOUR_USERNAME/YOUR_REPO_NAME" ...>
```

---

## 添加新作品

编辑 `src/data/works.json`，在 `works` 数组中新增一条：

```json
{
  "id": "004",
  "title": "作品标题",
  "type": "类型标签",
  "year": "2026",
  "month": "05",
  "description": "作品简介文字。",
  "tags": ["标签1", "标签2"],
  "videoUrl": "https://www.youtube.com/watch?v=VIDEO_ID",
  "thumbnail": "/thumbnails/004.jpg",
  "published": true
}
```

字段说明：

| 字段 | 说明 |
|------|------|
| `id` | 唯一编号，三位数字字符串 |
| `title` | 作品名称 |
| `type` | 右上角类型 badge 文字 |
| `year` / `month` | 时间线显示的年月 |
| `description` | 卡片描述文字 |
| `tags` | 底部标签数组 |
| `videoUrl` | YouTube 或 Bilibili 视频链接（留空则显示 COMING SOON）|
| `thumbnail` | 封面图路径，放入 `public/thumbnails/` |
| `published` | `true` 显示，`false` 下架隐藏 |

---

## 下架作品

将对应条目的 `published` 改为 `false`：

```json
"published": false
```

重新推送后自动触发构建，该作品不再显示。

---

## 添加封面图

将图片文件放入 `public/thumbnails/`，命名与 `thumbnail` 字段一致，推荐尺寸 **16:9**，格式 JPG 或 WebP。

---

## 自动部署

推送到 `main` 分支后，GitHub Actions 自动构建并部署到 `gh-pages` 分支。

首次使用需在仓库 Settings → Pages 中将 Source 设置为 **GitHub Actions**。
