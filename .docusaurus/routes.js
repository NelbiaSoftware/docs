import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/blog',
    component: ComponentCreator('/blog', '98b'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '01a'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', 'b3c'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '8c8'),
            routes: [
              {
                path: '/docs/obviquests/intro',
                component: ComponentCreator('/docs/obviquests/intro', 'f52'),
                exact: true,
                sidebar: "obviquests"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'e5f'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
