const nav = require('./themeConfig/nav')

module.exports = {
  /* --- FOR DEPLOYEMENT TO GITHUB PAGES--- */
  base: '/Documentation/', // The base URL the site will be deployed at.
  /* --- HOME PAGE --- */
  title: 'Agoric Documentation', // title for the site. prefix for all page titles and displayed in the navbar
  description: 'Secure smart contracts', // desc for the site; rendered as a <meta> tag in the page HTML
  // Extra tags to inject into the page HTML <head>. You can specify each tag in the form of [tagName, { attrName: attrValue }, innerHTML?].
  head: [
    ['link', { rel: 'icon', href: '/favicon-full.ico' }]
  ],

  /* --- DEFAULT THEME CONFIG --- */
  themeConfig: {
    /* --- NAVBAR (top) --- */
    nav,
    /* --- SIDEBAR --- */
    // This configuration displays different sidebars for different sections of
    // content. Pages must be organized into directories for each desired
    // section

    // NOTES:
    // Internal links: Must have a corresponding folder with a README.md file
    // Links must be absolute with trailing slash '/guide/'
    // Trailing slash implies it is looking for a .md file
    sidebar: {
      '/getting-started/': [
        {
          title: 'Getting Started',
          path: '/getting-started/',
          collapsable: false,
          sideBarDepth: 3,
          children: [
            {
              title: 'Agoric\'s Cosmic SwingSet',
              path: '/getting-started/',
              collapsable: false,
              sideBarDepth: 3
            },
            {
              title: 'Pixel Demo',
              path: '/getting-started/pixel-demo',
              collapsable: false,
              sideBarDepth: 3
            },
            {
              title: 'Timer Service',
              path: '/getting-started/timer-service',
              collapsable: false,
              sideBarDepth: 3
            }
          ]
        },
      ],
      '/ertp/': [
        {
          title: 'ERTP Guide',
          path: '/ertp/guide/',
          collapsable: false,
          sideBarDepth: 3,
          children: [
            '/ertp/guide/',
            '/ertp/guide/getting-started',
            '/ertp/guide/mint',
            '/ertp/guide/assay',
            '/ertp/guide/extent',
            '/ertp/guide/units',
            '/ertp/guide/label',
            '/ertp/guide/unit-ops',
            '/ertp/guide/default-configuration',
            '/ertp/guide/contract-hosts',
            '/ertp/guide/other-concepts'
          ]
        },
        {
          title: 'ERTP API',
          path: '/ertp/api/',
          collapsable: false,
          sideBarDepth: 3,
          children: [
            '/ertp/api/mint',
            '/ertp/api/assay',
            '/ertp/api/purse',
            '/ertp/api/payment',
            '/ertp/api/extent-ops',
            '/ertp/api/unit-ops',
            '/ertp/api/contract-hosts'
          ]
        },
        {
          title: 'ERTP Glossary',
          path: '/ertp/glossary/'
        }
      ],

      '/zoe/': [
        {
          title: 'Zoe',
          path: '/zoe/guide/',
          collapsable: false,
          sideBarDepth: 5,
          children: [
            '/zoe/guide/',
            '/zoe/guide/offer-safety',
            '/zoe/guide/offer-rules'
          ]
        },
        {
          title: 'Zoe Contracts',
          path: '/zoe/guide/contracts/autoswap',
          collapsable: false,
          sideBarDepth: 3,
          children: [
            '/zoe/guide/contracts/autoswap',
            '/zoe/guide/contracts/public-auction',
            '/zoe/guide/contracts/public-swap',
            '/zoe/guide/contracts/covered-call',
            '/zoe/guide/contracts/simple-exchange'
          ]
        },
        {
          title: 'Zoe API',
          path: '/zoe/api/',
          collapsable: false,
          sideBarDepth: 3,
          children: [
            '/zoe/api/zoe',
            '/zoe/api/structs',
            '/zoe/api/zoe-contract-facet'
          ],
        },
        {
          title: 'Zoe Roadmap',
          path: '/zoe/roadmap/'
        }
      ],

      '/smart-contracts-tutorials/': [
        {
          title: 'Smart Contracts Tutorials',
          path: '/smart-contracts-tutorials/guess37-one',
          collapsable: false,
          sideBarDepth: 3,
          children: [
            '/smart-contracts-tutorials/guess37-one',
            '/smart-contracts-tutorials/guess37-multiple'
          ]
        }
      ]
    }

    /* --- SEARCH --- */
    // Comes with built-in search functionality which builds its index from the
    // h1, h2, and h3 headers
    // Disable search by uncommenting the following line:
    // search: false
    // Cusotmize how many suggestions will be shown with:
    // searchMaxSuggestions: <numberOfSuggestions>
  }
}
