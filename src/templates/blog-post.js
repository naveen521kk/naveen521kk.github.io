import * as React from "react";
import { graphql} from "gatsby";

import SEO from "../components/seo";
import {JsonLd} from "../components/json_ld.jsx";
import NavBar from "../components/header.jsx";
import BgPhoto from "../components/bgphoto.jsx";
import * as Posts from "../styles/posts-style.module.scss";
import "../styles/posts.scss";

const BlogPostTemplate = ({data, location}) => {
    // const {previous, next} = data;

    const {markdownRemark} = data;
    const {frontmatter, html} = markdownRemark;
    const json_ld_data = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: frontmatter.title,
        author: {
            "@type": "Person",
            name: "Naveen M K",
            url: "http://naveen521kk.github.io",
            image: "https://avatars.githubusercontent.com/u/49693820"
        },
        name: frontmatter.title,
        abstract: frontmatter.description,
        image: frontmatter.image,
        description: frontmatter.description,
        copyrightYear: 2022,
        copyrightHolder: "Naveen M K"
    };

    return (
        <div>
            <SEO
                title={frontmatter.title}
                description={frontmatter.description}
                image={frontmatter.image}
                article={true}
            />
            <JsonLd data={json_ld_data} />
            <article
                className="blog-post"
                itemScope
                itemType="http://schema.org/Article"
            >
                <NavBar />
                {frontmatter.image ? (
                    <BgPhoto img_loc={frontmatter.image} />
                ) : (
                    <div />
                )}
                <div className={Posts.outer_class}>
                    <div className={Posts.core_blog_post + " blog-post"}>
                        <header>
                            <h1 className="py-2" itemProp="headline">
                                {frontmatter.title}
                            </h1>
                            <small>{frontmatter.date}</small>
                        </header>
                        <section
                            className="flex flex-col blog-post-content pt-3 mx-auto justify-center"
                            dangerouslySetInnerHTML={{__html: html}}
                            id="blog-start"
                            itemProp="articleBody"
                        />
                    </div>
                </div>
            </article>
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
        markdownRemark(id: {eq: $id}) {
            html
            frontmatter {
                date(formatString: "MMMM DD, YYYY")
                slug
                title
                description
                image
            }
        }
    }
`;
