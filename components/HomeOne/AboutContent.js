import React from "react";

const AboutContent = () => {
  return (
    <>
      <section className="about-section">
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
                <h3>We are a Dynamic Team of Creative Innovators                </h3>
                <strong>
                Empowering brands to build powerful digital identities and achieve remarkable growth through design excellence and cutting-edge technology.
                </strong>
                <p>
                At Techsa Zone, we merge creativity with innovation to craft exceptional digital experiences. Our team of skilled designers, developers, and strategists work collaboratively to transform ideas into impactful solutions that drive results. We understand that every brand is unique, which is why we create tailored strategies that reflect your vision, engage your audience, and elevate your presence in the digital world.
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
