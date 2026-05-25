# 个人网页

这是一个可以直接发布到 GitHub Pages 的静态个人主页。当前版本参考了 Xiaojuan Ma 主页那类简约学术版式：左侧照片、联系方式和新闻滚动，右侧简介、研究方向、论文、项目和服务列表。

Updated: 2026-05-25 layout fix.

## 修改内容

- 在 `index.html` 里替换简介、研究方向、论文/写作、专利和联系方式。
- 在 `styles.css` 里调整颜色、间距和响应式样式。
- 当前头像文件是 `assets/xinyi-fu.jpg`。

## 安全提醒

不要把 GitHub 密码发给任何人。发布网页时建议自己登录 GitHub 网页端上传文件，或使用 GitHub Personal Access Token / GitHub Desktop。

## 发布到 GitHub Pages

1. 在 GitHub 新建仓库，推荐仓库名为 `snailD.github.io`。
2. 把本文件夹里的 `index.html`、`styles.css`、`assets/` 和 `README.md` 上传到仓库根目录。
3. 打开仓库的 `Settings` -> `Pages`，选择 `Deploy from a branch`，分支选择 `main`，目录选择 `/root`。
4. 稍等片刻，访问 `https://snailD.github.io`。

## 使用脚本发布

如果这台电脑没有安装 `git`，也可以用 `deploy-github-pages.ps1` 通过 GitHub API 发布。

1. 在 GitHub 创建一个短期 fine-grained personal access token。
2. 将 token 保存到本目录的 `.github-token` 文件中。
3. 运行：

```powershell
.\deploy-github-pages.ps1 -Username 你的GitHub用户名
```

发布完成后建议立即删除 `.github-token`，并在 GitHub 中撤销这个临时 token。
