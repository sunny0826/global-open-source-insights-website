// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '开源态势洞察',
  tagline: '大家的洞察，更好的开源',
  favicon: 'img/logo.png',

  // Set the production url of your site here
  url: 'https://insights.morethancode.plus',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'sunny0826', // Usually your GitHub org/user name.
  projectName: 'global-open-source-insights-website', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      announcementBar: {
        id: 'announcementBar-3', // Increment on change
        // content: `⭐️ If you like Docusaurus, give it a star on <a target="_blank" rel="noopener noreferrer" href="https://github.com/facebook/docusaurus">GitHub</a> and follow us on <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/docusaurus">Twitter ${TwitterSvg}</a>`,
        content: `🎉️ <b>开源态势洞察第一期(2023-11)已发布 <a target="_blank" href="https://atomgit.com/OpenAtomFoundation/Global-Open-Source-Insights/raw/master/Insights-First-Edition/%E5%AD%98%E6%A1%A3/%E6%96%87%E7%AB%A0%E5%AD%98%E6%A1%A3/%E5%BC%80%E6%BA%90%E6%80%81%E5%8A%BF%E6%B4%9E%E5%AF%9F-%E7%AC%AC%E4%B8%80%E6%9C%9F.pdf?type=download">点击下载</a></b> 🥳️`,
      },
      navbar: {
        title: '开源态势洞察',
        logo: {
          alt: 'Global Open Source Insights',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: '刊物',
          },
          {
            href: 'https://atomgit.com/OpenAtomFoundation/Global-Open-Source-Insights',
            label: 'AtomGit',
            position: 'right',
          },
          {
            href: 'https://github.com/sunny0826/global-open-source-insights-website',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '内容',
            items: [
              {
                label: '刊物',
                to: '/docs/2023-11/',
              },
            ],
          },
          {
            title: '社区',
            items: [
              {
                label: 'AtomGit',
                href: 'https://atomgit.com/OpenAtomFoundation/Global-Open-Source-Insights',
              },
              {
                label: '论坛',
                href: 'https://atomgit.com/OpenAtomFoundation/Global-Open-Source-Insights/discussions',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/OpenAtomFoundation',
              },
            ],
          },
          {
            title: '更多',
            items: [
              {
                label: '开放原子开源基金会',
                href: 'https://www.openatom.org',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} OpenAtom Foundation. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
