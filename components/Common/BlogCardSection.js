import React from "react";
import Link from "next/link";
import { blogs } from "../../data/blogdata";

const BlogCardSection = () => {
  const latestThree = [...blogs]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 3);

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <>
      <section className="blog-section pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <span>Blog</span>
            <h3>Read Our Latest Insights</h3>
          </div>

          <div className="row justify-content-center">
            {latestThree.map((post) => {
              const d = new Date(post.date);
              const day = String(d.getUTCDate()).padStart(2, "0");
              const month = monthNames[d.getUTCMonth()];
              return (
                <div key={post.id} className="col-lg-4 col-md-6">
                  <div className="blog-item">
                    <div className="blog-image">
                      <Link href={`/blog/${post.id}`}>
                        <img src={post.image} alt={post.title} />
                      </Link>
                    </div>

                    <div className="single-blog-item">
                      <ul className="date">
                        <li>{day}</li>
                        <li>{month}</li>
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
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogCardSection;
