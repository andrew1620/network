import React from "react";
import "../../index.css";
import Header from "./index";
import { connect } from "react-redux";
import { logoutTC } from "../../redux/authReducer";

class HeaderContainer extends React.Component {
  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = state => {
  return {
    userId: state.auth.userId,
    login: state.auth.login,
    isAuth: state.auth.isAuth
  };
};

export default connect(mapStateToProps, {
  logoutTC
})(HeaderContainer);
