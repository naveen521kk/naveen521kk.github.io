const path = require(`path`);
const {createFilePath} = require(`gatsby-source-filesystem`);

exports.createPages = async ({graphql, actions, reporter}) => {
    const {createPage} = actions;

    // Define a template for blog post
    const blogPost = path.resolve(`./src/templates/blog-post.js`);

    // Get all markdown blog posts sorted by date
    const result = await graphql(
        `
            {
                allMdx(
                    sort: {fields: [frontmatter___date], order: ASC}
                    limit: 1000
                ) {
                    nodes {
                        id
                        fields {
                            slug
                        }
                    }
                }
            }
        `
    );

    if (result.errors) {
        reporter.panicOnBuild(
            `There was an error loading your blog posts`,
            result.errors
        );
        return;
    }

    const posts = result.data.allMdx.nodes;

    // Create blog posts pages
    // But only if there's at least one markdown file found at "posts/" (defined in gatsby-config.js)
    // `context` is available in the template as a prop and as a variable in GraphQL

    if (posts.length > 0) {
        posts.forEach((post, index) => {
            const previousPostId = index === 0 ? null : posts[index - 1].id;
            const nextPostId =
                index === posts.length - 1 ? null : posts[index + 1].id;

            createPage({
                path: post.fields.slug,
                component: blogPost,
                context: {
                    id: post.id,
                    previousPostId,
                    nextPostId
                }
            });
        });
    }
};

exports.onCreateNode = ({node, actions, getNode}) => {
    const {createNodeField} = actions;

    if (node.internal.type === `Mdx`) {
        const value = node.frontmatter.slug;
        createNodeField({
            name: `slug`,
            node,
            value
        });
    }
};
