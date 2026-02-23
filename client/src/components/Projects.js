import React from 'react';
import projects, { oldProjects } from './projectsData';

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
            <hr className="line2" />
            <h3 style={{ textAlign: 'center', color: 'var(--text-secondary)', fontWeight: 600, marginBottom: 0 }}>Old Projects</h3>
            <div className="projects-container">
                {oldProjects.map((project) => (
                  <a href={project.link} key={project.name} target="_blank" rel="noopener noreferrer">
                    <div className="project-card" style={{ opacity: 0.72 }}>
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
