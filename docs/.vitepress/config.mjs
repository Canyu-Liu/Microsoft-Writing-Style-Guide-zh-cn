import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN',
  title: "Microsoft 写作风格指南",
  description: "Microsoft 写作风格指南中文版",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '原版文档', link: 'https://learn.microsoft.com/en-us/style-guide/'},
    ],

    sidebar: {
      "/": [
        {
          text: '',
          items: [
            { text: '欢迎', link: '/' },
            { text: 'Microsoft 的品牌声音：首要的是简洁且人性化', link: '/brand-voice-above-all-simple-human' },
            { text: 'Microsoft 风格和语言的十大技巧', link: '/top-10-tips-style-voice' },
            { text: '无偏见沟通', link: '/bias-free-communication' },
            {
              text: '全球传播',
              collapsed: true,
              items: [
                { text: '全球传播', link: '/global-communications/' }
              ]
            }
          ]
        }
      ],
    },

    // socialLinks: [
    //   { icon: 'bilibili', link: 'https://space.bilibili.com/380054694' },
    //   { icon: 'github', link: 'https://github.com/Canyu-Liu' },
    // ],
    outline: {
      label: '页面导航',
      level: [2, 3],
    },
    aside: 'right',
    footer: {
      message: '<span><a href="https://beian.miit.gov.cn/" style="text-decoration: none;">桂ICP备2022008478号-1</a></span><br><span><a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=45010802000543" style="text-decoration: none;">桂公网安备45010802000543号</a></span>',
      copyright: '<span><a href="https://yvfox.com/" style="text-decoration: none;">Copyright © 2024 小雨狐科技</a></span>'
    },
    sidebarMenuLabel: '目录',
    returnToTopLabel: '返回顶部',
    darkModeSwitchLabel: '外观',
    docFooter: {
      prev: '上一页',
      next: '下一页'
    }
  },
  locales: {
    '/': {
      label: '简体中文',
      lang: 'zh-CN'
    }
  }
})
