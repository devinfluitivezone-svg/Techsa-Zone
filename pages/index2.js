import React from "react";
import Navbar from "../components/Layouts/Navbar";
import MainBanner from "../components/HomeOne/MainBanner";
import PartnerLogos from "../components/Common/PartnerLogos";
import AboutContent from "../components/HomeTwo/AboutContent";
import WhyChooseUs from "../components/Common/WhyChooseUs";
import ServicesContent from "../components/Common/ServicesContent";
import PricingContent from "../components/PricingPlans/PricingContent";
import ProjectsStyleTwo from "../components/Projects/ProjectsStyleTwo";
import TestimonialSection from "../components/HomeOne/TestimonialSection";
import FaqSection from "../components/Faq/FaqSection";
import TeamCard from "../components/Common/TeamCard";
import BlogCardSection from "../components/Common/BlogCardSection";
import SubscribeStyleTwo from "../components/Common/SubscribeStyleTwo";
import Footer from "../components/Layouts/Footer";

const Index2 = () => {
  return (
    <>
      <Navbar />

      <MainBanner />

      <PartnerLogos />

      <div className="pb-100">
        <AboutContent />
      </div>

      <WhyChooseUs />

      <ServicesContent />

      <PricingContent />

      <ProjectsStyleTwo />

      <TestimonialSection />

      <FaqSection />

      <TeamCard />

      <BlogCardSection />

      <SubscribeStyleTwo />

      <Footer />
    </>
  );
};

export default Index2;
