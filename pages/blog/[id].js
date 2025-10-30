import React from "react";
import NavbarTwo from "../../components/Layouts/NavbarTwo";
import PageBanner from "../../components/Common/PageBanner";
import SingleBlogContent from "../../components/Blog/SingleBlogContent";
import Footer from "../../components/Layouts/Footer";
import { getBlogById } from "../../data/blogdata";

const BlogById = ({ initialBlog }) => {
  return (
    <>
      <NavbarTwo />
      <PageBanner
        pageTitle="Blog Details"
        breadcrumbTextOne="Home"
        breadcrumbTextTwo="Blog Details"
        breadcrumbUrl="/"
      />
      <SingleBlogContent initialBlog={initialBlog} />
      <Footer />
    </>
  );
};

export default BlogById;

export async function getServerSideProps(context) {
  const { id } = context.params;
  const numericId = parseInt(id, 10);
  const initialBlog = getBlogById(numericId) || null;
  return { props: { initialBlog } };
}


