import React from "react";
import css from "./style.module.css";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

import defaultAva from "../../../assets/img/userPhoto.png";
import { getOwner } from "../../../redux/ownerSelectors";
import { getProfile } from "../../../redux/profileSelectors";
import parseSize from "../../../utils/parseAvatarSize";
import { ProfileType } from "../../../redux/profileReducer";
import { InitialStateType as OwnerType } from "../../../redux/ownerReducer";
import { AppStateType } from "../../../redux/store";

type mstpType = {
  owner: OwnerType;
  profile: ProfileType;
};
type OwnProps = {
  img?: string | null;
  size: string;
  pageRef?: string;
};
type Props = mstpType & OwnProps;

const Avatar: React.FC<Props> = ({
  img,
  size,
  pageRef = "/",
  owner,
  profile
}) => {
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

  size = parseSize(size);

  return (
    <NavLink to={pageRef}>
      <div className={css.imgBox}>
        <img
          src={img}
          className={`${css.img} ${typeof size === "string" && css[size]}`}
          style={(typeof size === "object" && size) || {}}
          alt="Ava"
        />
      </div>
    </NavLink>
  );
};

const mstp = (state: AppStateType) => ({
  owner: getOwner(state),
  profile: getProfile(state)
});

export default connect(mstp)(Avatar);

//Props:
// img: reference to necessary page or 'profile' - img will be taken from state.profilePage, 'owner' - from state.owner
// size - '50,60': {width: 50, height: 60}, small:30px, middle:40px, large:50px
