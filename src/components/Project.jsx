import * as React from "react";
import * as styles from "../styles/projects.module.scss";

const Project = ({links, name, startDate, endDate, desc, techStack = null}) => {
    return (
        <div className={styles.project_div}>
            <h3>
                {name} ({startDate.getFullYear()} -{" "}
                {endDate ? endDate.getFullYear() : "present"})
            </h3>
            <span>{desc}</span>
            <div>
                {links.map(url => (
                    <div>
                        <a href={url}>
                            {url}
                        </a>
                    </div>
                ))}
            </div>

            <div className={styles.techStack}>
                {techStack && techStack.map(tech => <span>{tech}</span>)}
            </div>
        </div>
    );
};

export default Project;
