module.exports = {
    siteMetadata: {
        title: "Naveen M K",
        titleTemplate: "%s",
        description:
          "Naveen M K: A student, Open Source Person.",
        url: "https://naveen521kk.github.io",
        image: "/images/syrusdark.png",
        siteUrl: "https://naveen521kk.github.io"
    },
    plugins: [
        `gatsby-plugin-sass`,
        `gatsby-plugin-postcss`,
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `markdown-pages`,
                path: `${__dirname}/src/posts`
            }
        },
        `gatsby-transformer-remark`,
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-sitemap`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Naveen's Site`,
                short_name: `naveen`,
                description: `Random things`,
                start_url: `/`,
                background_color: `#fff`,
                theme_color: `#6B46C1`,
                display: `standalone`,
                icons: [
                    {
                        src: `/android-chrome-192x192.png`,
                        sizes: `192x192`,
                        type: `image/png`
                    },
                    {
                        src: `/android-chrome-512x512.png`,
                        sizes: `512x512`,
                        type: `image/png`
                    }
                ]
            }
        }
    ]
};
