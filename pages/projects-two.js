import React from "react";
import NavbarTwo from "../components/Layouts/NavbarTwo";
import PageBanner from "../components/Common/PageBanner";
import ProjectsStyleTwo from "../components/Projects/ProjectsStyleTwo";
import SubscribeStyleTwo from "../components/Common/SubscribeStyleTwo";
import PartnerLogos from "../components/Common/PartnerLogos";
import Footer from "../components/Layouts/Footer";

const ProjectsTwo = () => {
  return (
    <>
      <NavbarTwo />

      <PageBanner
        pageTitle="Projects Two"
        breadcrumbTextOne="Home"
        breadcrumbTextTwo="Projects Two"
        breadcrumbUrl="/"
      />

      <div className="pt-100">
        <ProjectsStyleTwo />
      </div>

      <SubscribeStyleTwo />

      <div className="ptb-100">
        <PartnerLogos />
      </div>

      <Footer />
    </>
  );
};

export default ProjectsTwo;
