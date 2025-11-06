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

      <main id="main-content">
        <div id="home">
          <MainBanner />
        </div>

        <div id="features">
          <FeaturesContent />
        </div>

        <div id="about" className="pb-100">
          <AboutContent />
        </div>

        {/* <ServicesContent /> */}
        <div id="services" className="pt-100">
          <TabsContent />
        </div>
        
        <div id="why-choose-us">
          <WhyChooseUs />
        </div>

        <div id="projects">
          <ProjectsStyleOne />
        </div>

        <div id="team">
          <TeamCard />
        </div>

        <div id="testimonials">
          <TestimonialSection />
        </div>

        <div id="blog">
          <BlogCardSection />
        </div>
      </main>

      <Footer />  
    </>
  );
};

export default Index;
