import React from "react";
import NavbarTwo from "../components/Layouts/NavbarTwo";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/Layouts/Footer";

const TermsConditions = () => {
  return (
    <>
      <NavbarTwo />

      <PageBanner
        pageTitle="Terms & Conditions"
        breadcrumbTextOne="Home"
        breadcrumbTextTwo="Terms & Conditions"
        breadcrumbUrl="/"
        pageType="terms"
      />

      <div className="ptb-100">
        <div className="container">
          <h4>1. Acceptance of Terms</h4>
          <p>
            By accessing and using Techsa Zone's digital marketing services, you agree to be bound by these Terms and Conditions. These terms apply to all users of our website, including clients, visitors, and anyone who accesses our SEO, social media marketing, web development, and digital marketing services. If you do not agree with any part of these terms, please do not use our services. We reserve the right to modify these terms at any time, and your continued use of our services constitutes acceptance of any changes.
          </p>

          <h4>2. Services and Obligations</h4>
          <p>
            Techsa Zone provides comprehensive digital marketing services including SEO optimization, social media management, PPC advertising, content creation, and web development. We commit to delivering professional, high-quality services tailored to your business needs. You agree to provide accurate, complete, and up-to-date information necessary for us to perform our services effectively. You are responsible for the content you provide for marketing purposes and must ensure it complies with all applicable laws and regulations.
          </p>

          <h4>3. Payment and Refund Policy</h4>
          <p>
            All services are provided according to the pricing packages and terms agreed upon at the time of purchase. Payment is required as specified in your service agreement. Due to the digital nature of our services, refunds are handled on a case-by-case basis. If you are unsatisfied with our services, please contact us within the first 30 days to discuss a resolution. We will work diligently to ensure your satisfaction, but no refunds will be issued after services have been substantially completed and delivered.
          </p>

          <h4>4. Intellectual Property and Content Ownership</h4>
          <p>
            All content created by Techsa Zone, including but not limited to website designs, SEO strategies, social media content, and marketing materials, remains the property of Techsa Zone until full payment is received. Upon full payment, you will receive a license to use the content created for your business. You retain ownership of your original content and grant Techsa Zone the right to use it for providing our services and showcasing our work (with your permission). You may not reproduce, distribute, or claim ownership of Techsa Zone's proprietary methods and strategies.
          </p>

          <h4>5. Limitation of Liability</h4>
          <p>
            While we strive to deliver the best possible results, we cannot guarantee specific outcomes such as exact search engine rankings, traffic numbers, or conversion rates, as these are influenced by numerous factors beyond our control. Techsa Zone shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our services. Our total liability for any claims shall not exceed the amount paid for the specific service in question. We recommend maintaining your own backups of all content and data.
          </p>

          <h4>6. Termination and Cancellation</h4>
          <p>
            Either party may terminate service agreements with appropriate notice as specified in your service contract. Upon termination, any outstanding payments become immediately due. You may cancel ongoing services at any time with written notice, subject to the terms of your service agreement. We reserve the right to suspend or terminate services in case of non-payment, violation of these terms, or any illegal or fraudulent activity. Upon termination, your access to our services will be revoked, and we will not be obligated to continue providing services.
          </p>

          <h4>7. Contact and Dispute Resolution</h4>
          <p>
            For any questions about these Terms and Conditions or to resolve disputes, please contact us through our website's contact form. We are committed to resolving any concerns amicably. If we cannot reach a resolution through direct communication, disputes will be resolved through binding arbitration in accordance with applicable laws. We encourage open communication to address any issues promptly and maintain a positive working relationship with our clients.
          </p>

          <p style={{ marginTop: "20px", fontWeight: "500" }}>
            Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default TermsConditions;
