import React from 'react';
import projects, { oldProjects } from './projectsData';

const allProjects = [...projects, ...oldProjects];

const Projects = () => {
    return (
        <div className="timeline-container">
            <div className="timeline-line"></div>
            {allProjects.map((project) => (
                <div key={project.name} className="timeline-item">
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="timeline-content">
                        <div className="timeline-image">
                            <img src={project.image} alt={project.name} />
                        </div>
                    </a>
                </div>
            ))}
        </div>
    );
}

export default Projects;
