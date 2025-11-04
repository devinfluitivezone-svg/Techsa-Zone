import React from "react";
import NavbarTwo from "../components/Layouts/NavbarTwo";
import PageBanner from "../components/Common/PageBanner";
import BlogCardContent from "../components/Blog/BlogCardContent";
import Footer from "../components/Layouts/Footer";

const Blog = () => {
  return (
    <>
      <NavbarTwo />

      <PageBanner
        pageTitle="Blog"
        breadcrumbTextOne="Home"
        breadcrumbTextTwo="Blog"
        breadcrumbUrl="/"
        pageType="blog"
      />

      <BlogCardContent />

      <Footer />
    </>
  );
};

export default Blog;
