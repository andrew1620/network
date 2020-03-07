import React from "react";
import { connect } from "react-redux";

import Header from "./index";
import { logout } from "../../redux/authReducer";

const HeaderContainer = props => {
  return <Header {...props} />;
};

const mapStateToProps = state => {
  return {
    userId: state.auth.userId,
    isAuth: state.auth.isAuth,
    ownerData: state.owner.ownerData
  };
};

export default connect(mapStateToProps, {
  logout
})(HeaderContainer);
