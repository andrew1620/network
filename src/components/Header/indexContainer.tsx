import React from "react";
import { connect } from "react-redux";

import Header from "./index";
import { logout } from "../../redux/authReducer";
import { AppStateType } from "../../redux/store";
import { OwnerDataType } from "../../redux/ownerReducer";

type mstpType = {
  isAuth: boolean | null;
  userId: number | null;
  ownerData: OwnerDataType;
};

type mdtpType = {
  logout: () => void;
};

export type Props = mstpType & mdtpType;

const HeaderContainer: React.FC<Props> = props => {
  return <Header {...props} />;
};

const mapStateToProps = (state: AppStateType) => {
  return {
    userId: state.auth.userId,
    isAuth: state.auth.isAuth,
    ownerData: state.owner.ownerData
  };
};

export default connect(mapStateToProps, {
  logout
})(HeaderContainer);
