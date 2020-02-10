import React from "react";
import "../../index.css";
import Header from "./index";
import { connect } from "react-redux";
import { setAuthUserData, authenticationTC } from "../../redux/authReducer";

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.authenticationTC();
    // headerAPI.authenticate().then(data => {
    //   if (data.resultCode === 0) {
    //     this.props.setAuthUserData(
    //       data.data.id,
    //       data.data.email,
    //       data.data.login
    //     );
    //   }
    // });

    // axios
    //   .get("https://social-network.samuraijs.com/api/1.0/auth/me", {
    //     withCredentials: true
    //   })
    //   .then(response => {
    //     const data = response.data.data;
    //     if (response.data.resultCode === 0) {
    //       this.props.setAuthUserData(data.id, data.email, data.login);
    //     }
    //   });
  }

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
  setAuthUserData,
  authenticationTC
})(HeaderContainer);
