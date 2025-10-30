import React from "react";
import NavbarTwo from "../components/Layouts/NavbarTwo";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/Layouts/Footer";

const PrivacyPolicy = () => {
  return (
    <>
      <NavbarTwo />

      <PageBanner
        pageTitle="Privacy Policy"
        breadcrumbTextOne="Home"
        breadcrumbTextTwo="Privacy Policy"
        breadcrumbUrl="/"
      />

      <div className="ptb-100">
        <div className="container">
          <h4>1. Information We Collect</h4>
          <p>
            At Techsa Zone, we are committed to protecting your privacy and personal information. We collect information that you provide directly to us when you request our services, including your name, email address, phone number, and business details. This information helps us deliver personalized digital marketing services tailored to your business needs. We also collect technical information about your website through our SEO and analytics services to provide you with comprehensive marketing solutions.
          </p>

          <h4>2. How We Use Your Information</h4>
          <p>
            We use the information we collect to provide, maintain, and improve our digital marketing services, including SEO optimization, social media management, and online advertising. Your data helps us personalize your experience, communicate with you about our services, send you important updates about your campaigns, and respond to your inquiries. We may also use aggregated, anonymized data for analytical purposes to improve our service offerings and market insights.
          </p>

          <h4>3. Data Security and Protection</h4>
          <p>
            Your security is our priority. We implement industry-standard security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. This includes secure data encryption, regular security audits, and restricted access to personal information by authorized personnel only. While we strive to use commercially acceptable means to protect your information, no method of transmission over the Internet or electronic storage is completely secure.
          </p>

          <h4>4. Your Rights and Choices</h4>
          <p>
            You have the right to access, update, or delete your personal information at any time. You can opt out of marketing communications by clicking the unsubscribe link in our emails or by contacting us directly. We also respect your right to data portability, which means you can request a copy of your data in a structured format. If you have any concerns about how we handle your personal information, please contact us and we will work with you to resolve any issues promptly.
          </p>

          <h4>5. Contact Us</h4>
          <p>
            If you have any questions about this Privacy Policy or our data practices, please contact us through our website's contact form or by email. We are committed to transparency and will respond to all privacy-related inquiries within a reasonable timeframe to address your concerns and ensure your data protection.
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

export default PrivacyPolicy;
