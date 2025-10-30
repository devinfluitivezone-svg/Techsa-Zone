import React from "react";
import Link from "next/link";

const ProjectsStyleOne = () => {
  // Gallery of project images from products directory
  const projectImages = [
    { src: "/images/products/design/banner-design.jpg", title: "Banner Design" },
    { src: "/images/products/design/business-card.jpg", title: "Business Card" },
    { src: "/images/products/design/logo-1.jpg", title: "Logo Design" },
    { src: "/images/products/design/poster-design.jpg", title: "Poster Design" },
    { src: "/images/products/design/project-branding.jpg", title: "Branding" },
    { src: "/images/products/appmobile/conutertasbeeh1.png", title: "Mobile App" },
    { src: "/images/products/appmobile/getlisting1.png", title: "Property App" },
    { src: "/images/products/appmobile/surah-yaseen1.png", title: "Surah App" },
    { src: "/images/products/web/home-service-3.png", title: "Web App" },
  ];

  return (
    <>
      <section className="project-section pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <span>Projects</span>
            <h3>Our Projects For Client</h3>
          </div>

          <div className="row justify-content-center">
            {projectImages.map((project, index) => (
              <div key={index} className="col-lg-4 col-md-6 col-sm-6">
                <div className="single-project-box">
                  <Link href="/portfolio">
                    <img src={project.src} alt={project.title} />
                  </Link>
                  <div className="project-hover-content">
                    <h3>
                      <Link href="/portfolio">{project.title}</Link>
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="row justify-content-center mt-5">
            <div className="col-lg-12 text-center">
              <Link href="/portfolio" className="default-btn-one">
                Explore More <i className="fas fa-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectsStyleOne;
