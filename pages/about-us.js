import React from "react";
import NavbarTwo from "../components/Layouts/NavbarTwo";
import PageBanner from "../components/Common/PageBanner";
import AboutContent from "../components/AboutUs/AboutContent";
import ProjectsStyleTwo from "../components/Projects/ProjectsStyleTwo";
import TeamCard from "../components/Common/TeamCard";
import Footer from "../components/Layouts/Footer";

const AboutUs = () => {
  return (
    <>
      <NavbarTwo />

      <PageBanner
        pageTitle="About Us"
        breadcrumbTextOne="Home"
        breadcrumbTextTwo="About Us"
        breadcrumbUrl="/"
        pageType="about"
      />

      <AboutContent />

      {/* <ServicesContent /> */}

      {/* <PricingContent /> */}

      <ProjectsStyleTwo />

      <TeamCard />

      {/* <SubscribeStyleTwo /> */}

      {/* <div className="ptb-100">
        <PartnerLogos />
      </div> */}

      <Footer />
    </>
  );
};

export default AboutUs;
