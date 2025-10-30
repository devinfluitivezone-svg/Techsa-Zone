import React from "react";

const ProjectCard = ({ project, index, onClick }) => {
  const isEven = index % 2 === 0;

  return (
    <div 
      className={`portfolio-card ${isEven ? "image-left" : "image-right"}`}
      style={{
        animationDelay: `${index * 0.1}s`,
      }}
    >
      <div className="card-content-wrapper">
        <div className="card-image">
          <img
            src={project.image}
            alt={project.title}
            onClick={onClick}
          />
          <div className="card-overlay" onClick={onClick}>
            <div className="overlay-content">
              <i className="fas fa-eye"></i>
              <span>View Project</span>
            </div>
          </div>
        </div>

        <div className="card-info">
          <div className="card-category">
            <span className={`category-badge category-${project.category}`}>
              {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
            </span>
          </div>
          
          <h3 onClick={onClick}>{project.title}</h3>
          
          <p>{project.description}</p>
          
          <button className="card-btn" onClick={onClick}>
            View Details
            <i className="fas fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

