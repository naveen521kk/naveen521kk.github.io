module.exports = {
    siteMetadata: {
        title: "Naveen M K",
        titleTemplate: "%s",
        description: "Naveen M K: A student, Open Source Person.",
        url: "https://www.naveenmk.me",
        image: "/images/banner.png",
        siteUrl: "https://www.naveenmk.me"
    },
    plugins: [
        `gatsby-plugin-image`,
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
        {
            resolve: `gatsby-plugin-mdx`,
            options: {
                extensions: [`.md`, `.mdx`],
                gatsbyRemarkPlugins: [
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 768
                        }
                    },
                    `gatsby-remark-autolink-headers`,
                    {
                        resolve: `gatsby-remark-prismjs`,
                        options: {
                            classPrefix: "language-",
                            aliases: {sh: "bash"},
                            inlineCodeMarker: null,
                            aliases: {},
                            showLineNumbers: false,
                            noInlineHighlight: false,
                            prompt: {
                                user: "root",
                                host: "localhost",
                                global: false
                            },
                            escapeEntities: {}
                        }
                    },
                    `gatsby-remark-copy-linked-files`,
                    `gatsby-remark-smartypants`
                ]
            }
        },
        `gatsby-transformer-json`,
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-sitemap`,
        //         {
        //             resolve: `gatsby-plugin-manifest`,
        //             options: {
        //                 name: `Naveen's Site`,
        //                 short_name: `naveen`,
        //                 description: `Random things`,
        //                 start_url: `/`,
        //                 background_color: `#fff`,
        //                 theme_color: `#6B46C1`,
        //                 display: `standalone`,
        //                 icons: [
        //                     {
        //                         src: `/android-chrome-192x192.png`,
        //                         sizes: `192x192`,
        //                         type: `image/png`
        //                     },
        //                     {
        //                         src: `/android-chrome-512x512.png`,
        //                         sizes: `512x512`,
        //                         type: `image/png`
        //                     }
        //                 ]
        //             }
        //         },
        {
            resolve: `gatsby-plugin-google-gtag`,
            options: {
                trackingIds: ["G-695MYTZSVL"]
            }
        },
        //         `gatsby-plugin-offline`,

        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-feed`,
            options: {
                query: `
                {
                  site {
                    siteMetadata {
                      title
                      description
                      siteUrl
                      site_url: siteUrl
                    }
                  }
                }
              `,
                feeds: [
                    {
                        serialize: ({query: {site, allMdx}}) => {
                            return allMdx.nodes.map(node => {
                                return Object.assign({}, node.frontmatter, {
                                    description: node.excerpt,
                                    date: node.frontmatter.date,
                                    url:
                                        site.siteMetadata.siteUrl +
                                        node.frontmatter.slug,
                                    guid:
                                        site.siteMetadata.siteUrl +
                                        node.frontmatter.slug,
                                    custom_elements: [
                                        {"content:encoded": node.html}
                                    ]
                                });
                            });
                        },
                        query: `
                    {
                        allMdx(
                        sort: { order: DESC, fields: [frontmatter___date] },
                      ) {
                        nodes {
                          excerpt
                          html
                          frontmatter {
                            title
                            date
                            slug
                          }
                        }
                      }
                    }
                  `,
                        output: "/rss.xml",
                        title: "Naveen M K's website RSS Feed"
                    }
                ]
            }
        }
    ]
};
