import React, { useState, useEffect } from "react";
import "./Projects.scss";
import ProjectCard from "./ProjectCard/ProjectCard";
import Title from "../shared/Title/Title";

import projectsData from "./projects.json";

const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        setProjects(
            projectsData.map((project) => {
                return (
                    <ProjectCard
                        key={project.title}
                        projectTitle={project.title}
                        projectDescription={project.description}
                        projectImgAddress={project.imgAddress}
                        gitHubLink={project.githubLink}
                        demoLink={project.demoLink}
                        stack={project.stack}
                    />
                );
            })
        );
    }, []);

    return (
        <div className="projects" id="mywork">
            <Title title="MY WORK" />
            <div className="projectCards">{projects}</div>
        </div>
    );
};

export default Projects;
