import React from "react";
import Link from "next/link";
import { blogs } from "../../data/blogdata";

const BlogCardContent = () => {
  return (
    <>
      <section className="blog-page-area ptb-100">
        <div className="container">
          <div className="row">
            {blogs.map((post) => (
              <div key={post.id} className="col-lg-4 col-md-6">
              <div className="blog-item">
                <div className="blog-image">
                    <Link href={`/blog/${post.id}`}>
                      <img src={post.image} alt={post.title} />
                  </Link>
                </div>

                <div className="single-blog-item">
                  <ul className="date">
                      <li>{String(new Date(post.date).getUTCDate()).padStart(2, '0')}</li>
                      <li>{["January","February","March","April","May","June","July","August","September","October","November","December"][new Date(post.date).getUTCMonth()]}</li>
                  </ul>

                  <ul className="blog-list">
                    <li>
                      <Link href="/blog">
                          <i className="fa fa-user-alt"></i> By {post.author}
                      </Link>
                    </li>
                    <li>
                      <i className="far fa-comments"></i> 3 Comments
                    </li>
                  </ul>

                  <div className="blog-content">
                      <Link href={`/blog/${post.id}`}>
                        <h3>{post.title}</h3>
                      </Link>
                      <p>{post.excerpt}</p>
                  </div>

                  <div className="blog-btn">
                      <Link href={`/blog/${post.id}`} className="blog-btn-one">
                      Read More
                      </Link>
                  </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Pagination */}
            <div className="col-lg-12 col-md-12">
              <div className="pagination-area">
                <a className="prev page-numbers">
                  <i className="fas fa-angle-double-left"></i>
                </a>

                <a className="page-numbers">1</a>

                <span className="page-numbers current" aria-current="page">
                  2
                </span>

                <a className="page-numbers">3</a>

                <a className="page-numbers">4</a>

                <a className="next page-numbers">
                  <i className="fas fa-angle-double-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogCardContent;
