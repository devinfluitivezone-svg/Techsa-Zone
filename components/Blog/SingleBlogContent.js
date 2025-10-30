import React from "react";
import Link from "next/link";
import BlogSidebar from "./BlogSidebar";

const SingleBlogContent = ({ initialBlog }) => {
  const blog = initialBlog || undefined;
  return (
    <>
      <section className="blog-details-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="blog-details-desc">
                <div className="article-image">
                  <img src={blog?.image || "/images/blog-details/single-blog.jpg"} alt={blog?.title || "image"} />
                </div>

                {/* Article details content */}
                <div className="article-content">
                  <div className="entry-meta">
                    <ul>
                      <li>
                        <span className="mr-1">Posted On:</span> {blog ? new Date(blog.date).toISOString().slice(0, 10) : "2020-01-02"}
                      </li>
                      <li>
                        <span className="mr-1">Posted By:</span>{" "}
                        <Link href="/blog">{blog?.author || "John Anderson"}</Link>
                      </li>
                    </ul>
                  </div>

                  <h3>{blog?.title || "Why Your Business Absolutely Needs Professional SEO Services"}</h3>

                  {blog?.content ? (
                    blog.content
                      .split('\n')
                      .filter(line => line.trim().length > 0)
                      .map((paragraph, index) => (
                        <p key={index}>{paragraph.trim()}</p>
                      ))
                  ) : (
                    <p>In today's competitive digital landscape, having a strong online presence is crucial for business success. Professional SEO services can transform your website's visibility, drive qualified traffic, and significantly increase your revenue.</p>
                  )}
                </div>

                {/* Article footer */}
                <div className="article-footer">
                  <div className="article-tags">
                    <span>
                      <i className="fas fa-bookmark"></i>
                    </span>
                    {blog?.tags?.map((t, idx) => (
                      <Link key={t} href="/blog/">
                        {t}
                        {idx < (blog.tags.length - 1) ? ',' : ''}
                      </Link>
                    ))}
                  </div>

                  <div className="article-share">
                    <ul className="social">
                      <li>
                        <span>Share:</span>
                      </li>
                      <li>
                        <a href="https://www.facebook.com/" target="_blank">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://twitter.com/" target="_blank">
                          <i className="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.linkedin.com/" target="_blank">
                          <i className="fab fa-linkedin-in"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.instagram.com/" target="_blank">
                          <i className="fab fa-instagram"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Post navigation */}
                <div className="post-navigation">
                  <div className="navigation-links">
                    <div className="nav-previous">
                      <Link href="#">
                        <i className="fa fa-arrow-left mr-2"></i>
                        Prev Post
                      </Link>
                    </div>
                    <div className="nav-next">
                      <Link href="#">
                        Next Post
                        <i className="fa fa-arrow-right ml-2"></i>
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Comments removed */}
              </div>
            </div>

            {/* Blog Sidebar */}
            <div className="col-lg-4 col-md-12">
              <BlogSidebar />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleBlogContent;
