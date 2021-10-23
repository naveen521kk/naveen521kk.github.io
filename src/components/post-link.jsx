import React from "react";
import {Link} from "gatsby";
import * as PostsList from "../styles/posts-list.module.css";
const PostLink = ({post}) => (
    <div className={PostsList.image_container}>
        <Link to={post.frontmatter.slug} className={PostsList.link_to}>
            {post.frontmatter.image ? (
                <img
                    src={post.frontmatter.image}
                    alt={post.frontmatter.title}
                    className="block max-w-auto"
                />
            ) : (
                <img
                    src="/images/banner.png"
                    alt={post.frontmatter.title}
                    className="block max-w-auto"
                />
            )}
            <h3 className="lg:pt-6 pt-4 p-0 text-xl text-center font-bold font-serif">
                {post.frontmatter.title} ({post.frontmatter.date})
            </h3>
        </Link>
    </div>
);

export default PostLink;
