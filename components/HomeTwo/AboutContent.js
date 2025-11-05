import React, { useState, useEffect, useRef } from "react";
import { portfolioItems } from "../../data/portfolioData";

const AboutContent = () => {
  const [projectCount, setProjectCount] = useState(0);
  const [clientCount, setClientCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  // Get actual counts from portfolio data
  const targetProjects = portfolioItems.length;
  // Set client count manually
  const targetClients = 7; // Set your desired client count here
  const duration = 2000; // 2 seconds

  const animateCounter = () => {
    const startTime = Date.now();
    const projectsStep = targetProjects / (duration / 16);
    const clientsStep = targetClients / (duration / 16);

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);

      setProjectCount(Math.floor(targetProjects * easeOutQuart));
      setClientCount(Math.floor(targetClients * easeOutQuart));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setProjectCount(targetProjects);
        setClientCount(targetClients);
      }
    };

    requestAnimationFrame(animate);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            animateCounter();
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  const formatNumber = (num) => {
    return num.toLocaleString();
  };

  return (
    <>
      <section className="about-section" ref={sectionRef}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="about-image">
                <img src="/images/about-image.png" alt="image" />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="about-area-content">
                <span>About Us</span>
                <h3>We are Dynamic Team of SEO Experts</h3>
                <strong>
                  Empowering businesses to dominate search results and achieve unprecedented digital growth through innovative SEO strategies and data-driven marketing solutions.
                </strong>
                <p>
                  At Techsa Zone, we combine cutting-edge technology with proven SEO methodologies to deliver exceptional results. Our team of certified digital marketing specialists works tirelessly to optimize your online presence, increase organic traffic, and maximize your return on investment. We understand that every business is unique, which is why we create customized strategies that align with your specific goals and target audience.
                </p>
              </div>

              <div className="row">
                <div className="col-lg-6 col-6 col--6">
                  <div className="single-fun-facts">
                    <h3>
                      {formatNumber(projectCount)}
                      <span className="sign-icon">+</span>
                    </h3>
                    <p>Project Completed</p>
                  </div>
                </div>

                <div className="col-lg-6 col-6 col-6">
                  <div className="single-fun-facts">
                    <h3>
                      {formatNumber(clientCount)}
                      <span className="sign-icon">+</span>
                    </h3>
                    <p>Satisfied Clients</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutContent;
