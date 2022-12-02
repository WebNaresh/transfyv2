import React from "react";
import BlogContext from "./BlogContext";
export const BlogState = (props) => {
  const handleLikeButton = (className, setClassName) => {
    setClassName("zindex anim-like");
    if (className.includes("zindex anim-like")) {
      setClassName("");
    } else {
      setClassName("zindex anim-like");
    }
  };

  return (
    <BlogContext.Provider value={{ handleLikeButton }}>
      {props.children}
    </BlogContext.Provider>
  );
};
export default BlogState;
