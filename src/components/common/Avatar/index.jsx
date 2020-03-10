import React from "react";
import css from "./style.module.css";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

import defaultAva from "../../../assets/img/userPhoto.png";
import { getOwner } from "../../../redux/ownerSelectors";
import { getProfile } from "../../../redux/profileSelectors";

const Avatar = ({ img, size, pageRef = "/", owner, profile }) => {
  if (!img) img = defaultAva;
  else {
    switch (img) {
      case "profile":
        img = profile.photos.large || defaultAva;
        break;
      case "owner":
        img = owner.ownerData.photos.small || defaultAva;
        break;
      default:
        break;
    }
  }

  if (size !== "small" && size !== "middle" && size !== "large") size = "small";

  return (
    <NavLink to={pageRef}>
      <div className={css.imgBox}>
        <img src={img} className={`${css.img} ${css[size]}`} alt="Ava" />
      </div>
    </NavLink>
  );
};

const mstp = state => ({
  owner: getOwner(state),
  profile: getProfile(state)
});

export default connect(mstp)(Avatar);

//Props:
// img: reference to necessary page or 'profile' - img will be taken from state.profilePage, 'owner' - from state.owner
//    reference to necessary page
// size - small:30px, middle:40px, large:50px
//
