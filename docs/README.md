---
home: true
heroText: umami-sdk
tagline: 从零开始搭建规范的 TypeScript SDK 项目

# 配置首页按钮
actions:
  - text: 开始学习 Go
    link: /guide/
    type: primary
  - text: Github地址
    link: https://github.com/Yakima-Teng/umami-sdk
    type: secondary

# 配置首页特效列表
features:
  - title: Webpack构建
    details: 使用Webpack 做打包构建
  - title: 代码风格规范
    details: ESLint、Prettier、EditorConifg 做代码规范约束
  - title: 提交规范
    details: husky、Commitlint、lint-staged 做提交规范约束
  - title: 单元测试
    details: Jest 做单元测试
  - title: CI/CD
    details: Github Actions 做自动化部署发布

# 首页的页脚
footer: MIT Licensed | Copyright © 2025 Yakima
---

<style type="scss">
.vp-hero {
  margin-top: 10vh;
}
.vp-hero-action-button:hover {
  color: darken(var(--vp-c-accent), 30%);
}
</style>
