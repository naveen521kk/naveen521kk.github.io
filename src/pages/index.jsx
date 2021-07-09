import * as React from "react";
import "../styles/index.scss";
import NavBar from "../components/header.jsx";
import SEO from "../components/seo.jsx";

const IndexPage = () => {
    return (
        <main className="container mx-auto">
            <SEO title="Naveen M K (about_me)" />
            <NavBar />
            <div className="aboutmediv">
                <div className="titlediv">
                    {/* <h1>Hi, I'm Naveen</h1> */}
                    {/* <img src="images/syrusdark.png" alt="syrusdark" /> */}
                    <h2>This is a WIP page.</h2>
                </div>
            </div>
        </main>
    );
};

export default IndexPage;
