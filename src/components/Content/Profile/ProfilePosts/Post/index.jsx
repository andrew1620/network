import React from "react";
import "./style.css";

const Post = () => {
  return (
    <div className="postBox">
      <img
        src="https://avatars.mds.yandex.net/get-pdb/1040792/0489ff80-181a-4697-83b4-b0cf25001614/s1200"
        alt="postPic"
      />
      <span>Vasya Pupkin</span>
      <div className="post">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
        voluptatum, natus mollitia optio est blanditiis corrupti. In laborum
        omnis laboriosam blanditiis quod aspernatur error mollitia, ducimus hic
        impedit, autem odit? Facere, nisi! Quos in quibusdam doloremque illum
        unde amet nobis aperiam!
      </div>
      <div>
        <span>
          <b>like</b>{" "}
        </span>
        <span>
          <b>repost</b>
        </span>
      </div>
    </div>
  );
};

export default Post;
