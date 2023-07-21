import type {CreatePagesArgs, CreateNodeArgs} from "gatsby";
const path = require(`path`);
const {createFilePath} = require(`gatsby-source-filesystem`);

interface PostNode {
    id: string;
    frontmatter: {
        draft: boolean;
        slug: string;
        tags: string[];
    };
    internal: {
        contentFilePath: string;
    };
}

exports.createPages = async ({graphql, actions, reporter}: CreatePagesArgs) => {
    const {createPage} = actions;

    // Define a template for blog post and tags
    const blogPost = path.resolve(`./src/templates/blog-post.js`);
    const tagTemplate = path.resolve(`./src/templates/tags-list.tsx`);

    // Get all markdown blog posts sorted by date
    const result = await graphql(
        `
            {
                allMdx(sort: {frontmatter: {date: ASC}}, limit: 1000) {
                    nodes {
                        id
                        frontmatter {
                            draft
                            slug
                            tags
                        }
                        internal {
                            contentFilePath
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

    const posts = (result.data as any).allMdx.nodes as PostNode[];
    const tags: string[] = [];

    // Create blog posts pages
    // But only if there's at least one markdown file found at "posts/" (defined in gatsby-config.js)
    // `context` is available in the template as a prop and as a variable in GraphQL

    if (posts.length > 0) {
        posts.forEach((post, index) => {
            const previousPostId = index === 0 ? null : posts[index - 1].id;
            const nextPostId =
                index === posts.length - 1 ? null : posts[index + 1].id;
            if (post.frontmatter.draft) {
                return;
            }
            createPage({
                path: post.frontmatter.slug,
                component: `${blogPost}?__contentFilePath=${post.internal.contentFilePath}`,
                context: {
                    id: post.id,
                    previousPostId,
                    nextPostId
                }
            });
            if (post.frontmatter.tags) {
                post.frontmatter.tags.forEach((tag: string) => {
                    if (!tags.includes(tag)) {
                        tags.push(tag);
                    }
                });
            }
        });
    }

    // Create tag pages
    tags.forEach(tag => {
        createPage({
            path: `/tags/${tag}/`,
            component: tagTemplate,
            context: {
                tag,
                tagName: tag
            }
        });
    });
};

exports.onCreateNode = ({node, actions, getNode}: CreateNodeArgs) => {
    const {createNodeField} = actions;

    if (node.internal.type === `Mdx`) {
        const value: string = (node.frontmatter as any).slug;
        createNodeField({
            name: `slug`,
            node,
            value
        });
    }
};
