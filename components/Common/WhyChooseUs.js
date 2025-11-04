import React from "react";
import Link from "next/link";

const WhyChooseUs = () => {
  return (
    <>
      <section className="choose-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="choose-content-area">
                <span>Why Choose Us</span>
                <h3>Why Businesses Choose Techsa Zone</h3>
                <p>
                  We combine strategy, creativity, and engineering to deliver measurable growth. From SEO and performance marketing to modern web and app development, our team builds digital experiences that attract, convert, and retain customers—backed by transparent reporting and continuous optimization.
                </p>

                <div className="choose-text">
                  <i className="flaticon-check-mark"></i>
                  <h4>Results‑Driven Strategy</h4>
                  <p>
                    Every engagement starts with research, clear KPIs, and a roadmap tailored to your goals. We prioritize impact—organic traffic, qualified leads, and revenue—over vanity metrics.
                  </p>
                </div>

                <div className="choose-text">
                  <i className="flaticon-check-mark"></i>
                  <h4>Senior Expert Team</h4>
                  <p>
                    A multidisciplinary team of SEO specialists, marketers, designers, and engineers collaborates to ship reliable, scalable solutions—on time and on budget.
                  </p>
                </div>

                <div className="choose-text">
                  <i className="flaticon-check-mark"></i>
                  <h4>Support & Transparency</h4>
                  <p>
                    Dedicated communication, monthly reports, and ongoing iteration ensure you always know what’s shipped, what’s next, and how it impacts your bottom line.
                  </p>
                </div>

                
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="choose-image">
                <img src="/images/choose-image.png" alt="image" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyChooseUs;
