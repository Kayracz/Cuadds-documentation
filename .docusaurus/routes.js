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
    component: ComponentCreator('/blog/caos-creativo', 'e9f'),
    exact: true
  },
  {
    path: '/blog/el-poder-de-la-flexibilidad',
    component: ComponentCreator('/blog/el-poder-de-la-flexibilidad', 'b7d'),
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
    component: ComponentCreator('/blog/welcome', '62a'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '8af'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '705'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '4a0'),
            routes: [
              {
                path: '/docs/en/Collaboration/AddYourTeam',
                component: ComponentCreator('/docs/en/Collaboration/AddYourTeam', '1e6'),
                exact: true,
                sidebar: "en"
              },
              {
                path: '/docs/en/Collaboration/Chat',
                component: ComponentCreator('/docs/en/Collaboration/Chat', '2d9'),
                exact: true,
                sidebar: "en"
              },
              {
                path: '/docs/en/Cuadd Options/Bookmarks',
                component: ComponentCreator('/docs/en/Cuadd Options/Bookmarks', '2dd'),
                exact: true,
                sidebar: "en"
              },
              {
                path: '/docs/en/Cuadd Options/Calendar',
                component: ComponentCreator('/docs/en/Cuadd Options/Calendar', '827'),
                exact: true,
                sidebar: "en"
              },
              {
                path: '/docs/en/Cuadd Options/CuaddOptionMenu',
                component: ComponentCreator('/docs/en/Cuadd Options/CuaddOptionMenu', 'd13'),
                exact: true,
                sidebar: "en"
              },
              {
                path: '/docs/en/Cuadd Options/Deletion',
                component: ComponentCreator('/docs/en/Cuadd Options/Deletion', '42f'),
                exact: true,
                sidebar: "en"
              },
              {
                path: '/docs/en/Cuadd Options/Duplication',
                component: ComponentCreator('/docs/en/Cuadd Options/Duplication', 'dca'),
                exact: true,
                sidebar: "en"
              },
              {
                path: '/docs/en/Cuadd Options/Files',
                component: ComponentCreator('/docs/en/Cuadd Options/Files', '205'),
                exact: true,
                sidebar: "en"
              },
              {
                path: '/docs/en/Cuadd Options/Movement',
                component: ComponentCreator('/docs/en/Cuadd Options/Movement', '989'),
                exact: true,
                sidebar: "en"
              },
              {
                path: '/docs/en/Cuadd Options/Reflections',
                component: ComponentCreator('/docs/en/Cuadd Options/Reflections', '9c1'),
                exact: true,
                sidebar: "en"
              },
              {
                path: '/docs/en/Cuadd Options/Styling',
                component: ComponentCreator('/docs/en/Cuadd Options/Styling', '474'),
                exact: true,
                sidebar: "en"
              },
              {
                path: '/docs/en/Cuadd Options/TaskAndNote',
                component: ComponentCreator('/docs/en/Cuadd Options/TaskAndNote', '4ab'),
                exact: true,
                sidebar: "en"
              },
              {
                path: '/docs/en/cuaddsPhilosophy',
                component: ComponentCreator('/docs/en/cuaddsPhilosophy', 'e9a'),
                exact: true
              },
              {
                path: '/docs/en/intro',
                component: ComponentCreator('/docs/en/intro', '5a9'),
                exact: true,
                sidebar: "en"
              },
              {
                path: '/docs/en/PlansAndSubscriptions/',
                component: ComponentCreator('/docs/en/PlansAndSubscriptions/', '5c3'),
                exact: true,
                sidebar: "en"
              },
              {
                path: '/docs/en/Settings/',
                component: ComponentCreator('/docs/en/Settings/', '405'),
                exact: true,
                sidebar: "en"
              },
              {
                path: '/docs/es/Collaboration/AddYourTeam',
                component: ComponentCreator('/docs/es/Collaboration/AddYourTeam', '693'),
                exact: true,
                sidebar: "es"
              },
              {
                path: '/docs/es/Collaboration/Chat',
                component: ComponentCreator('/docs/es/Collaboration/Chat', 'f5a'),
                exact: true,
                sidebar: "es"
              },
              {
                path: '/docs/es/Cuadd Options/Bookmarks',
                component: ComponentCreator('/docs/es/Cuadd Options/Bookmarks', '7b7'),
                exact: true,
                sidebar: "es"
              },
              {
                path: '/docs/es/Cuadd Options/Calendar',
                component: ComponentCreator('/docs/es/Cuadd Options/Calendar', '88c'),
                exact: true,
                sidebar: "es"
              },
              {
                path: '/docs/es/Cuadd Options/CuaddOptionMenu',
                component: ComponentCreator('/docs/es/Cuadd Options/CuaddOptionMenu', 'd0c'),
                exact: true,
                sidebar: "es"
              },
              {
                path: '/docs/es/Cuadd Options/Deletion',
                component: ComponentCreator('/docs/es/Cuadd Options/Deletion', '264'),
                exact: true,
                sidebar: "es"
              },
              {
                path: '/docs/es/Cuadd Options/Duplication',
                component: ComponentCreator('/docs/es/Cuadd Options/Duplication', '3c6'),
                exact: true,
                sidebar: "es"
              },
              {
                path: '/docs/es/Cuadd Options/Files',
                component: ComponentCreator('/docs/es/Cuadd Options/Files', '108'),
                exact: true,
                sidebar: "es"
              },
              {
                path: '/docs/es/Cuadd Options/Movement',
                component: ComponentCreator('/docs/es/Cuadd Options/Movement', '055'),
                exact: true,
                sidebar: "es"
              },
              {
                path: '/docs/es/Cuadd Options/Reflections',
                component: ComponentCreator('/docs/es/Cuadd Options/Reflections', '88a'),
                exact: true,
                sidebar: "es"
              },
              {
                path: '/docs/es/Cuadd Options/Styling',
                component: ComponentCreator('/docs/es/Cuadd Options/Styling', 'a9c'),
                exact: true,
                sidebar: "es"
              },
              {
                path: '/docs/es/Cuadd Options/TaskAndNote',
                component: ComponentCreator('/docs/es/Cuadd Options/TaskAndNote', '70d'),
                exact: true,
                sidebar: "es"
              },
              {
                path: '/docs/es/intro',
                component: ComponentCreator('/docs/es/intro', 'ad7'),
                exact: true,
                sidebar: "es"
              },
              {
                path: '/docs/es/PlansAndSubscriptions/',
                component: ComponentCreator('/docs/es/PlansAndSubscriptions/', 'c82'),
                exact: true,
                sidebar: "es"
              },
              {
                path: '/docs/es/Settings/',
                component: ComponentCreator('/docs/es/Settings/', '55b'),
                exact: true,
                sidebar: "es"
              },
              {
                path: '/docs/intro',
                component: ComponentCreator('/docs/intro', 'c95'),
                exact: true,
                sidebar: "en"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '6c1'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
