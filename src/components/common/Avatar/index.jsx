import React from "react";
import css from "./style.module.css";

import Preloader from "../Preloader";
import defaultAva from "../../../assets/img/userPhoto.png";
import { connect } from "react-redux";

const Avatar = ({ img, size, owner }) => {
  // if (!img) return <Preloader />;
  if (!img) {
    img = owner.ownerData.photos.small || defaultAva;
  }

  if (size !== "small" && size !== "middle" && size !== "large") size = "small";

  return (
    <div className={css.imgBox}>
      <img src={img} alt="Ava" className={`${css.img} ${css[size]}`} />
    </div>
  );
};

const mstp = state => ({
  owner: state.owner
});

export default connect(mstp)(Avatar);

//Avatar gets 2 arguments:
// img reference
// img size - small:30px, middle:40px, large:50px

//Если img нет, то я меняю на дефолт, получается ли изменение пропса из компонента, спросить
