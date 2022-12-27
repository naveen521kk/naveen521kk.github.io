import React from "react";
import {graphql} from "gatsby";
import PostLink from "../components/post-link";
import NavBar from "../components/header.tsx";
import SEO from "../components/seo.jsx";
import * as PostsList from "../styles/posts-list.module.scss";

const IndexPage = ({
    data: {
        allMdx: {edges}
    }
}) => {
    const Posts = edges
        .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
        .filter(edge => !edge.node.frontmatter.draft)
        .map(edge => <PostLink key={edge.node.id} post={edge.node} />);

    return (
        <div>
            <SEO
                title="Blog Posts"
                description="This blog contains useful things (sometimes not) which are written by Naveen during his free time."
            />
            <NavBar />
            <div className={PostsList.container}>{Posts}</div>
        </div>
    );
};

export default IndexPage;

export const pageQuery = graphql`
    query {
        allMdx(sort: {order: DESC, fields: [frontmatter___date]}) {
            edges {
                node {
                    id
                    excerpt(pruneLength: 250)
                    frontmatter {
                        date(formatString: "MMMM DD, YYYY")
                        slug
                        title
                        image
                        draft
                    }
                }
            }
        }
    }
`;
