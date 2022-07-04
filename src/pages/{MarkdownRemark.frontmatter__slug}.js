import React from "react";
import {graphql} from "gatsby";
import NavBar from "../components/header.jsx";
import SEO from "../components/seo.jsx";
import BgPhoto from "../components/bgphoto.jsx";
import "../styles/posts.scss";
import {JsonLd} from "../components/json_ld.jsx";
import * as Posts from "../styles/posts-style.module.scss";

export default function Template({
    data // this prop will be injected by the GraphQL query below.
}) {
    const {markdownRemark} = data; // data.markdownRemark holds your post data
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
        <article>
            <SEO
                title={frontmatter.title}
                description={frontmatter.description}
                image={frontmatter.image}
                article={true}
            />
            <JsonLd data={json_ld_data} />
            <NavBar />
            {frontmatter.image ? (
                <BgPhoto img_loc={frontmatter.image} />
            ) : (
                <div />
            )}
            <div className={Posts.outer_class}>
                <div className={Posts.core_blog_post + " blog-post"}>
                    <h1 className="py-2">{frontmatter.title}</h1>
                    <small>{frontmatter.date}</small>
                    <div
                        className="flex flex-col blog-post-content pt-3 mx-auto justify-center"
                        dangerouslySetInnerHTML={{__html: html}}
                        id="blog-start"
                    />
                </div>
            </div>
        </article>
    );
}

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
