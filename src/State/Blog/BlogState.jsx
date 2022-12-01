import React from "react";
import BlogContext from "./BlogContext";
export const BlogState = (props) => {
  const handleLikeButton = () => {
    var like = document.querySelectorAll(".like");
    console.log(like);
    if (like[0].classList.contains("anim-like")) {
      like.forEach((ele) => {
        ele.classList.remove("anim-like");
      });
    } else {
      like.forEach((ele) => {
        if (ele.classList.contains("unique")) {
          ele.classList.add("zindex");
        }
        ele.className += " anim-like";
      });
    }
    if (like[0].classList.contains("unique")) {
      setTimeout(() => {
        like.forEach((ele) => {
          if (ele.classList.contains("unique")) {
            ele.classList.remove("anim-like", "zindex");
          }
          console.log("done");
        });
      }, 1000);
    }
  };

  return (
    <BlogContext.Provider value={{ handleLikeButton }}>
      {props.children}
    </BlogContext.Provider>
  );
};
export default BlogState;
