import React from "react";
import Link from "next/link";
import { blogs } from "../../data/blogdata";

const BlogSidebar = () => {
  return (
    <>
      <aside className="widget-area" id="secondary">
        {/* Search form */}
        <div className="widget widget_search">
          <form className="search-form">
            <input
              type="search"
              className="search-field"
              placeholder="Search..."
            />
            <button type="submit">
              <i className="fas fa-search"></i>
            </button>
          </form>
        </div>

        {/* Recent Posts */}
        <div className="widget widget_zash_posts_thumb">
          <h3 className="widget-title">Recent Posts</h3>
          {blogs
            .slice()
            .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
            .slice(0, 3)
            .map((post) => (
              <article className="item" key={post.id}>
                <Link href={`/blog/${post.id}`} className="thumb" aria-label={`Read blog post: ${post.title}`}>
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    width={80}
                    height={60}
                    loading="lazy"
                    style={{ objectFit: "cover" }}
                  />
                </Link>
                <div className="info">
                  <time>{new Date(post.date).toISOString().slice(0, 10)}</time>
                  <h4 className="title usmall">
                    <Link href={`/blog/${post.id}`}>{post.title}</Link>
                  </h4>
                </div>
                <div className="clear"></div>
              </article>
            ))}
        </div>

        {/* Categories removed per request */}

        {/* Tags removed per request */}
      </aside>
    </>
  );
};

export default BlogSidebar;
