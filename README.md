# 星川内容分析与脚本生成工作台（服务商版）

面向服务商的独立 GitHub Pages 站点，仅保留原星川决策工作台中的「内容分析与脚本生成」板块。

## 功能范围

- 商品信息录入与内容偏好标签
- 爆款素材底池匹配与素材策略一页纸
- 痛买放转四段式带货脚本生成，默认提供 4–5 个方向、至少 4 个
- 脚本优化迭代、复制与飞书导出
- 对外版服务商访问授权与使用留痕

## 技术栈

React 19、TypeScript、Vite、Tailwind CSS、Framer Motion。生产构建通过 `vite-plugin-singlefile` 将主程序内联为单个 `index.html`，另保留 `xlsx.full.min.js` 作为按需加载资源。

## 本地开发

```bash
npm install
npm run dev
```

## 生产构建

```bash
npm run build
```

构建产物位于 `dist/`，可直接部署到 GitHub Pages。
