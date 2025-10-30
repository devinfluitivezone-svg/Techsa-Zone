import React from "react";

const FeaturesArea = () => {
  return (
    <>
      <section className="features-area pt-100 pb-70">
        <div className="container">
          <div className="features-title">
            <span>Care Features</span>
            <h3>Create Exceptional Digital Experiences With Techsa Zone</h3>
          </div>

          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-features-item bg-b5a2f8">
                <div className="icon">
                  <i className="flaticon-seo"></i>
                </div>
                <h3>Design Consultancy</h3>
                <p>
                Gain a strategic edge with in-depth research into industry trends, design approaches, and digital experiences to help your brand stand out and outperform the competition.
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-features-item bg-f27e19">
                <div className="icon">
                  <i className="flaticon-analytics"></i>
                </div>
                <h3>Competitor Analysis</h3>
                <p>
                Gain a strategic edge with in-depth research into industry trends, design approaches, and digital experiences to help your brand stand out and outperform the competition.
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-features-item bg-1db294">
                <div className="icon">
                  <i className="flaticon-laptop"></i>
                </div>
                <h3>Social Media Marketing</h3>
                <p>
                Build meaningful engagement and elevate your brand identity through creative content, consistent visuals, and tailored campaigns across all major platforms.
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-features-item bg-e80d82">
                <div className="icon">
                  <i className="flaticon-analysis-1"></i>
                </div>
                <h3>Market Research</h3>
                <p>
                Unlock growth opportunities with comprehensive insights into your audience, industry standards, and competitors to guide impactful design and development decisions.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Shape Images */}
        <div className="features-animation">
          <div className="shape-img1">
            <img src="/images/shape/8.png" alt="image" />
          </div>
          <div className="shape-img2">
            <img src="/images/shape/5.png" alt="image" />
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturesArea;
