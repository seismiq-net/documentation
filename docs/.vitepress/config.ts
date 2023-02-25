import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'en-US',
  title: 'QuakeSaver',
  base: '/web-resources/documentation/',
  description: 'Smart Sensors',

  themeConfig: {
    siteTitle: 'QuakeSaver',
    nav: [
      {text: 'Sensor Setup', link: '/setup/'}
    ],
    algolia: {
      appId: '...',
      apiKey: '...',
      indexName: '...'
    },
    sidebar: [
      {
        text: 'Sensors',
        link: '/sensors/',
        items: [
          {text: 'QuakeSaver MEMS', link: '/sensors/qs-mems'},
          {text: 'QuakeSaver HiDRA', link: '/sensors/qs-hidra'}
        ]
      },
      {
        text: 'Features',
        items: [
          {text: 'Timing and Synchronisation', link:'/features/timing'},
          {text: 'SeedLink Server', link:'/features/realtime-waveforms'},
          {text: 'Waveform Storage', link:'/features/waveform-storage'},
          {text: 'Sensor Monitoring', link:'/features/system-monitoring'},
          {text: 'System Integrity', link:'/features/system-integrity'},
          {text: 'Network Management', link:'/features/network-management'},
          {text: 'Meta Data', link:'/features/meta-data'},
        ]
      },
      {text: 'Real-time Analytics', link: '/real-time-analytics'},
      {text: 'Sensor Setup', link: '/setup', items: [
        {text: 'Quick Start Guide', link: '/setup/quickstart'},
        {text: 'Sensor Configuration', link: '/setup/configuration'},
      ]},
      {text: 'Sensor provisioning', link: '/provisioning'},
      {text: 'Development', link: '/development'}

    ],
    socialLinks: [
      {icon: 'linkedin', link: 'https://www.linkedin.com/company/quakesaver-gmbh/'},
      {icon: 'github', link: 'https://github.com/quakesaver/'}
    ],
    footer: {
      message:"Made by QuakeSaver with ❤️",
      copyright: "Copyright © 2020-present <a href='https://quakesaver.net'>QuakeSaver GmbH</a>"
    }
  }
})
