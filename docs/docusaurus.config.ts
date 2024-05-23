import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
    title: 'Vietnamese text utilities library documentation',
    tagline: 'An open-source library for work with Vietnamese text',
    favicon: 'https://github.githubassets.com/favicons/favicon.png',

    // Set the production url of your site here
    url: 'https://vn-text.vercel.app',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'lehuygiang28', // Usually your GitHub org/user name.
    projectName: 'text', // Usually your repo name.
    deploymentBranch: 'docs-page',
    trailingSlash: false,

    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'vi',
        locales: ['vi'],
    },

    presets: [
        [
            'classic',
            {
                docs: {
                    routeBasePath: '/',
                    sidebarPath: './sidebars.ts',
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl: 'https://github.com/lehuygiang28/text/tree/main/docs',
                    showLastUpdateTime: true,
                    showLastUpdateAuthor: true,
                },
                blog: false,
                theme: {
                    customCss: './static/css/custom.css',
                },
            } satisfies Preset.Options,
        ],
    ],

    themeConfig: {
        // Replace with your project's social card
        // image: 'img/docusaurus-social-card.jpg',
        navbar: {
            title: '@vn-utils/text',
            // logo: {
            //     alt: 'My Site Logo',
            //     src: 'img/logo.svg',
            // },
            items: [
                // {
                //     type: 'localeDropdown',
                //     position: 'right',
                // },
                {
                    href: 'https://github.com/lehuygiang28/text',
                    label: 'GitHub',
                    position: 'right',
                },
                {
                    href: 'https://www.npmjs.com/package/@vn-utils/text',
                    label: 'Npm',
                    position: 'right',
                },
            ],
        },
        footer: {
            style: 'dark',
            links: [
                {
                    title: 'More',
                    items: [
                        {
                            label: 'GitHub',
                            href: 'https://github.com/lehuygiang28/text',
                        },
                        {
                            label: 'NPM',
                            href: 'https://npmjs.com/package/@vn-utils/text',
                        },
                    ],
                },
            ],
            copyright: `Copyright © 2024 lehuygiang28. Built with Docusaurus.`,
        },
        prism: {
            theme: prismThemes.vsLight,
            darkTheme: prismThemes.dracula,
            defaultLanguage: 'typescript',
        },
        colorMode: {
            defaultMode: 'dark',
            respectPrefersColorScheme: true,
        },
    } satisfies Preset.ThemeConfig,
    plugins: [
        [
            'vercel-analytics',
            {
                debug: true,
                mode: 'auto',
            },
        ],
    ],
};

export default config;
