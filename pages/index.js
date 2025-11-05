import React from "react";
import Navbar from "../components/Layouts/Navbar";
import MainBanner from "../components/HomeOne/MainBanner";
import FeaturesContent from "../components/HomeOne/FeaturesContent";
import AboutContent from "../components/HomeOne/AboutContent";
import ServicesContent from "../components/Common/ServicesContent";
import WhyChooseUs from "../components/Common/WhyChooseUs";
import TabsContent from "../components/HomeOne/TabsContent";
import ProjectsStyleOne from "../components/Projects/ProjectsStyleOne";
import TeamCard from "../components/Common/TeamCard";
import TestimonialSection from "../components/HomeOne/TestimonialSection";
import BlogCardSection from "../components/Common/BlogCardSection";
import Footer from "../components/Layouts/Footer";

const Index = () => {
  return (
    <>
      <Navbar />

      <MainBanner />

       <FeaturesContent />

      <div className="pb-100">
        <AboutContent />
      </div>

      {/* <ServicesContent /> */}
      <div className="pt-100">
      <TabsContent />
      </div>
      <WhyChooseUs />


      <ProjectsStyleOne />

      <TeamCard />

      <TestimonialSection />

      <BlogCardSection />

      <Footer />  
    </>
  );
};

export default Index;
