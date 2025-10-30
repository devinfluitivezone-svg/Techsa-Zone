import React from "react";

const AboutContent = () => {
  return (
    <>
      <section className="about-section pt-100">
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
                <h3>We are a Dynamic Team of Creative Innovators
                </h3>
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
                      1,165
                      <span className="sign-icon">+</span>
                    </h3>
                    <p>Project Completed</p>
                  </div>
                </div>

                <div className="col-lg-6 col-6 col-6">
                  <div className="single-fun-facts">
                    <h3>
                      2,665
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
