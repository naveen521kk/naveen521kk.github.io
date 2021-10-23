import * as React from "react";
import "../styles/index.css";
import NavBar from "../components/header.jsx";
import SEO from "../components/seo.jsx";
import { StaticImage } from "gatsby-plugin-image"

const IndexPage = () => {
    return (
        <main>
            <SEO title="Naveen M K (about_me)" />
            <NavBar />
            <div className="container mx-auto px-5">
            <h2 className="text-3xl font-bold text-center">This is a WIP page.</h2>
            <StaticImage src="../assets/images/banner.png" alt="Naveen M K (naveen521kk)" className="block max-w-auto"/>
            </div>
        </main>
    );
};

export default IndexPage;
