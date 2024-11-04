<p align="center">
  <img src="./assets/github.svg" alt="Logo" width="150"/>
</p>

<h1 align="center">SSY-UI-VITE</h1>

<p align="center">基于 Vite 栈的前端工程化实践</p>
<p align="center">
  <img src="https://img.shields.io/github/license/sst2715/ssy-ui-vite">
  <a href="https://codecov.io/github/sst2715/ssy-ui-vite">
    <img src="https://codecov.io/github/sst2715/ssy-ui-vite/graph/badge.svg?token=ZSOINJLQH6" alt="codecov">
  </a>
</p>

## Features
- 基于 **Vue** 框架
- 支持 **JSX** 与 **Vue 单文件组件**
- 使用 **Vitest** 和 **Vue3 插件** 实现单元测试
- 集成 **Eslint**、**Prettier** 和 **Husky** 进行代码语法检查
- 采用 **Rollup** 进行构建
- 使用 **Vitepress** 搭建文档网站并部署到 **Vercel**
- 配合 **GitHub Actions** 实现持续集成与交付

## Quick start
```javascript
import SSYUI from 'ssy-ui'
import { createApp } from 'vue'

const App = {
  template: '<SButton color="blue">主要按钮</SButton>'
}

createApp(App)
  .use(SSYUI)
  .mount('#app')
