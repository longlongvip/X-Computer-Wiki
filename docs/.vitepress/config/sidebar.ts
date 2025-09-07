import { generateSidebar } from 'vitepress-sidebar';

const vitepressSidebarOptions = [
    {
        documentRootPath: 'docs',
        scanStartPath: 'sys/',
        resolvePath: '/sys/',
        useTitleFromFileHeading: true,
    },

    {
        documentRootPath: 'docs',
        scanStartPath: 'windows/',
        resolvePath: '/windows/',
        useTitleFromFileHeading: true,
    },

    {
        documentRootPath: 'docs',
        scanStartPath: 'linux/',
        resolvePath: '/linux/',
        useTitleFromFileHeading: true,
    },

    {
        documentRootPath: 'docs',
        scanStartPath: 'mac/',
        resolvePath: '/mac/',
        useTitleFromFileHeading: true,
    },

    {
        documentRootPath: 'docs',
        scanStartPath: 'net/',
        resolvePath: '/net/',
        useTitleFromFileHeading: true,
    },

    {
        documentRootPath: 'docs',
        scanStartPath: 'debug/',
        resolvePath: '/debug/',
        useTitleFromFileHeading: true,
    },

    {
        documentRootPath: 'docs',
        scanStartPath: 'coding/',
        resolvePath: '/coding/',
        useTitleFromFileHeading: true,
    },

    {
        documentRootPath: 'docs',
        scanStartPath: 'app/',
        resolvePath: '/app/',
        useTitleFromFileHeading: true,
    },

    {
        documentRootPath: 'docs',
        scanStartPath: 'people/',
        resolvePath: '/people/',
        useTitleFromFileHeading: true,
    },

];

export const sidebar = generateSidebar(vitepressSidebarOptions);
