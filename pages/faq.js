import React from "react";
import NavbarTwo from "../components/Layouts/NavbarTwo";
import PageBanner from "../components/Common/PageBanner";
import FaqSection from "../components/Faq/FaqSection";
import SubscribeStyleTwo from "../components/Common/SubscribeStyleTwo";
import PartnerLogos from "../components/Common/PartnerLogos";
import Footer from "../components/Layouts/Footer";

const Faq = () => {
  return (
    <>
      <NavbarTwo />

      <PageBanner
        pageTitle="Faq"
        breadcrumbTextOne="Home"
        breadcrumbTextTwo="Faq"
        breadcrumbUrl="/"
      />

      <FaqSection />

      <SubscribeStyleTwo />

      <div className="ptb-100">
        <PartnerLogos />
      </div>

      <Footer />
    </>
  );
};

export default Faq;
