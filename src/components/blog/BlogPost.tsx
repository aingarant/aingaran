import React from "react";

type Props = {
  title: string;
  text: string;
};

const BlogPost = (props: Props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <div>{props.text}</div>
    </div>
  );
};

export default BlogPost;
