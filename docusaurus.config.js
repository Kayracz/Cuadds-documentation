const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'Cuadds',
  tagline: 'The freedom to organize yourself any way YOU want',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/cuadds.ico',
  organizationName: 'Cuadds', 
  projectName: 'Cuadds',

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    path: 'i18n',
    localeConfigs: {
      en: {
        label: 'English',
        path: 'en',
      },
      es: {
        label: 'Español',
        path: 'es',
      },
    },
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          breadcrumbs: false,
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig: {
    navbar: {
      logo: {
        alt: 'Cuadds Logo',
        src: 'img/cuaddslogo.svg',
      },
      items: [
        {
          type: 'localeDropdown',
          position: 'left',
        },
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Tutorial',
        },
        {
          href: 'https://cuadds.com',
          label: 'Cuadds',
          position: 'right',
        },
        {
          href: 'https://www.linkedin.com/company/cuadds/',
          position: 'right',
          className: "social-media"
        },
        {
          href: 'https://www.instagram.com/cuaddsapp/',
          position: 'right',
          className: "social-media"
        },
        {
          href: 'https://twitter.com/cuadds',
          position: 'right',
          className: "social-media"
        },
        // Uncomment the following lines if needed
        // {
        //   to: '/blog', 
        //   label: 'Blog', 
        //   position: 'left'
        // },
      ],
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
});
