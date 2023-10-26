import React from "react";

import SEO from "../components/seo.jsx";
import NavBar from "../components/header.tsx";

import * as styles from "../styles/posts-style.module.scss";

const TitleLink = ({title}) => {
    const slug = title.replace(" ", "-").toLowerCase();
    return (
        <>
            <h2 id={slug} style={{position: "relative"}}>
                <a
                    href={`#${slug}`}
                    aria-label="setting page size permalink"
                    class="anchor before"
                >
                    <span>
                        <svg
                            aria-hidden="true"
                            focusable="false"
                            height="16"
                            version="1.1"
                            viewBox="0 0 16 16"
                            width="16"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                            ></path>
                        </svg>
                    </span>
                </a>
                {title}
            </h2>
        </>
    );
};

const LegalPage = () => {
    return (
        <div>
            <SEO title="Legal" description="" />
            <NavBar />
            <div className={styles.twoSection}>
                <aside>
                    <nav>
                        <h2 className={styles.tocTitle}>Table of Contents</h2>
                        {/* {tableOfContents.items &&
                            tableOfContents.items.map((item, index) => (
                                <a
                                    href={item.url}
                                    className={styles.tocLinks}
                                    key={index}
                                >
                                    {item.title}
                                </a>
                            ))} */}
                        <a href="#copyright" className={styles.tocLinks}>
                            Copyright
                        </a>
                        <a href="#privacy" className={styles.tocLinks}>
                            Privacy
                        </a>
                        <a href="#disclaimer" className={styles.tocLinks}>
                            Disclaimer
                        </a>
                    </nav>
                </aside>
                <div className={styles.outer_class}>
                    <div className={styles.core_blog_post + " blog-post"}>
                        <section
                            className="flex flex-col blog-post-content pt-3 mx-auto justify-center"
                            id="blog-start"
                            itemProp="articleBody"
                        >
                            <div>
                                <TitleLink title="Copyright" />
                                <p>
                                    All images and text on this blog are
                                    credited to Naveen M K, unless otherwise
                                    stated. Unauthorized use and/or duplication
                                    of this material (including translations)
                                    without express and written permission from
                                    Naveen M K is strictly prohibited.
                                </p>
                                <p>
                                    Excerpts (no longer than a short paragraph)
                                    and links to this blog are permitted,
                                    providing that full credit is given to
                                    Naveen M K with clear and specific direction
                                    to the original content.
                                </p>
                                <p>
                                    © {new Date().getFullYear()} Naveen M K –
                                    All Rights Reserved.
                                </p>
                            </div>

                            <div>
                                <TitleLink title="Privacy" />
                                <p>
                                    Anonymous visitor information is recorded
                                    and used by Naveen M K's blog to obtain blog
                                    statistics. This information is not shared
                                    or sold with anyone. Ever. Google Analytics
                                    records which browser you use, how you found
                                    this blog, and tracks
                                    hourly/daily/weekly/monthly visitors.
                                </p>
                                <p>
                                    Advertising partners may use cookies to
                                    store information about which pages you
                                    access or visit, track ad campaigns, and to
                                    customize web page content based on your
                                    browser type or other information that you
                                    send via their browser. Naveen M K's blog
                                    has no access to, or control over, cookies
                                    that are used by third-party advertisers.
                                    You should consult the respective privacy
                                    policies of these third-party ad servers for
                                    more detailed information, as well as for
                                    instructions about how to opt-out of certain
                                    practices. Naveen M K's blog's privacy
                                    policy does not apply to, and cannot control
                                    the activities of, such other advertisers or
                                    web sites.
                                </p>
                            </div>
                            <div>
                                <TitleLink title="Disclaimer" />
                                <p>
                                    The services are provided on an as-is and
                                    as-available basis. You agree that your use
                                    of the services will be at your sole risk.
                                    To the fullest extent permitted by law, we
                                    disclaim all warranties, express or implied,
                                    in connection with the services and your use
                                    thereof, including, without limitation, the
                                    implied warranties of merchantability,
                                    fitness for a particular purpose, and
                                    non-infringement. We make no warranties or
                                    representations about the accuracy or
                                    completeness of the services’ content or the
                                    content of any websites or mobile
                                    applications linked to the services and we
                                    will assume no liability or responsibility
                                    for any (1) errors, mistakes, or
                                    inaccuracies of content and materials, (2)
                                    personal injury or property damage, of any
                                    nature whatsoever, resulting from your
                                    access to and use of the services, (3) any
                                    unauthorised access to or use of our secure
                                    servers and/or any and all personal
                                    information and/or financial information
                                    stored therein, (4) any interruption or
                                    cessation of transmission to or from the
                                    services, (5) any bugs, viruses, trojan
                                    horses, or the like which may be transmitted
                                    to or through the services by any third
                                    party, and/or (6) any errors or omissions in
                                    any content and materials or for any loss or
                                    damage of any kind incurred as a result of
                                    the use of any content posted, transmitted,
                                    or otherwise made available via the
                                    services. We do not warrant, endorse,
                                    guarantee, or assume responsibility for any
                                    product or service advertised or offered by
                                    a third party through the services, any
                                    hyperlinked website, or any website or
                                    mobile application featured in any banner or
                                    other advertising, and we will not be a
                                    party to or in any way be responsible for
                                    monitoring any transaction between you and
                                    any third-party providers of products or
                                    services. As with the purchase of a product
                                    or service through any medium or in any
                                    environment, you should use your best
                                    judgement and exercise caution where
                                    appropriate.
                                </p>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LegalPage;
