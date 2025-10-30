import React from "react";

const AnalysisFormContent = () => {
  return (
    <>
      <section className="analysis-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="analysis-area-content">
                <span>Analysis</span>
                <h3>Get Free SEO Analysis</h3>
                <p>
                  Unlock your website's true potential with our comprehensive free SEO analysis. Our certified experts will conduct a detailed audit of your current search engine performance, identify key optimization opportunities, and provide you with a personalized strategy to improve your rankings and increase organic traffic.
                </p>
              </div>

              <form className="contactForm">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="form-group">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        className="form-control"
                        placeholder="Your Name *"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="form-group">
                      <input
                        type="text"
                        name="text"
                        id="text"
                        className="form-control"
                        placeholder="Email *"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="form-group">
                      <input
                        type="text"
                        name="name"
                        id="phone"
                        className="form-control"
                        placeholder="Phone *"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="form-group">
                      <input
                        type="text"
                        name="name"
                        id="website"
                        className="form-control"
                        placeholder="Website *"
                      />
                    </div>
                  </div>
                </div>

                <div className="send-btn">
                  <button type="submit" className="default-btn-one">
                    Get Free Analysis
                  </button>
                </div>
              </form>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="analysis-image right">
                <img src="/images/analysis-image.png" alt="image" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AnalysisFormContent;
