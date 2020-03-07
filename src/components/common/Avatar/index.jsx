import React from "react";
import css from "./style.module.css";

import defaultAva from "../../../assets/img/userPhoto.png";
import { connect } from "react-redux";

const Avatar = ({ img, size, loadProfileImg = false, owner, profile }) => {
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

//Props:
// img - necessary img url
// size - small:30px, middle:40px, large:50px
// loadProfileImg - if true, img is being taken from state.profilePage
