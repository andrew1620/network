import React from "react";
import "../../index.css";
import Header from "./index";
import { connect } from "react-redux";
import { setAuthUserData, setCurrentUserData } from "../../redux/authReducer";
import * as axios from "axios";

class HeaderContainer extends React.Component {
  componentDidMount() {
    axios
      .get("https://social-network.samuraijs.com/api/1.0/auth/me", {
        withCredentials: true
      })
      .then(response => {
        const data = response.data.data;
        if (response.data.resultCode === 0) {
          this.props.setAuthUserData(data.id, data.email, data.login);
        }
      })
      .then(() => {
        axios
          .get(
            "https://social-network.samuraijs.com/api/1.0/profile/" +
              this.props.userId
          )
          .then(response => {
            const userData = {
              fullName: response.data.fullName,
              photos: response.data.photos
            };
            this.props.setCurrentUserData(userData);
          });
      });
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
  setCurrentUserData
})(HeaderContainer);
