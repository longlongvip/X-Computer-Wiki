import type { DefaultTheme } from 'vitepress';

export const nav: DefaultTheme.Config['nav'] = [
    {
        text: '首页', link: '/index'
    },

    {
        text: '操作系统',
        items: [
            { text: '基础', link: '/sys/index' },
            { text: 'Windows', link: '/windows/index' },
            { text: 'Linux', link: '/linux/index' },
            { text: 'MacOS', link: '/mac/index' },
        ]
    },

    {
        text: '网络', link: '/net/index'
    },

    {
        text: '代码', link: '/code/index'
    },

    {
        text: '调试', link: '/debug/index'
    },

    {
        text: '编码', link: '/coding/index'
    },

    {
        text: '工具', link: '/app/index'
    },

    {
        text: '人物', link: '/people/index'
    },
]
