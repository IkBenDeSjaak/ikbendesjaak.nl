import React from "react";
import Icon from "@material-ui/core/Icon";
import styles from "./ProjectCard.module.scss";

const ProjectCard = (props) => {
    let gitHubIcon = null;
    if (props.gitHubLink !== "") {
        gitHubIcon = (
            <a
                href={props.gitHubLink}
                target="_blank"
                rel="noopener noreferrer"
            >
                <Icon className="fab fa-github" />
                <span>GITHUB</span>
            </a>
        );
    }

    let demoIcon = null;
    if (props.demoLink !== "") {
        demoIcon = (
            <a href={props.demoLink} target="_blank" rel="noopener noreferrer">
                <Icon className="fas fa-external-link-alt" />
                <span>LIVE</span>
            </a>
        );
    }

    const tools = props.stack.map((tool) => <span key={tool}>{tool}</span>);

    return (
        <div className={styles.projectCard}>
            <div className={styles.imageContainer}>
                <img
                    src={props.projectImgLinks[1]}
                    srcSet={`${props.projectImgLinks[1]} 600w, ${props.projectImgLinks[2]} 1200w, ${props.projectImgLinks[3]} 1920w`}
                    alt={props.projectTitle}
                    onClick={() => {
                        window.open(props.projectImgLinks[0]);
                    }}
                />
            </div>
            <div className={styles.info}>
                <h3 className={styles.projectTitle}>
                    <span>{props.projectTitle}</span>
                </h3>
                <div className={styles.tools}>
                    <p>{tools}</p>
                </div>
                <div className={styles.description}>
                    <p>{props.projectDescription}</p>
                </div>
                {/* <div className={styles.links}>
                    {gitHubIcon}
                    {demoIcon}
                </div> */}
            </div>
        </div>
    );
};

export default ProjectCard;
