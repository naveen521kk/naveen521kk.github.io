import * as React from "react";
import * as styles from "../styles/projects.module.scss";

import NavBar from "../components/header.tsx";
import SEO from "../components/seo.jsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faPython,
    faReact,
    faSquareJs
} from "@fortawesome/free-brands-svg-icons";
import {faC} from "@fortawesome/free-solid-svg-icons";
// import {StaticImage} from "gatsby-plugin-image";

import Project from "../components/Project";

const IndexPage = () => {
    React.useEffect(() => {
        const nav_height =
            document.getElementsByClassName("headroom-wrapper")[0].style.height;
        document
            .querySelector(":root")
            .style.setProperty("--nav-height", nav_height);
    });
    return (
        <main className={styles.main_div}>
            <SEO
                title="Projects | Naveen M K"
                description="A list of project that Naveen has worked on."
            />
            <NavBar />
            <div className={styles.container}>
                {/* <h2 className={index_css.temp_h2}>This is a WIP page.</h2> */}
                <h1>Projects</h1>
                <small>This page is a Work in Progress. Not all projects I've worked on is mentioned here.</small>
                <h2>Current Projects</h2>
                <p>
                    Projects that I maintain or contribute that aren't archived.
                </p>
                <div className={styles.projects_div}>
                    <Project
                        links={[
                            "https://www.manim.community",
                            "https://github.com/ManimCommunity/manim"
                        ]}
                        name="Manim, Community Version"
                        startDate={new Date("2019")}
                        endDate={null}
                        desc="A community maintained Python library for creating mathematical animations."
                        techStack={[<FontAwesomeIcon icon={faPython} />]}
                    />
                    <Project
                        links={[
                            "https://developerfolio.js.org/",
                            "https://github.com/saadpasta/developerFolio"
                        ]}
                        name="DeveloperFolio"
                        startDate={new Date("2020")}
                        endDate={new Date("2021")}
                        desc="Software Developer Portfolio Template that helps you showcase your work and skills as a software developer. "
                        techStack={[
                            <FontAwesomeIcon icon={faSquareJs} />,
                            <FontAwesomeIcon icon={faReact} />
                        ]}
                    />
                    <Project
                        links={[
                            "https://github.com/ManimCommunity/ManimPango",
                            "https://manimpango.manim.community"
                        ]}
                        name="ManimPango"
                        startDate={new Date("2021")}
                        endDate={null}
                        desc=" Binding for Pango, to use with Manim."
                        techStack={[
                            <FontAwesomeIcon icon={faPython} />,
                            <FontAwesomeIcon icon={faC} />
                        ]}
                    />
                    <Project
                        links={[
                            "https://github.com/ManimCommunity/manim-website",
                            "https://www.manim.community"
                        ]}
                        name="Manim Website"
                        startDate={new Date("2021")}
                        endDate={null}
                        desc="Manim Community's landing page."
                        techStack={[
                            <FontAwesomeIcon icon={faSquareJs} />,
                            <FontAwesomeIcon icon={faReact} />
                        ]}
                    />
                </div>
                <h2>Old Projects</h2>
                <span>
                    These are projects which are archived and no longer
                    maintained.
                </span>
                <div className={styles.projects_div}>
                    <Project
                        links={["https://github.com/naveen521kk/dog-ceo"]}
                        name="Dog CEO App"
                        startDate={new Date("2019")}
                        endDate={new Date("2020")}
                        desc="A app to display dog pictures from dog.ceo API."
                        techStack={[<FontAwesomeIcon icon={faPython} />]}
                    />
                    <Project
                        links={[
                            "https://github.com/naveen521kk/img2pdf",
                            "https://pypi.org/project/imgtopdfeasy/"
                        ]}
                        name="Img2PDF"
                        startDate={new Date("2020")}
                        endDate={new Date("2021")}
                        desc=" Command-line utility to convert images in a directory to pdf file. "
                        techStack={[<FontAwesomeIcon icon={faPython} />]}
                    />
                </div>
            </div>
        </main>
    );
};

export default IndexPage;
