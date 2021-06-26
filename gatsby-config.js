module.exports = {
    siteMetadata: {
        title: "Naveen"
    },
    pathPrefix: "/site",
    plugins: [
        `gatsby-plugin-sass`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `markdown-pages`,
                path: `${__dirname}/src/posts`
            }
        },
        `gatsby-transformer-remark`
    ]
};
