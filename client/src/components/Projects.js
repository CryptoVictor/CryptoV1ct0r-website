import React from 'react';
import projects from './projectsData';

const Projects = () => {
    return (
        <div>
            <div className="projects-container">
                <br/>
                {projects.map((project, idx) => (
                  <a href={project.link} key={project.name} target="_blank" rel="noopener noreferrer">
                    <div className="project-card">
                      <img src={project.image} className="project-logo" alt={project.name} />
                      <h4 className="project-description">{project.description}</h4>
                    </div>
                  </a>
                ))}
                <br/>
            </div>
        </div>
    );
}

export default Projects;