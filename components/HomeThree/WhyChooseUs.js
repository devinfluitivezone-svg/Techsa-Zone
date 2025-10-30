import React from "react";
import Link from "next/link";

const WhyChooseUs = () => {
  return (
    <>
      <div className="choose-section pt-0">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="choose-content-warp">
                <span>Why Choose Us</span>
                <h3>Outstanding Digital Experience</h3>
                <p>
                  Experience the difference with our proven track record of delivering exceptional digital marketing results. Our data-driven approach, combined with cutting-edge technology and industry expertise, ensures your business achieves sustainable growth and competitive advantage in the digital landscape.
                </p>

                <div className="choose-text">
                  <i className="flaticon-check-mark"></i>
                  <h4>Strategic Planning Process</h4>
                  <p>
                    We begin with comprehensive market research and competitor analysis to develop a customized strategy that aligns with your business objectives and target audience.
                  </p>
                </div>

                <div className="choose-text">
                  <i className="flaticon-check-mark"></i>
                  <h4>Expert Team Members</h4>
                  <p>
                    Our certified digital marketing specialists bring years of experience and stay updated with the latest industry trends to deliver cutting-edge solutions.
                  </p>
                </div>

                <div className="choose-text">
                  <i className="flaticon-check-mark"></i>
                  <h4>24/7 Support</h4>
                  <p>
                    Get round-the-clock assistance and monitoring with our dedicated support team ensuring your campaigns run smoothly and deliver optimal results.
                  </p>
                </div>

                <div className="choose-btn">
                  <Link href="/about-us" className="default-btn-one">
                    Discover More
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="choose-warp"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChooseUs;
