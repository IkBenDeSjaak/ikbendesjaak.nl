import React, { useState, useEffect } from 'react'
import styles from './Projects.module.scss'
import ProjectCard from './ProjectCard/ProjectCard'
import Title from '../shared/Title/Title'

import projectsData from './projects.json'

const Projects = () => {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    setProjects(
      projectsData.map((project) => {
        return (
          <ProjectCard
            key={project.title}
            projectTitle={project.title}
            projectDescription={project.description}
            projectImgLinks={project.imgLinks}
            gitHubLink={project.githubLink}
            demoLink={project.demoLink}
            stack={project.stack}
          />
        )
      })
    )
  }, [])

  return (
    <div className={styles.projects} id='mywork'>
      <Title title='MY WORK' />
      <div className={styles.projectCards}>{projects}</div>
    </div>
  )
}

export default Projects
