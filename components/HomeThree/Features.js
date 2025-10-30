import React from "react";
import Link from "next/link";

const Features = () => {
  return (
    <>
      <div className="features-section bg-color">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="single-features-item-two">
                <div className="icon">
                  <i className="flaticon-seo"></i>
                </div>
                <h3>
                  <Link href="/single-service">Design Consultancy</Link>
                </h3>
                <p>
                  Get expert guidance on optimizing your website for search engines with our comprehensive SEO audit and strategy development services.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-features-item-two">
                <div className="icon">
                  <i className="flaticon-analytics"></i>
                </div>
                <h3>
                  <Link href="/single-service">Competitor Analysis</Link>
                </h3>
                <p>
                  Gain competitive advantage with detailed analysis of your competitors' strategies, keywords, and market positioning to identify opportunities.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-features-item-two">
                <div className="icon">
                  <i className="flaticon-laptop"></i>
                </div>
                <h3>
                  <Link href="/single-service">Social Media Marketing</Link>
                </h3>
                <p>
                  Build engaging communities and drive conversions with strategic social media campaigns across all major platforms tailored to your brand.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
