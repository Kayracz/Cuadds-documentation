import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '914'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '96a'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'c20'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '489'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', 'f28'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', 'f07'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '801'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', '62d'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '10f'),
    exact: true
  },
  {
    path: '/blog/caos-creativo',
    component: ComponentCreator('/blog/caos-creativo', '3f2'),
    exact: true
  },
  {
    path: '/blog/el-poder-de-la-flexibilidad',
    component: ComponentCreator('/blog/el-poder-de-la-flexibilidad', '730'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', 'b45'),
    exact: true
  },
  {
    path: '/blog/tags/blog',
    component: ComponentCreator('/blog/tags/blog', 'ace'),
    exact: true
  },
  {
    path: '/blog/tags/cuadds',
    component: ComponentCreator('/blog/tags/cuadds', '45d'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', 'b26'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', '735'),
    exact: true
  },
  {
    path: '/blog/tags/productividad',
    component: ComponentCreator('/blog/tags/productividad', '252'),
    exact: true
  },
  {
    path: '/blog/tags/productivity',
    component: ComponentCreator('/blog/tags/productivity', '4a0'),
    exact: true
  },
  {
    path: '/blog/tags/trabajoenequipo',
    component: ComponentCreator('/blog/tags/trabajoenequipo', 'dcf'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', '709'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '86b'),
    routes: [
      {
        path: '/docs/en/Collaboration/AddYourTeam',
        component: ComponentCreator('/docs/en/Collaboration/AddYourTeam', '1d3'),
        exact: true,
        sidebar: "en"
      },
      {
        path: '/docs/en/Collaboration/Chat',
        component: ComponentCreator('/docs/en/Collaboration/Chat', '7d1'),
        exact: true,
        sidebar: "en"
      },
      {
        path: '/docs/en/Cuadd Options/Bookmarks',
        component: ComponentCreator('/docs/en/Cuadd Options/Bookmarks', '7b1'),
        exact: true,
        sidebar: "en"
      },
      {
        path: '/docs/en/Cuadd Options/Calendar',
        component: ComponentCreator('/docs/en/Cuadd Options/Calendar', '5bb'),
        exact: true,
        sidebar: "en"
      },
      {
        path: '/docs/en/Cuadd Options/CuaddOptionMenu',
        component: ComponentCreator('/docs/en/Cuadd Options/CuaddOptionMenu', '9cd'),
        exact: true,
        sidebar: "en"
      },
      {
        path: '/docs/en/Cuadd Options/Deletion',
        component: ComponentCreator('/docs/en/Cuadd Options/Deletion', '7bd'),
        exact: true,
        sidebar: "en"
      },
      {
        path: '/docs/en/Cuadd Options/Duplication',
        component: ComponentCreator('/docs/en/Cuadd Options/Duplication', '44e'),
        exact: true,
        sidebar: "en"
      },
      {
        path: '/docs/en/Cuadd Options/Files',
        component: ComponentCreator('/docs/en/Cuadd Options/Files', 'cb2'),
        exact: true,
        sidebar: "en"
      },
      {
        path: '/docs/en/Cuadd Options/Movement',
        component: ComponentCreator('/docs/en/Cuadd Options/Movement', '259'),
        exact: true,
        sidebar: "en"
      },
      {
        path: '/docs/en/Cuadd Options/Reflections',
        component: ComponentCreator('/docs/en/Cuadd Options/Reflections', '2b9'),
        exact: true,
        sidebar: "en"
      },
      {
        path: '/docs/en/Cuadd Options/Styling',
        component: ComponentCreator('/docs/en/Cuadd Options/Styling', 'a91'),
        exact: true,
        sidebar: "en"
      },
      {
        path: '/docs/en/Cuadd Options/TaskAndNote',
        component: ComponentCreator('/docs/en/Cuadd Options/TaskAndNote', '7f4'),
        exact: true,
        sidebar: "en"
      },
      {
        path: '/docs/en/cuaddsPhilosophy',
        component: ComponentCreator('/docs/en/cuaddsPhilosophy', 'ba5'),
        exact: true
      },
      {
        path: '/docs/en/intro',
        component: ComponentCreator('/docs/en/intro', '282'),
        exact: true,
        sidebar: "en"
      },
      {
        path: '/docs/en/PlansAndSubscriptions/',
        component: ComponentCreator('/docs/en/PlansAndSubscriptions/', 'a87'),
        exact: true,
        sidebar: "en"
      },
      {
        path: '/docs/en/Settings/',
        component: ComponentCreator('/docs/en/Settings/', '4db'),
        exact: true,
        sidebar: "en"
      },
      {
        path: '/docs/es/Collaboration/AddYourTeam',
        component: ComponentCreator('/docs/es/Collaboration/AddYourTeam', 'bd2'),
        exact: true,
        sidebar: "es"
      },
      {
        path: '/docs/es/Collaboration/Chat',
        component: ComponentCreator('/docs/es/Collaboration/Chat', 'acd'),
        exact: true,
        sidebar: "es"
      },
      {
        path: '/docs/es/Cuadd Options/Bookmarks',
        component: ComponentCreator('/docs/es/Cuadd Options/Bookmarks', 'd9c'),
        exact: true,
        sidebar: "es"
      },
      {
        path: '/docs/es/Cuadd Options/Calendar',
        component: ComponentCreator('/docs/es/Cuadd Options/Calendar', '6e0'),
        exact: true,
        sidebar: "es"
      },
      {
        path: '/docs/es/Cuadd Options/CuaddOptionMenu',
        component: ComponentCreator('/docs/es/Cuadd Options/CuaddOptionMenu', '717'),
        exact: true,
        sidebar: "es"
      },
      {
        path: '/docs/es/Cuadd Options/Deletion',
        component: ComponentCreator('/docs/es/Cuadd Options/Deletion', 'f6d'),
        exact: true,
        sidebar: "es"
      },
      {
        path: '/docs/es/Cuadd Options/Duplication',
        component: ComponentCreator('/docs/es/Cuadd Options/Duplication', '5b1'),
        exact: true,
        sidebar: "es"
      },
      {
        path: '/docs/es/Cuadd Options/Files',
        component: ComponentCreator('/docs/es/Cuadd Options/Files', '9eb'),
        exact: true,
        sidebar: "es"
      },
      {
        path: '/docs/es/Cuadd Options/Movement',
        component: ComponentCreator('/docs/es/Cuadd Options/Movement', '597'),
        exact: true,
        sidebar: "es"
      },
      {
        path: '/docs/es/Cuadd Options/Reflections',
        component: ComponentCreator('/docs/es/Cuadd Options/Reflections', '864'),
        exact: true,
        sidebar: "es"
      },
      {
        path: '/docs/es/Cuadd Options/Styling',
        component: ComponentCreator('/docs/es/Cuadd Options/Styling', '75e'),
        exact: true,
        sidebar: "es"
      },
      {
        path: '/docs/es/Cuadd Options/TaskAndNote',
        component: ComponentCreator('/docs/es/Cuadd Options/TaskAndNote', '12a'),
        exact: true,
        sidebar: "es"
      },
      {
        path: '/docs/es/intro',
        component: ComponentCreator('/docs/es/intro', 'd9f'),
        exact: true,
        sidebar: "es"
      },
      {
        path: '/docs/es/PlansAndSubscriptions/',
        component: ComponentCreator('/docs/es/PlansAndSubscriptions/', '043'),
        exact: true,
        sidebar: "es"
      },
      {
        path: '/docs/es/Settings/',
        component: ComponentCreator('/docs/es/Settings/', '63a'),
        exact: true,
        sidebar: "es"
      },
      {
        path: '/docs/intro',
        component: ComponentCreator('/docs/intro', '6bf'),
        exact: true,
        sidebar: "en"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '685'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
