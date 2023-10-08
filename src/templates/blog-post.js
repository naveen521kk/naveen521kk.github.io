import * as React from "react";
import {graphql, Link} from "gatsby";

import SEO from "../components/seo";
import {JsonLd} from "../components/json_ld";
import NavBar from "../components/header.tsx";
import ScrollProgressBar from "../components/scroll-progress-bar";
import GiscusComment from "../components/giscus";
import * as styles from "../styles/posts-style.module.scss";
import "../styles/posts.scss";

import Banner from "../components/ads/banner-ad";

const BlogPostTemplate = ({data, location, children}) => {
    // const {previous, next} = data;

    const {mdx} = data;
    const {frontmatter, tableOfContents} = mdx;
    const {tags} = frontmatter;
    const json_ld_data = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: frontmatter.title,
        author: {
            "@type": "Person",
            name: "Naveen M K",
            url: "http://www.naveenmk.me",
            image: "https://avatars.githubusercontent.com/u/49693820"
        },
        name: frontmatter.title,
        abstract: frontmatter.description,
        image: frontmatter.image,
        description: frontmatter.description,
        copyrightYear: new Date().getFullYear(),
        copyrightHolder: "Naveen M K"
    };

    return (
        <div>
            <SEO
                title={frontmatter.title}
                description={frontmatter.description}
                image={frontmatter.image}
                article={true}
                isGiscusEnabled={true}
            />
            <JsonLd data={json_ld_data} />
            <NavBar />
            <article
                className="blog-post"
                itemScope
                itemType="http://schema.org/Article"
            >
                <div className={styles.twoSection}>
                    <aside>
                        <nav>
                            <h2 className={styles.tocTitle}>
                                Table of Contents
                            </h2>
                            {tableOfContents.items &&
                                tableOfContents.items.map((item, index) => (
                                    <a
                                        href={item.url}
                                        className={styles.tocLinks}
                                    >
                                        {item.title}
                                    </a>
                                ))}
                        </nav>
                        <Banner
                            className="adsbygoogle"
                            style={{display: "block"}}
                            client="ca-pub-7183740147103241"
                            slot="6635102288"
                            format="auto"
                            responsive="true"
                        />
                    </aside>
                    <div className={styles.outer_class}>
                        <div className={styles.core_blog_post + " blog-post"}>
                            <header>
                                <h1 className="py-2" itemProp="headline">
                                    {frontmatter.title}
                                </h1>
                                <small>
                                    Published on {frontmatter.date}
                                    {frontmatter.updated_date
                                        ? " · Updated on " +
                                          frontmatter.updated_date
                                        : ""}
                                </small>
                                {/* tags section */}
                                <div className={styles.tagSection}>
                                    {tags.map(tag => (
                                        <Link to={`/tags/${tag}`} key={tag}>
                                            <span
                                                key={tag}
                                                className={styles.tag}
                                            >
                                                {tag}
                                            </span>
                                        </Link>
                                    ))}
                                </div>
                                <img
                                    src={frontmatter.image}
                                    alt={frontmatter.title + " image"}
                                    className={styles.headerImage}
                                />
                            </header>
                            <section
                                className="flex flex-col blog-post-content pt-3 mx-auto justify-center"
                                id="blog-start"
                                itemProp="articleBody"
                            >
                                {children}
                            </section>
                        </div>
                    </div>
                </div>
            </article>
            <div className={styles.outer_class + " " + styles.giscusComment}>
                <GiscusComment />
            </div>
            <ScrollProgressBar />
            {/* <nav className="blog-post-nav">
                <ul
                    style={{
                        display: `flex`,
                        flexWrap: `wrap`,
                        justifyContent: `space-between`,
                        listStyle: `none`,
                        padding: 0
                    }}
                >
                    <li>
                        {previous && (
                            <Link to={previous.fields.slug} rel="prev">
                                ← {previous.frontmatter.title}
                            </Link>
                        )}
                    </li>
                    <li>
                        {next && (
                            <Link to={next.fields.slug} rel="next">
                                {next.frontmatter.title} →
                            </Link>
                        )}
                    </li>
                </ul>
            </nav> */}
        </div>
    );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
    query ($id: String!) {
        mdx(id: {eq: $id}) {
            frontmatter {
                date(formatString: "MMMM DD, YYYY")
                updated_date(formatString: "MMMM DD, YYYY")
                slug
                title
                description
                image
                tags
            }
            tableOfContents
        }
    }
`;
