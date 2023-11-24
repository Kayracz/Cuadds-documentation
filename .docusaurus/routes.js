import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/es/blog',
    component: ComponentCreator('/es/blog', '890'),
    exact: true
  },
  {
    path: '/es/blog/archive',
    component: ComponentCreator('/es/blog/archive', '266'),
    exact: true
  },
  {
    path: '/es/blog/caos-creativo',
    component: ComponentCreator('/es/blog/caos-creativo', '18f'),
    exact: true
  },
  {
    path: '/es/blog/el-poder-de-la-flexibilidad',
    component: ComponentCreator('/es/blog/el-poder-de-la-flexibilidad', 'b31'),
    exact: true
  },
  {
    path: '/es/blog/HOLAAA',
    component: ComponentCreator('/es/blog/HOLAAA', '383'),
    exact: true
  },
  {
    path: '/es/blog/tags',
    component: ComponentCreator('/es/blog/tags', '3a2'),
    exact: true
  },
  {
    path: '/es/blog/tags/blog',
    component: ComponentCreator('/es/blog/tags/blog', '697'),
    exact: true
  },
  {
    path: '/es/blog/tags/cuadds',
    component: ComponentCreator('/es/blog/tags/cuadds', '3a0'),
    exact: true
  },
  {
    path: '/es/blog/tags/docusaurus',
    component: ComponentCreator('/es/blog/tags/docusaurus', '6e2'),
    exact: true
  },
  {
    path: '/es/blog/tags/hola',
    component: ComponentCreator('/es/blog/tags/hola', '0ed'),
    exact: true
  },
  {
    path: '/es/blog/tags/productividad',
    component: ComponentCreator('/es/blog/tags/productividad', '2a4'),
    exact: true
  },
  {
    path: '/es/blog/tags/productivity',
    component: ComponentCreator('/es/blog/tags/productivity', '27d'),
    exact: true
  },
  {
    path: '/es/blog/tags/trabajoenequipo',
    component: ComponentCreator('/es/blog/tags/trabajoenequipo', 'e83'),
    exact: true
  },
  {
    path: '/es/docs',
    component: ComponentCreator('/es/docs', 'ac1'),
    routes: [
      {
        path: '/es/docs/en/Collaboration/AddYourTeam',
        component: ComponentCreator('/es/docs/en/Collaboration/AddYourTeam', '264'),
        exact: true,
        sidebar: "en"
      },
      {
        path: '/es/docs/en/Collaboration/Chat',
        component: ComponentCreator('/es/docs/en/Collaboration/Chat', 'b65'),
        exact: true,
        sidebar: "en"
      },
      {
        path: '/es/docs/en/Cuadd Options/Bookmarks',
        component: ComponentCreator('/es/docs/en/Cuadd Options/Bookmarks', '61e'),
        exact: true,
        sidebar: "en"
      },
      {
        path: '/es/docs/en/Cuadd Options/Calendar',
        component: ComponentCreator('/es/docs/en/Cuadd Options/Calendar', '510'),
        exact: true,
        sidebar: "en"
      },
      {
        path: '/es/docs/en/Cuadd Options/CuaddOptionMenu',
        component: ComponentCreator('/es/docs/en/Cuadd Options/CuaddOptionMenu', '983'),
        exact: true,
        sidebar: "en"
      },
      {
        path: '/es/docs/en/Cuadd Options/Deletion',
        component: ComponentCreator('/es/docs/en/Cuadd Options/Deletion', 'a8a'),
        exact: true,
        sidebar: "en"
      },
      {
        path: '/es/docs/en/Cuadd Options/Duplication',
        component: ComponentCreator('/es/docs/en/Cuadd Options/Duplication', '7b2'),
        exact: true,
        sidebar: "en"
      },
      {
        path: '/es/docs/en/Cuadd Options/Files',
        component: ComponentCreator('/es/docs/en/Cuadd Options/Files', 'c4a'),
        exact: true,
        sidebar: "en"
      },
      {
        path: '/es/docs/en/Cuadd Options/Movement',
        component: ComponentCreator('/es/docs/en/Cuadd Options/Movement', '11e'),
        exact: true,
        sidebar: "en"
      },
      {
        path: '/es/docs/en/Cuadd Options/Reflections',
        component: ComponentCreator('/es/docs/en/Cuadd Options/Reflections', '1a4'),
        exact: true,
        sidebar: "en"
      },
      {
        path: '/es/docs/en/Cuadd Options/Styling',
        component: ComponentCreator('/es/docs/en/Cuadd Options/Styling', '41c'),
        exact: true,
        sidebar: "en"
      },
      {
        path: '/es/docs/en/Cuadd Options/TaskAndNote',
        component: ComponentCreator('/es/docs/en/Cuadd Options/TaskAndNote', 'a41'),
        exact: true,
        sidebar: "en"
      },
      {
        path: '/es/docs/en/cuaddsPhilosophy',
        component: ComponentCreator('/es/docs/en/cuaddsPhilosophy', '8dc'),
        exact: true
      },
      {
        path: '/es/docs/en/intro',
        component: ComponentCreator('/es/docs/en/intro', '441'),
        exact: true,
        sidebar: "en"
      },
      {
        path: '/es/docs/en/PlansAndSubscriptions/',
        component: ComponentCreator('/es/docs/en/PlansAndSubscriptions/', '278'),
        exact: true,
        sidebar: "en"
      },
      {
        path: '/es/docs/en/Settings/',
        component: ComponentCreator('/es/docs/en/Settings/', '874'),
        exact: true,
        sidebar: "en"
      },
      {
        path: '/es/docs/es/Collaboration/AddYourTeam',
        component: ComponentCreator('/es/docs/es/Collaboration/AddYourTeam', '960'),
        exact: true,
        sidebar: "es"
      },
      {
        path: '/es/docs/es/Collaboration/Chat',
        component: ComponentCreator('/es/docs/es/Collaboration/Chat', '35b'),
        exact: true,
        sidebar: "es"
      },
      {
        path: '/es/docs/es/Cuadd Options/Bookmarks',
        component: ComponentCreator('/es/docs/es/Cuadd Options/Bookmarks', 'c94'),
        exact: true,
        sidebar: "es"
      },
      {
        path: '/es/docs/es/Cuadd Options/Calendar',
        component: ComponentCreator('/es/docs/es/Cuadd Options/Calendar', 'bef'),
        exact: true,
        sidebar: "es"
      },
      {
        path: '/es/docs/es/Cuadd Options/CuaddOptionMenu',
        component: ComponentCreator('/es/docs/es/Cuadd Options/CuaddOptionMenu', 'b80'),
        exact: true,
        sidebar: "es"
      },
      {
        path: '/es/docs/es/Cuadd Options/Deletion',
        component: ComponentCreator('/es/docs/es/Cuadd Options/Deletion', 'e4c'),
        exact: true,
        sidebar: "es"
      },
      {
        path: '/es/docs/es/Cuadd Options/Duplication',
        component: ComponentCreator('/es/docs/es/Cuadd Options/Duplication', 'eb4'),
        exact: true,
        sidebar: "es"
      },
      {
        path: '/es/docs/es/Cuadd Options/Files',
        component: ComponentCreator('/es/docs/es/Cuadd Options/Files', 'f58'),
        exact: true,
        sidebar: "es"
      },
      {
        path: '/es/docs/es/Cuadd Options/Movement',
        component: ComponentCreator('/es/docs/es/Cuadd Options/Movement', 'd76'),
        exact: true,
        sidebar: "es"
      },
      {
        path: '/es/docs/es/Cuadd Options/Reflections',
        component: ComponentCreator('/es/docs/es/Cuadd Options/Reflections', 'df9'),
        exact: true,
        sidebar: "es"
      },
      {
        path: '/es/docs/es/Cuadd Options/Styling',
        component: ComponentCreator('/es/docs/es/Cuadd Options/Styling', '916'),
        exact: true,
        sidebar: "es"
      },
      {
        path: '/es/docs/es/Cuadd Options/TaskAndNote',
        component: ComponentCreator('/es/docs/es/Cuadd Options/TaskAndNote', '802'),
        exact: true,
        sidebar: "es"
      },
      {
        path: '/es/docs/es/intro',
        component: ComponentCreator('/es/docs/es/intro', '76c'),
        exact: true,
        sidebar: "es"
      },
      {
        path: '/es/docs/es/PlansAndSubscriptions/',
        component: ComponentCreator('/es/docs/es/PlansAndSubscriptions/', '13e'),
        exact: true,
        sidebar: "es"
      },
      {
        path: '/es/docs/es/Settings/',
        component: ComponentCreator('/es/docs/es/Settings/', 'c37'),
        exact: true,
        sidebar: "es"
      },
      {
        path: '/es/docs/intro',
        component: ComponentCreator('/es/docs/intro', 'c93'),
        exact: true,
        sidebar: "es"
      }
    ]
  },
  {
    path: '/es/',
    component: ComponentCreator('/es/', '9ee'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
