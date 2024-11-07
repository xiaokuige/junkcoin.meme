import { defineConfig } from 'vitepress'
export default defineConfig({
  title: "JunkCoin ($JKC)",
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
      { text: 'EXPLORER', link: 'https://junkcoinexplorer.com/' },
      { text: 'CMC', link: 'https://coinmarketcap.com/currencies/junkcoin/' },
      { text: 'MINING', link: 'https://miningpoolstats.stream/junkcoin' },
      { text: 'BitcoinTalk', link: 'https://bitcointalk.org/index.php?topic=194756.0' },
      { text: 'WALLET', link: '/' },
      { text: 'GUIDE', link: '/docs/welcome' },
    ],
    sidebar: [
      {
        text: 'WELCOME',
        link: '/docs/welcome'
      },
      {
        text: 'INTRODUCTION',
        link: '/docs/introduction'
      },
      {
        text: 'API',
        link: '/docs/api'
      }
    ],

    socialLinks: [
      { icon: 'discord', link: 'https://discord.gg/uU9pXhvmQz' },
      { icon: 'x', link: 'https://x.com/junkcoin_JKC' },
      { icon: 'github', link: 'https://t.co/xYOqQDwna7' }
    ],
    footer: {
      message: 'DISCLAIMER:$JKC is a modal token with no intrinsic value or expectation of financial return. There is no official team or roadmap. The token is completely useless and is used for entertainment purposes only. All resources provided on this website are taken from the Internet, and this website assumes no legal responsibility or liability.',
      copyright: 'Copyright © 2024-present junkcoin.meme'
    }
  }
})
