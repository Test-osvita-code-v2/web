const { description } = require("../../package");
const { config } = require("vuepress-theme-hope");

module.exports = config({
    base: "/web/",
    title: "Osvita-Code | Основи веб програмування",
    description: description,

    dest: "./dist",

    head: [
        [
            "link",
            {
                rel: "apple-touch-icon",
                sizes: "57x57",
                href: "/images/icons/apple-icon-57x57.png",
            },
        ],
        [
            "link",
            {
                rel: "apple-touch-icon",
                sizes: "60x60",
                href: "/images/icons/apple-icon-60x60.png",
            },
        ],
        [
            "link",
            {
                rel: "apple-touch-icon",
                sizes: "72x72",
                href: "/images/icons/apple-icon-72x72.png",
            },
        ],
        [
            "link",
            {
                rel: "apple-touch-icon",
                sizes: "76x76",
                href: "/images/icons/apple-icon-76x76.png",
            },
        ],
        [
            "link",
            {
                rel: "apple-touch-icon",
                sizes: "114x114",
                href: "/images/icons/apple-icon-114x114.png",
            },
        ],
        [
            "link",
            {
                rel: "apple-touch-icon",
                sizes: "120x120",
                href: "/images/icons/apple-icon-120x120.png",
            },
        ],
        [
            "link",
            {
                rel: "apple-touch-icon",
                sizes: "144x144",
                href: "/images/icons/apple-icon-144x144.png",
            },
        ],
        [
            "link",
            {
                rel: "apple-touch-icon",
                sizes: "152x152",
                href: "/images/icons/apple-icon-152x152.png",
            },
        ],
        [
            "link",
            {
                rel: "apple-touch-icon",
                sizes: "180x180",
                href: "/images/icons/apple-icon-180x180.png",
            },
        ],
        [
            "link",
            {
                rel: "icon",
                type: "image/png",
                sizes: "192x192",
                href: "/images/icons/android-icon-192x192.png",
            },
        ],
        [
            "link",
            {
                rel: "icon",
                type: "image/png",
                sizes: "32x32",
                href: "/images/icons/favicon-32x32.png",
            },
        ],
        [
            "link",
            {
                rel: "icon",
                type: "image/png",
                sizes: "96x96",
                href: "/images/icons/favicon-96x96.png",
            },
        ],
        [
            "link",
            {
                rel: "icon",
                type: "image/png",
                sizes: "16x16",
                href: "/images/icons/favicon-16x16.png",
            },
        ],
        ["link", { rel: "manifest", href: "/manifest.json" }],
        ["meta", { name: "msapplication-TileColor", content: "#ffffff" }],
        [
            "meta",
            {
                name: "msapplication-TileImage",
                content: "/images/icons/ms-icon-144x144.png",
            },
        ],
        ["meta", { name: "theme-color", content: "#000000" }],
        ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
        [
            "meta",
            { name: "apple-mobile-web-app-status-bar-style", content: "black" },
        ],
        [
            "link",
            {
                rel: "shortcut icon",
                href: "/favicon.ico",
                type: "image/x-icon",
            },
        ],
        [
            "script",
            {
                src:
                    "https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js",
            },
        ],
        [
            "script",
            {
                src:
                    "https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js",
            },
        ],
        ["script", { src: "https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js" }],
        [
            "script",
            {
                src:
                    "https://cdn.jsdelivr.net/npm/@babel/standalone/babel.min.js",
            },
        ],
    ],

    themeConfig: {
        pageInfo: false,
        darkmode: "switch",
        search: false,
        hostname: "https://Test-osvita-code-v2.github.io/web/",
        logo: "/assets/images/icons/favicon-96x96.png",
        author: "RenatTOP",

        nav: [
            {
                text: "Головна",
                link: "https://osvita-code.github.io",
                target: "_self",
            },
            {
                text: "Scratch",
                link: "https://osvita-code.github.io/scratch",
                target: "_self",
            },
            {
                text: "mBots",
                link: "https://osvita-code.github.io/robot",
                target: "_self",
            },
        ],

        sidebar: {
            "/lessons/": [
                {
                    title: "Web",
                    collapsable: false,
                    children: [
                        "/lessons/",
                        "/lessons/1.md",
                        "/lessons/2.md",
                        "/lessons/3.md",
                        "/lessons/4.md",
                        "/lessons/5.md",
                        "/lessons/6.md",
                        "/lessons/7.md",
                        "/lessons/8.md",
                        "/lessons/9.md",
                        "/lessons/10.md",
                        "/lessons/11.md",
                        "/lessons/12.md",
                        "/lessons/13.md",
                    ],
                },
            ],
            "/": [
                {
                    title: "Test",
                    collapsable: false,
                    children: [
                        "/test.md"
                    ]
                }
            ],
        },

        copyright: true,

        pwa: {
            favicon: "/favicon.ico",
            cachePic: true,
            apple: {
                icon: "/assets/images/icon/apple-icon-152.png",
                statusBarColor: "black",
            },
            msTile: {
                image: "/assets/images/icon/ms-icon-144.png",
                color: "#ffffff",
            },
            manifest: {
                icons: [
                    {
                        src: "/assets/images/icon/chrome-mask-512.png",
                        sizes: "512x512",
                        purpose: "maskable",
                        type: "image/png",
                    },
                    {
                        src: "/assets/images/icon/chrome-mask-192.png",
                        sizes: "192x192",
                        purpose: "maskable",
                        type: "image/png",
                    },
                    {
                        src: "/assets/images/icon/chrome-512.png",
                        sizes: "512x512",
                        type: "image/png",
                    },
                    {
                        src: "/assets/images/icon/chrome-192.png",
                        sizes: "192x192",
                        type: "image/png",
                    },
                ],
                shortcuts: [
                    {
                        name: "Osvita-Code Web",
                        short_name: "Web",
                        url: "https://Test-osvita-code-v2/web/",
                        icons: [
                            {
                                src: "/assets/images/icon/guide-maskable.png",
                                sizes: "192x192",
                                purpose: "maskable",
                                type: "image/png",
                            },
                            {
                                src: "/assets/images/icon/guide-monochrome.png",
                                sizes: "192x192",
                                purpose: "monochrome",
                                type: "image/png",
                            },
                        ],
                    },
                ],
            },
        },
    },
});
