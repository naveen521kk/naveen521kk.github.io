import React from "react";
import {Link} from "gatsby";
const PostLink = ({post}) => (
    <div className="text-lg rounded-3xl border-8 border-red-200 p-3 xl:my-6 mb-4 xl:mx-3">
        <Link to={post.frontmatter.slug} className="p-3">
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
