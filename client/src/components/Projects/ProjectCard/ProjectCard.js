import React from "react";
import Icon from "@material-ui/core/Icon";
import "./ProjectCard.scss";

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
        <div className="projectCard">
            <div className="imageContainer">
                <img src={props.projectImgAddress} alt={props.projectTitle} />
            </div>
            <div className="info">
                <h3 className="projectTitle">
                    <span>{props.projectTitle}</span>
                </h3>
                <div className="tools">
                    <p>{tools}</p>
                </div>
                <div className="description">
                    <p>{props.projectDescription}</p>
                </div>
                <div className="links">
                    {gitHubIcon}
                    {demoIcon}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
