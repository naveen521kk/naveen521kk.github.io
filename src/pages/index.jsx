import * as React from "react";
import * as index_css from "../styles/index.module.css";
import NavBar from "../components/header.jsx";
import SEO from "../components/seo.jsx";
import {StaticImage} from "gatsby-plugin-image";

const IndexPage = () => {
    return (
        <main>
            <SEO title="Naveen M K (about_me)" />
            <NavBar />
            <div className={index_css.container}>
                <h2 className={index_css.temp_h2}>This is a WIP page.</h2>
                <h3>
                    Hi I'm Naveen, you can find me on{" "}
                    <a href="https://github.com/naveen521kk">Github</a>. I'll
                    update with my projects here later.
                </h3>
                <StaticImage
                    src="../assets/images/banner.png"
                    alt="Naveen M K (naveen521kk)"
                    className={index_css.temp_img}
                />
            </div>
        </main>
    );
};

export default IndexPage;
