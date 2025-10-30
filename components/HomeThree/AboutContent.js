import React from "react";
import Link from "next/link";

const AboutContent = () => {
  return (
    <>
      <div className="about-section pb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="about-warp-image"></div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="about-warp pl-15">
                <span>About Us</span>
                <h3>We are Dynamic Team of SEO Experts</h3>

                <strong>
                  Empowering businesses to dominate search results and achieve unprecedented digital growth through innovative SEO strategies and data-driven marketing solutions.
                </strong>

                <p>
                  At Techsa Zone, we combine cutting-edge technology with proven SEO methodologies to deliver exceptional results. Our team of certified digital marketing specialists works tirelessly to optimize your online presence, increase organic traffic, and maximize your return on investment.
                </p>

                <p>
                  We understand that every business is unique, which is why we create customized strategies that align with your specific goals and target audience. Our comprehensive approach ensures sustainable growth and long-term success in the competitive digital landscape.
                </p>

                <div className="about-btn">
                  <Link href="/about-us" className="default-btn-one">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutContent;
