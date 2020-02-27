import React from "react";
import css from "./style.module.css";

import Preloader from "../Preloader";
import defaultAva from "../../../assets/img/userPhoto.png";

const Avatar = ({ img = defaultAva, size }) => {
  if (!img) return <Preloader />;

  if (size !== "small" && size !== "middle" && size !== "large") size = "small";

  return (
    <div className={css.imgBox}>
      <img src={img} alt="Ava" className={`${css.img} ${css[size]}`} />
    </div>
  );
};

export default Avatar;
