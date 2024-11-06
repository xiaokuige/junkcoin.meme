import { defineConfig } from 'vitepress'
export default defineConfig({
  title: "JunkCoin",
  description: "Junkcoin is Created in 2013 Revived 2024 made to be JUNK with the intention to fail",
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
      { text: 'EXPORE', link: 'https://junkcoinexplorer.com/' },
      { text: 'CMC', link: 'https://coinmarketcap.com/currencies/junkcoin/' },
      { text: 'POOL', link: 'https://miningpoolstats.stream/junkcoin' },
    ],

    socialLinks: [
      { icon: 'discord', link: 'https://discord.gg/uU9pXhvmQz' },
      { icon: 'x', link: 'https://x.com/junkcoin_JKC' },
      { icon: 'github', link: 'https://t.co/xYOqQDwna7' }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present junkcoin.meme'
    }
  }
})
