import React from "react";
import {Link} from "gatsby";
import * as PostsList from "../styles/posts-list.module.scss";

const PostLink = ({post}) => (
    <div className={PostsList.image_container}>
        <Link to={post.frontmatter.slug} className={PostsList.link_to}>
            {post.frontmatter.image ? (
                <img
                    src={post.frontmatter.image}
                    alt={post.frontmatter.title}
                    className={PostsList.images}
                />
            ) : (
                <img
                    src="/images/banner.png"
                    alt={post.frontmatter.title}
                    className={PostsList.images}
                />
            )}
            <h4 className={PostsList.post_title}>
                {post.frontmatter.title} ({post.frontmatter.date})
            </h4>
        </Link>
    </div>
);

export default PostLink;
