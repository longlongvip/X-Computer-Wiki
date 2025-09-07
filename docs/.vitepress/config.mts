import { defineConfig } from 'vitepress'
import { head } from './config/head';
import { themeConfig } from './config/theme';

// https://vitepress.dev/reference/site-config
export default defineConfig({
    cleanUrls: true,
    lastUpdated: true, // 显示最后更新时间

    head, // <head>内标签配置
    // markdown: markdown, // Markdown配置
    themeConfig, // 主题配置
})
