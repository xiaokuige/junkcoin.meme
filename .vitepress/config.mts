import { defineConfig } from 'vitepress'
export default defineConfig({
  title: "JUNKCOIN",
  description: "JunkCoin is Created in 2013 Revived 2024 made to be JUNK with the intention to fail",
  head: [
    ['link',
      {
        rel: 'icon',
        href: '/logo.png'
      }
    ]
  ],
  vite:{
    server:{
      port: 5177,
    }
  },
  themeConfig: {
    logo: '/logo.png',
    darkModeSwitchLabel: 'auto',
    nav: [
      { text: 'HOME', link: '/' },
    ],

    socialLinks: [
      { icon: 'x', link: 'https://x.com/TheXiaoKuiGe' },
    ],
    footer: {
      message: 'Thank you JKC for making me free!',
      copyright: 'Copyright © 2024-present junkcoin.meme'
    }
  }
})
