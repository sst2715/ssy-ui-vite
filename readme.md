<p align="center">
  <img src="./assets/logo.png" alt="Logo" width="150"/>
</p>

<h1 align="center">SSY-UI-VITE</h1>

<p align="center">
  基于 Vite 栈的前端工程化实践 
</p>

<p align="center">
  <img src="https://img.shields.io/github/license/sst2715/ssy-ui-vite">
</p>

## Features
- 基于 Vue 框架
- 支持 JSX 与 Vue 单文件组件
- Jest + Vue3 plugins 实现单元测试
- ESLint + Prettier + Husky 语法检查
- 采用 Rollup 构建
- VitePress + Vercel 文档网站搭建
- 基于 Action CI 实现持续集成与交付

## Quick start

```bash
import Vue from 'vue'
import { createApp } from 'vue'
import SSYUI from 'ssy-ui'

const App = {
  template: `<SButton color="blue">主要按钮</SButton>`
}

createApp(App)
  .use(SSYUI)
  .mount('#app')
