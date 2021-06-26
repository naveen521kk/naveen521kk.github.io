module.exports = {
    siteMetadata: {
        title: "Naveen"
    },
    pathPrefix: "/site",
    plugins: [
        `gatsby-plugin-sass`,
        `gatsby-plugin-postcss`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `markdown-pages`,
                path: `${__dirname}/src/posts`
            }
        },
        `gatsby-transformer-remark`,
        `gatsby-plugin-react-helmet`
    ]
};
