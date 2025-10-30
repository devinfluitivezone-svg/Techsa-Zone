import React from "react";

const SingleServiceContent = () => {
  return (
    <>
      <section className="services-details-area ptb-100">
        <div className="container">
          <div className="services-details-overview">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12">
                <div className="services-details-desc">
                  <h3>Digital Marketing</h3>
                  <p>
                    Our comprehensive digital marketing services combine cutting-edge strategies with proven methodologies to elevate your brand's online presence. We create targeted campaigns that drive engagement, increase conversions, and deliver measurable ROI across all digital channels.
                  </p>

                  <div className="features-text">
                    <h4>
                      <i className="flaticon-check-mark"></i> Strategic Planning
                    </h4>
                    <p>
                      We develop comprehensive digital marketing strategies tailored to your business goals, target audience, and competitive landscape to ensure maximum impact and sustainable growth.
                    </p>
                  </div>

                  <div className="features-text">
                    <h4>
                      <i className="flaticon-check-mark"></i> Performance Optimization
                    </h4>
                    <p>
                      Our data-driven approach continuously monitors and optimizes your campaigns to maximize performance, improve conversion rates, and ensure the best possible return on your marketing investment.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 col-md-12">
                <div className="services-details-image">
                  <img src="/images/services-details-image/1.jpg" alt="image" />
                </div>
              </div>
            </div>
          </div>

          <div className="services-details-overview">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12">
                <div className="services-details-image">
                  <img src="/images/services-details-image/2.jpg" alt="image" />
                </div>
              </div>

              <div className="col-lg-6 col-md-12">
                <div className="services-details-desc">
                  <h3>Social Media Marketing</h3>
                  <p>
                    Transform your social media presence with our expert social media marketing services. We create engaging content, manage your community, and run targeted advertising campaigns that build brand awareness and drive meaningful engagement with your audience.
                  </p>

                  <div className="features-text">
                    <h4>
                      <i className="flaticon-check-mark"></i> Content Creation
                    </h4>
                    <p>
                      Our creative team develops compelling, brand-aligned content that resonates with your audience and drives engagement across all social media platforms.
                    </p>
                  </div>

                  <div className="features-text">
                    <h4>
                      <i className="flaticon-check-mark"></i> Community Management
                    </h4>
                    <p>
                      We actively manage your social media communities, respond to comments, engage with followers, and build meaningful relationships that strengthen your brand's online presence.
                    </p>
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

export default SingleServiceContent;
