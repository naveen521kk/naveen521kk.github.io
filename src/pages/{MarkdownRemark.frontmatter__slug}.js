import React from "react";
import {graphql} from "gatsby";
import NavBar from "../components/header.jsx";
import SEO from "../components/seo.jsx";
import BgPhoto from "../components/bgphoto.jsx";
import "../styles/posts.scss";
import {Helmet} from "react-helmet";

export default function Template({
    data // this prop will be injected by the GraphQL query below.
}) {
    const {markdownRemark} = data; // data.markdownRemark holds your post data
    const {frontmatter, html} = markdownRemark;
    const json_ld_data = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        author: "Naveen M K",
        name: frontmatter.title,
        abstract: frontmatter.description,
        image: frontmatter.image,
        description: frontmatter.description,
        copyrightYear: 2022,
        copyrightHolder: "Naveen M K"
    };
    return (
        <article>
            <Helmet>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(json_ld_data)
                    }}
                />
            </Helmet>
            <SEO
                title={frontmatter.title}
                description={frontmatter.description}
                image={frontmatter.image}
            />
            <NavBar />
            {frontmatter.image ? (
                <BgPhoto img_loc={frontmatter.image} />
            ) : (
                <div />
            )}
            <div className="relative mx-auto -m-80 bg-white max-w-3xl rounded-3xl">
                <div className="blog-post md:p-9 p-3">
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
