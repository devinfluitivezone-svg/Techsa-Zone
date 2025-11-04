import React from "react";
import Link from "next/link";

const FeaturesContent = ({ showButton = true }) => {
  return (
    <>
      <section className="features-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 col-md-12">
              <div className="features-content-area">
                <span>Care Features</span>
                <h3>Create Exceptional Digital Experiences With Techsa Zone</h3>
                <p>
                Leverage our creative expertise and cutting-edge technology to elevate your brand. From stunning UI/UX design to seamless development solutions, we craft digital experiences that engage, inspire, and drive lasting growth.
                </p>

                {showButton && (
                  <div className="features-btn">
                    <Link href="/features" className="features-btn-one">
                      More Details
                    </Link>
                  </div>
                )}
              </div>
            </div>

            <div className="col-lg-7 col-md-12">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="single-features-item bg-f1eff8">
                    <div className="icon">
                      <i className="flaticon-seo"></i>
                    </div>
                    <h3>Design Consultancy</h3>
                    <p>
                    Get expert guidance on enhancing your brand’s digital presence with our comprehensive design strategy and user experience consultation services.
                    </p>
                  </div>
                </div>

                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="single-features-item bg-fbe6d4">
                    <div className="icon">
                      <i className="flaticon-analytics"></i>
                    </div>
                    <h3>Competitor Analysis</h3>
                    <p>
                    Gain a strategic edge with in-depth research into industry trends, design approaches, and digital experiences to help your brand stand out and outperform the competition.
                    </p>
                  </div>
                </div>

                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="single-features-item bg-f0fffc">
                    <div className="icon">
                      <i className="flaticon-laptop"></i>
                    </div>
                    <h3>Social Media Marketing</h3>
                    <p>
                    Build meaningful engagement and elevate your brand identity through creative content, consistent visuals, and tailored campaigns across all major platforms.
                    </p>
                  </div>
                </div>

                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="single-features-item bg-f8e1eb">
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

export default FeaturesContent;
