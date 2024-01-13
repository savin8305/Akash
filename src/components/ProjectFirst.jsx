// ProjectFirst.jsx
import React, { useState, useEffect } from "react";

const ProjectFirst = ({ projects }) => {

  return (
    <div>
      {projects.map((project, index) => (
        <div key={index} className="project-card">
          <div className="project-iframe">
            <iframe
              title={project.title}
              src={project.demoUrl}
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="project-details">
            <h2 className="project-title">{project.title}</h2>
            <p className="project-description">{project.description}</p>
            <div className="project-tech-stack">
              {project.techStack.map((tech, index) => (
                <span key={index} className="tech">
                  {tech}
                </span>
              ))}
            </div>
            <div className="project-info">
              <p>Stars: N/A</p>
              <p>Commits: N/A</p>
              {/* You can replace with your own information */}
            </div>
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View Demo
            </a>
            <a
              href={project.codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View Code
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectFirst;
