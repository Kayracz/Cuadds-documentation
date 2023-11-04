const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'Cuadds',
  tagline: 'Dinosaurs are cool',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/cuadds.ico',
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

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

themeConfig:
  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
  ({
    navbar: {
      title: 'Cuadds',
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
          link: {type: 'doc', id: 'intro'},
          position: 'left',
          label: 'Tutorial',
        },
        // {
        //   to: '/blog', label: 'Blog', position: 'left'},
        // {
          {
          href: 'https://cuadds.com',
          label: 'Cuadds',
          position: 'right',
         },
      ],
      },
      footer: {
      style: 'dark',
      links: [
      {
      title: 'Social Media',
      items: [
        {
          label: 'LinkedIn',
          href: 'https://www.linkedin.com/company/cuadds/',
        },
        {
          label: 'Instagram',
          href: 'https://www.instagram.com/cuaddsapp/',
        },
        {
          label: 'Twitter',
          href: 'https://twitter.com/cuadds',
        },
      ],
      },
      {
      title: 'More',
      items: [
        {
          label: 'Blog',
          to: '/blog',
        },
        {
          label: 'Cuadds.com',
          href: 'https://cuadds.com',
        },
      ],
      },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} cuadds.com`,
      },
      prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
      },
      }),
      });
