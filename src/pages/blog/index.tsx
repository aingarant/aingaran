import BlogPost from "@/components/blog/BlogPost";
import React from "react";

const BlogText = {
  title: "Blog Post Title",
  text: "Blog post content"

}


const Blog = () => {
  return <div>
    <BlogPost {...BlogText} />
  </div>;
};

export default Blog;
