import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'en-US',
  title: 'SeismiQ Documentation',
  base: '/',
  description: 'Smart Sensors',

  themeConfig: {
    siteTitle: 'SeismiQ',
    nav: [
      { text: 'Sensor Setup', link: '/setup/' }
    ],
    algolia: {
      appId: 'NT504UZEG7',
      apiKey: '148e0526162e801305fc7196d8a569a9',
      indexName: 'docs_seismiq_net_nt504uzeg7_pages'
    },
    sidebar: [
      {
        text: 'Sensors',
        link: '/sensors/',
        items: [
          { text: 'SeismiQ MEMS', link: '/sensors/qs-mems' },
          { text: 'SeismiQ HiDRA', link: '/sensors/qs-hidra' }
        ]
      },
      {
        text: 'Features',
        link: '/features/',
        items: [
          { text: 'Timing and Synchronisation', link: '/features/timing' },
          { text: 'SeedLink', link: '/features/seedlink' },
          { text: 'FDSN Web Services', link: '/features/fdsnws' },
          { text: 'Waveform Storage', link: '/features/waveform-storage' },
          { text: 'Sensor Monitoring', link: '/features/system-monitoring' },
          { text: 'System Integrity', link: '/features/system-integrity' },
          { text: 'Network Management', link: '/features/network-management' },
          { text: 'Meta Data', link: '/features/meta-data' },
        ]
      },
      { text: 'Real-time Analytics', link: '/real-time-analytics' },
      { text: 'Python Client 🚀', link: '/python-client' },
      {
        text: 'Sensor Setup', link: '/setup', items: [
          { text: 'Quick Start Guide', link: '/setup/quickstart' },
          { text: 'Sensor Configuration', link: '/setup/configuration' },
        ]
      },
      { text: 'Sensor provisioning', link: '/provisioning' },
      { text: 'Development', link: '/development' }

    ],
    socialLinks: [
      { icon: { svg: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"> <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" /></svg>' }, link: 'https://quakesaver.net' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/company/quakesaver-gmbh/' },
      { icon: 'github', link: 'https://github.com/seismiq-net/' }
    ],
    footer: {
      message: "Made by SeismiQ with ❤️",
      copyright: "Copyright © 2023-present <a href='https://seismiq.net'>SeismiQ GmbH</a>"
    }
  }
})
