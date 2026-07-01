import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Documentation | NelbiaSoftware',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  url: 'https://nelbiasoftware.github.io',
  baseUrl: '/docs/',

  onBrokenLinks: 'throw',
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    navbar: {
      items: [
        {
          type: "docSidebar",
          sidebarId: "nelbiaquests",
          position: "right",
          label: "NelbiaQuests",
        },
      ],
      logo: {
        alt: "logo",
        src: "img/favicon.ico",
        target: "_self",
      },
      hideOnScroll: true,
    },
    footer: {
      style: "dark",
      copyright: `© NelbiaSoftware, ${new Date().getFullYear()}`,
      links: [
        {
          items: [
            {
              label: 'Discord',
              to: 'https://discord.gg/4gq4PYeeYY',
            },
          ],
        },
      ]
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
