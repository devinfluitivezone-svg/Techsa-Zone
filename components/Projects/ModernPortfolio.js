import React, { useState, useEffect } from "react";
import { portfolioItems, filters } from "../../data/portfolioData";
import ProjectCard from "./ProjectCard";
import FilterBar from "./FilterBar";

const ModernPortfolio = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [filteredProjects, setFilteredProjects] = useState(portfolioItems);
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (activeFilter === "all") {
      setFilteredProjects(portfolioItems);
    } else {
      setFilteredProjects(portfolioItems.filter((project) => project.category === activeFilter));
    }
    setCurrentImageIndex(0);
  }, [activeFilter]);

  const handleFilterChange = (filterId) => {
    setActiveFilter(filterId);
  };

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
  };

  const handleNextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedProject.images.length);
    }
  };

  const handlePrevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => (prev - 1 + selectedProject.images.length) % selectedProject.images.length);
    }
  };

  const handleNext = (project) => {
    const currentIndex = filteredProjects.findIndex((p) => p.id === project.id);
    const nextIndex = (currentIndex + 1) % filteredProjects.length;
    setSelectedProject(filteredProjects[nextIndex]);
    setCurrentImageIndex(0);
  };

  const handlePrevious = (project) => {
    const currentIndex = filteredProjects.findIndex((p) => p.id === project.id);
    const prevIndex = currentIndex === 0 ? filteredProjects.length - 1 : currentIndex - 1;
    setSelectedProject(filteredProjects[prevIndex]);
    setCurrentImageIndex(0);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedProject) {
        if (e.key === "Escape") {
          closeModal();
        } else if (e.key === "ArrowLeft") {
          handlePrevImage();
        } else if (e.key === "ArrowRight") {
          handleNextImage();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedProject, currentImageIndex]);

  return (
    <>
      <section className="modern-portfolio-section ptb-100">
        <div className="container">
          <div className="section-title">
            <span>Our Work</span>
            <h3>Creative Portfolio Projects</h3>
            <p>
              Explore our diverse portfolio of cutting-edge web applications, innovative mobile apps, and stunning design projects. Each project showcases our commitment to excellence and innovation.
            </p>
          </div>

          <FilterBar
            filters={filters}
            activeFilter={activeFilter}
            onFilterChange={handleFilterChange}
          />

          <div className="portfolio-grid">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                onClick={() => handleProjectClick(project)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Image Gallery Modal */}
      {selectedProject && (
        <div className="portfolio-modal-overlay" onClick={closeModal}>
          <div className="portfolio-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={closeModal}>
              <i className="fas fa-times"></i>
            </button>
            
            <div className="modal-header">
              <h2>{selectedProject.title}</h2>
              <p className="modal-category">
                <span className={`category-badge category-${selectedProject.category}`}>
                  {selectedProject.category.charAt(0).toUpperCase() + selectedProject.category.slice(1)}
                </span>
              </p>
            </div>

            <div className="modal-description">
              <p>{selectedProject.description}</p>
              <p>{selectedProject.projectOverview}</p>
            </div>

            <div className="modal-gallery">
              <div className="gallery-slider">
                {selectedProject.images.map((image, index) => (
                  <div 
                    key={index} 
                    className={`gallery-slide ${index === currentImageIndex ? "active" : ""}`}
                  >
                    <img src={image} alt={`${selectedProject.title} - ${index + 1}`} />
                  </div>
                ))}
              </div>

              <button
                className="gallery-nav-btn prev-btn"
                onClick={handlePrevImage}
              >
                <i className="fas fa-chevron-left"></i>
              </button>

              <button
                className="gallery-nav-btn next-btn"
                onClick={handleNextImage}
              >
                <i className="fas fa-chevron-right"></i>
              </button>

              <div className="gallery-dots">
                {selectedProject.images.map((_, index) => (
                  <span
                    key={index}
                    className={`dot ${index === currentImageIndex ? "active" : ""}`}
                    onClick={() => setCurrentImageIndex(index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ModernPortfolio;

