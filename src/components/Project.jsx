import * as React from "react";
import * as styles from "../styles/projects.module.scss";

const Project = ({links, name, startDate, endDate, desc, techStack = null}) => {
    return (
        <div className={styles.projectSuperDiv}>
            <div className={styles.project_div}>
                <button
                    onClick={() => {
                        window.open(links[0]);
                    }}
                >
                    <h3>
                        {name} ({startDate.getFullYear()} -{" "}
                        {endDate ? endDate.getFullYear() : "present"})
                    </h3>
                    <p>{desc}</p>
                    <div className={styles.techStack}>
                        {techStack &&
                            techStack.map(tech => <span>{tech}</span>)}
                    </div>
                </button>
                <div>
                    {links.map(url => (
                        <div>
                            <a href={url} rel="noopener noreferrer" target="_blank">
                                {url}
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Project;
