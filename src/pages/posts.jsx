import React from "react";
import {graphql} from "gatsby";
import PostLink from "../components/post-link";
import NavBar from "../components/header.jsx";
import SEO from "../components/seo.jsx";
const IndexPage = ({
    data: {
        allMarkdownRemark: {edges}
    }
}) => {
    const Posts = edges
        .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
        .map(edge => <PostLink key={edge.node.id} post={edge.node} />);

    return (
        <div>
            <SEO
                title="Blog Posts"
                description="This blog contains useful things(sometimes not) which are written by Naveen during his free time."
            />
            <NavBar />
            <div className="md:grid md:gap-4 md:grid-cols-2 md:grid-rows-5 p-10">
                {Posts}
            </div>
        </div>
    );
};

export default IndexPage;

export const pageQuery = graphql`
    query {
        allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}) {
            edges {
                node {
                    id
                    excerpt(pruneLength: 250)
                    frontmatter {
                        date(formatString: "MMMM DD, YYYY")
                        slug
                        title
                        image
                    }
                }
            }
        }
    }
`;
