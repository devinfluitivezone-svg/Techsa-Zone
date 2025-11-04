import React from "react";
import NavbarTwo from "../components/Layouts/NavbarTwo";
import PageBanner from "../components/Common/PageBanner";
import FeaturesContent from "../components/HomeOne/FeaturesContent";
import TabsContent from "../components/HomeOne/TabsContent";
import SubscribeStyleTwo from "../components/Common/SubscribeStyleTwo";
import PartnerLogos from "../components/Common/PartnerLogos";
import Footer from "../components/Layouts/Footer";

const Features = () => {
  return (
    <>
      <NavbarTwo />

      <PageBanner
        pageTitle="Features"
        breadcrumbTextOne="Home"
        breadcrumbTextTwo="Features"
        breadcrumbUrl="/"
        pageType="features"
      />

      <FeaturesContent showButton={false} />

      <div className="pb-100">
        <TabsContent />
      </div>

      {/* <SubscribeStyleTwo />

      <div className="ptb-100">
        <PartnerLogos />
      </div> */}

      <Footer />
    </>
  );
};

export default Features;
