import React from "react";

export default function MovieStory({item}) {
  return (
    <>
      <h2>Nội dung phim</h2>
      <div className="zmovo-blog-d-p">
          {item && item.description}
      </div>
    </>
  );
}
