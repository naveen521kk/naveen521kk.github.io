import React from "react";
import {Link} from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const PostLink = ({post}) => (
    <div className="text-lg py-4">
        <Link to={post.frontmatter.slug}>
            {post.frontmatter.image ? <img src={post.frontmatter.image} alt={post.frontmatter.title} /> : <div></div>}
            {post.frontmatter.title} ({post.frontmatter.date})
        </Link>
    </div>
);

export default PostLink;
