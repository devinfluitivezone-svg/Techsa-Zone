import React, { Component } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton,
} from "react-accessible-accordion";

const FaqSection = () => {
  return (
    <>
      <section className="faq-section ptb-100">
        <div className="container">
          <div className="faq-area-content">
            <span>Faq</span>
            <h3>Frequently Asked Questions</h3>
          </div>

          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="faq-accordion">
                <Accordion preExpanded={["a"]}>
                  <AccordionItem uuid="a">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        How long does it take to see results from SEO?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        SEO results typically begin to show within 3-6 months, with significant improvements visible after 6-12 months. However, this timeline varies based on your industry competition, current website status, and the scope of optimization work. We provide monthly progress reports to keep you informed of improvements.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="b">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        What's included in your digital marketing packages?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Our digital marketing packages include SEO optimization, social media management, content creation, PPC campaign management, analytics reporting, and monthly strategy reviews. Each package is customized based on your business goals, target audience, and budget requirements.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="c">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Do you work with businesses in any industry?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Yes, we work with businesses across all industries including healthcare, e-commerce, professional services, technology, and more. Our team has extensive experience adapting digital marketing strategies to meet the unique needs and compliance requirements of different sectors.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="d">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        How do you measure the success of our campaigns?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        We track key performance indicators including website traffic, conversion rates, keyword rankings, social media engagement, lead generation, and ROI. We provide detailed monthly reports with actionable insights and recommendations for continuous improvement.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="e">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        What makes your agency different from competitors?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Our agency stands out through our data-driven approach, transparent reporting, dedicated account managers, and proven track record of delivering measurable results. We focus on long-term partnerships and provide 24/7 support to ensure your campaigns run smoothly and effectively.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="faq-image">
                <img src="/images/faq-image.png" alt="image" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FaqSection;
