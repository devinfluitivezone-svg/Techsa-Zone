import React from "react";
import Link from "next/link";

const ServicesCard = () => {
  return (
    <>
      <div className="services-section pb-70 bg-ffffff">
        <div className="container">
          <div className="section-title">
            <span>Services</span>
            <h3>How We Can Help?</h3>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-services-box bg-f3f3f3">
                <div className="icon">
                  <i className="flaticon-landing-page"></i>
                </div>
                <h3>
                  <Link href="/single-service">
                    Search Enginee Optimization
                  </Link>
                </h3>
                <p>
                  Boost your website's search engine rankings with our comprehensive SEO strategies. We optimize your content, technical structure, and backlink profile to drive organic traffic and improve visibility.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-services-box bg-f3f3f3">
                <div className="icon">
                  <i className="flaticon-goal"></i>
                </div>
                <h3>
                  <Link href="/single-service">Social Media Strategy</Link>
                </h3>
                <p>
                  Amplify your brand presence across social platforms with strategic content creation, community management, and targeted advertising campaigns that engage your audience and drive conversions.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-services-box bg-f3f3f3">
                <div className="icon">
                  <i className="flaticon-contract"></i>
                </div>
                <h3>
                  <Link href="/single-service">Real Time and Data</Link>
                </h3>
                <p>
                  Leverage real-time analytics and data insights to make informed marketing decisions. Our advanced tracking systems provide actionable intelligence for optimizing your digital campaigns.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-services-box bg-f3f3f3">
                <div className="icon">
                  <i className="flaticon-application"></i>
                </div>
                <h3>
                  <Link href="/single-service">Online Media Management</Link>
                </h3>
                <p>
                  Streamline your digital presence with comprehensive media management services. From content planning to distribution across multiple channels, we ensure consistent brand messaging.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-services-box bg-f3f3f3">
                <div className="icon">
                  <i className="flaticon-seo"></i>
                </div>
                <h3>
                  <Link href="/single-service">Reporting & Analysis</Link>
                </h3>
                <p>
                  Get detailed performance reports and actionable insights with our comprehensive analytics dashboard. Track ROI, measure campaign effectiveness, and identify growth opportunities.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-services-box bg-f3f3f3">
                <div className="icon">
                  <i className="flaticon-data-recovery"></i>
                </div>
                <h3>
                  <Link href="/single-service">Penalty Recovery</Link>
                </h3>
                <p>
                  Recover from Google penalties and restore your search rankings with our expert penalty recovery services. We identify issues, implement fixes, and rebuild your site's authority.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="default-animation">
          <div className="shape-img1">
            <img src="/images/shape/12.svg" alt="image" />
          </div>
          <div className="shape-img2">
            <img src="/images/shape/13.svg" alt="image" />
          </div>
          <div className="shape-img3">
            <img src="/images/shape/14.png" alt="image" />
          </div>
          <div className="shape-img4">
            <img src="/images/shape/15.png" alt="image" />
          </div>
          <div className="shape-img5">
            <img src="/images/shape/2.png" alt="image" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesCard;
