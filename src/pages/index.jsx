import * as React from "react";
import * as index_css from "../styles/index.module.scss";
import NavBar from "../components/header.jsx";
import SEO from "../components/seo.jsx";
// import {StaticImage} from "gatsby-plugin-image";
import {Mail, GitHub, Twitter, Gitlab} from "react-feather";

const SocialLink = ({href, title, children}) => {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer me"
            title={title}
        >
            {children}
        </a>
    );
};

const IndexPage = () => {
    React.useEffect(() => {
        const nav_height =
            document.getElementsByClassName("headroom-wrapper")[0].style.height;
        document
            .querySelector(":root")
            .style.setProperty("--nav-height", nav_height);
    });
    return (
        <main className={index_css.main_div}>
            <SEO title="Naveen M K | About Me" />
            <NavBar />
            <div className={index_css.container}>
                {/* <h2 className={index_css.temp_h2}>This is a WIP page.</h2> */}
                <h1>
                    Hi I'm Naveen.
                    <span className={index_css.wave_emoji}>👋</span>
                </h1>
                <span>You can find me in a lot of places on the internet.</span>
                <div className={index_css.social_icons}>
                    <SocialLink
                        href="mailto:naveen521kk@gmail.com"
                        title="Email"
                    >
                        <Mail />
                    </SocialLink>
                    <SocialLink
                        href="https://github.com/naveen521kk"
                        title="Github"
                    >
                        <GitHub />
                    </SocialLink>
                    <SocialLink
                        href="https://twitter.com/naveen521kk"
                        title="Twitter"
                    >
                        <Twitter />
                    </SocialLink>
                    <SocialLink
                        href="https://gitlab.com/naveen521kk"
                        title="Gitlab"
                    >
                        <Gitlab />
                    </SocialLink>
                </div>
                {/* <StaticImage
                    src="../assets/images/banner.png"
                    alt="Naveen M K (naveen521kk)"
                    className={index_css.temp_img}
                /> */}
            </div>
        </main>
    );
};

export default IndexPage;
