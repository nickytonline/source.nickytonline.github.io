const glob = require('glob'); // eslint-disable-line @typescript-eslint/no-var-requires

function getCmsFilePath(cmsDirectory) {
    return glob.sync(`${cmsDirectory}cms.*.js`)[0];
}

module.exports = {
    siteMetadata: {
        title: 'Just some dev',
        description: 'Just some software developer writing things ✏️',
        siteUrl: 'https://www.iamdeveloper.com',
        socialLinks: {
            github: { url: 'https://github.com/nickytonline', name: 'GitHub' },
            devto: { url: 'https://dev.to/nickytonline', name: 'dev.to' },
            twitter: {
                url: 'https://twitter.com/nickytonline',
                name: 'Twitter',
            },
            instagram: {
                url: 'https://instagram.com/nickytonline',
                name: 'Instagram',
            },
            stackoverflow: {
                url: 'https://stackoverflow.com/users/77814/nickytonline',
                name: 'Stack Overflow',
            },
            linkedin: {
                url: 'https://www.linkedin.com/in/nickytonline',
                name: 'LinkedIn',
            },
            mastodon: {
                url: 'https://toot.cafe/@nickytonline',
                name: 'Mastodon',
            },
        },
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        {
            resolve: 'gatsby-plugin-feed',
        },
        'gatsby-plugin-offline',
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                name: 'Just some dev',
                short_name: 'Just some dev', // eslint-disable-line @typescript-eslint/camelcase
                start_url: '/', // eslint-disable-line @typescript-eslint/camelcase
                background_color: '#f7f0eb', // eslint-disable-line @typescript-eslint/camelcase
                theme_color: '#a2466c', // eslint-disable-line @typescript-eslint/camelcase
                // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
                // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
                display: 'standalone',
                icon: 'static/img/apple-touch-icon.png',
            },
        },
        'gatsby-plugin-sass',
        {
            // keep as first gatsby-source-filesystem plugin for gatsby image support
            resolve: 'gatsby-source-filesystem',
            options: {
                path: `${__dirname}/static/img`,
                name: 'uploads',
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                path: `${__dirname}/src/pages`,
                name: 'pages',
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                path: `${__dirname}/src/img`,
                name: 'images',
            },
        },
        'gatsby-plugin-sharp',
        'gatsby-transformer-sharp',
        {
            resolve: 'gatsby-transformer-remark',
            options: {
                plugins: [
                    {
                        resolve: 'gatsby-remark-relative-images',
                        options: {
                            name: 'uploads',
                        },
                    },
                    {
                        resolve: 'gatsby-remark-images',
                        options: {
                            // It's important to specify the maxWidth (in pixels) of
                            // the content container as this plugin uses this as the
                            // base for generating different widths of each image.
                            maxWidth: 2048,
                        },
                    },
                    {
                        resolve: 'gatsby-remark-copy-linked-files',
                        options: {
                            destinationDir: 'static',
                        },
                    },
                ],
            },
        },
        {
            resolve: 'gatsby-plugin-netlify-cms',
            options: {
                modulePath: getCmsFilePath(`${__dirname}/src/cms/`),
            },
        },
        'gatsby-plugin-netlify', // make sure to keep it last in the array
        {
            resolve: 'gatsby-plugin-web-font-loader',
            options: {
                google: {
                    families: ['Oswald', 'Droid Sans'],
                },
            },
        },
        {
            resolve: 'gatsby-plugin-google-analytics',
            options: {
                trackingId: 'UA-55732414-1',
                // Puts tracking script in the head instead of the body
                head: false,
                // Setting this parameter is optional
                anonymize: true,
                // Setting this parameter is also optional
                respectDNT: true,
                // Avoids sending pageview hits from custom paths
                exclude: ['/preview/**', '/do-not-track/me/too/'],
            },
        },
        'gatsby-plugin-sitemap',
        {
            resolve: 'gatsby-plugin-typescript',
            options: {
                isTSX: true,
                allExtensions: true,
            },
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                        resolve: `gatsby-remark-prismjs`,
                        options: {
                            // Class prefix for <pre> tags containing syntax highlighting;
                            // defaults to 'language-' (eg <pre class="language-js">).
                            // If your site loads Prism into the browser at runtime,
                            // (eg for use with libraries like react-live),
                            // you may use this to prevent Prism from re-processing syntax.
                            // This is an uncommon use-case though;
                            // If you're unsure, it's best to use the default value.
                            classPrefix: 'language-',
                            // This is used to allow setting a language for inline code
                            // (i.e. single backticks) by creating a separator.
                            // This separator is a string and will do no white-space
                            // stripping.
                            // A suggested value for English speakers is the non-ascii
                            // character '›'.
                            inlineCodeMarker: null,
                            // This lets you set up language aliases.  For example,
                            // setting this to '{ sh: "bash" }' will let you use
                            // the language "sh" which will highlight using the
                            // bash highlighter.
                            aliases: {},
                            // This toggles the display of line numbers globally alongside the code.
                            // To use it, add the following line in src/layouts/index.js
                            // right after importing the prism color scheme:
                            //  `require("prismjs/plugins/line-numbers/prism-line-numbers.css");`
                            // Defaults to false.
                            // If you wish to only show line numbers on certain code blocks,
                            // leave false and use the {numberLines: true} syntax below
                            showLineNumbers: false,
                            // If setting this to true, the parser won't handle and highlight inline
                            // code used in markdown i.e. single backtick code like `this`.
                            noInlineHighlight: false,
                        },
                    },
                    {
                        resolve: '@raae/gatsby-remark-oembed',
                        options: {
                            providers: {
                                // Important to exclude providers
                                // that adds js to the page.
                                // If you do not need them.
                                include: ['Twitter'],
                            },
                        },
                    },
                ],
            },
        },
        {
            resolve: `gatsby-plugin-purgecss`,
            options: {
                printRejected: true, // Print removed selectors and processed file names
                // develop: true, // Enable while using `gatsby develop`
                // tailwind: true, // Enable tailwindcss support
                // whitelist: ['whitelist'], // Don't remove this selector
                ignore: ['prismjs/', 'prism-tweaks.scss', 'dank-mono.css'], // Ignore files/folders
                // purgeOnly : ['components/', '/main.css', 'bootstrap/'], // Purge only these files/folders
            },
        }, // must be after other CSS plugins
    ],
};
