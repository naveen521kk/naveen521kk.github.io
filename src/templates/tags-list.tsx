import * as React from "react";
import {graphql, Link} from "gatsby";

import SEO from "../components/seo";
import NavBar from "../components/header.tsx";
import PostItem from "../components/post-item/post-item";
import * as styles from "../styles/tags.module.scss";
import "../styles/posts.scss";

const BlogPostTemplate = ({data, pageContext}) => {
    // const {previous, next} = data;

    const {allMdx} = data;
    const {nodes} = allMdx;
    const {tag}: {tag: string} = pageContext;

    return (
        <>
            <SEO title={`${tag} articles`} />
            <NavBar />

            <div className={styles.tags}>
                <div className={styles.outerDiv}>
                    <main className={styles.main}>
                        <div className={styles.innerDiv}>
                            <div className={styles.titleDiv}>
                                <h1 className={styles.title}>{tag}</h1>
                                <span className={styles.count}>
                                    {nodes.length}{" "}
                                    {nodes.length > 1 ? "Articles" : "Article"}
                                </span>
                            </div>
                            <div className={styles.postsGrid}>
                                {nodes.map((node: any, index: number) => (
                                    <PostItem
                                        key={index}
                                        post={{
                                            ...node.frontmatter,
                                            excerpt: node.excerpt
                                        }}
                                    />
                                ))}
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </>
    );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
    query ($tag: String!) {
        allMdx(
            filter: {frontmatter: {tags: {eq: $tag}}}
            sort: {frontmatter: {date: DESC}}
        ) {
            nodes {
                excerpt
                frontmatter {
                    tags
                    date
                    description
                    slug
                    title
                    updated_date
                    draft
                    image
                }
            }
        }
    }
`;
