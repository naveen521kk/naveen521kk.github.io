import React from "react";
import {Link} from "gatsby";
import * as styles from "./post-item.module.scss";

interface PostItemProps {
    post: {
        title: string;
        date: string;
        description: string;
        tags: string[];
        slug: string;
        updated_date: string;
        draft: boolean;
        excerpt: string;
    };
}

const PostItem = ({post}: PostItemProps) => {
    return (
        <div className={styles.item}>
            <article className={styles.article}>
                <Link to={`${post.slug}`} className={styles.postLink}>
                    <h3 className={styles.primaryTitle}>{post.title}</h3>
                    <h4 className={styles.secondaryTitle}>
                        {post.description}
                    </h4>
                    <p className={styles.excerpt}>{post.excerpt}</p>
                    <div className={styles.size16}></div>
                    <div className={styles.readMore}>
                        Read more
                        <div className={styles.icon}>
                            <svg
                                width="36"
                                height="12"
                                viewBox="0 0 36 12"
                                fill="none"
                                className={styles.svgRightIcon}
                            >
                                <path
                                    d="M0.75 6H11.25 M6 0.75L11.25 6L6 11.25"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                ></path>
                            </svg>
                        </div>
                    </div>
                </Link>
            </article>
        </div>
    );
};

export default PostItem;
