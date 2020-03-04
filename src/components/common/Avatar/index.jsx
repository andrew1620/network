import React from "react";
import css from "./style.module.css";

import defaultAva from "../../../assets/img/userPhoto.png";
import { connect } from "react-redux";

const Avatar = ({ img, size, owner, profile, loadProfileImg = false }) => {
  if (!img) {
    img =
      (loadProfileImg ? profile.photos.large : owner.ownerData.photos.small) ||
      defaultAva;
  }

  if (size !== "small" && size !== "middle" && size !== "large") size = "small";

  return (
    <div className={css.imgBox}>
      <img src={img} alt="Ava" className={`${css.img} ${css[size]}`} />
    </div>
  );
};

const mstp = state => ({
  owner: state.owner,
  profile: state.profilePage.profile
});

export default connect(mstp)(Avatar);

//Attributes:
// img - necessary img url
// size - small:30px, middle:40px, large:50px
// loadProfileImg - if true, img is taken from state.profilePage

//Если img нет, то я меняю на дефолт, получается ли изменение пропса из компонента, спросить
