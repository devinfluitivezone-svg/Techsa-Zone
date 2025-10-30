import React from "react";
import NavbarTwo from "../components/Layouts/NavbarTwo";
import PageBanner from "../components/Common/PageBanner";
import SingleBlogContent from "../components/Blog/SingleBlogContent";
import Footer from "../components/Layouts/Footer";

const SingleBlog = () => {
  return (
    <>
      <NavbarTwo />

      <PageBanner
        pageTitle="Blog Details"
        breadcrumbTextOne="Home"
        breadcrumbTextTwo="Blog Details"
        breadcrumbUrl="/"
      />

      <SingleBlogContent />

      <Footer />
    </>
  );
};

export default SingleBlog;
