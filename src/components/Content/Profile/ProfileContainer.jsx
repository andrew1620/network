import React from "react";
import "./style.css";
import Profile from ".";
import { connect } from "react-redux";
import {
  setUserProfileTC,
  getUserStatusTC,
  updateUserStatusTC,
  updateProfileInfo,
  uploadPhoto
} from "../.././../redux/profileReducer";
import { withRouter } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.authorizedUser;
      // if (!userId) this.props.history.push("/login");
    }
    this.props.setUserProfileTC(userId);
    this.props.getUserStatusTC(userId);
  }

  render() {
    return (
      <>
        <Profile {...this.props} />
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    profile: state.profilePage.profile,
    userStatus: state.profilePage.userStatus,
    authorizedUser: state.auth.userId
  };
};

const mapDispatchToProps = {
  setUserProfileTC,
  getUserStatusTC,
  updateUserStatusTC,
  updateProfileInfo,
  uploadPhoto
};

//Redirect при перезагрузке страницы получает изначально фолс и отправляет на страницу логина но потом в стейте isAuth становится тру и почему-то компонент не перерисовывается и даже при том, что я залогинен на сайте и возвращает тру остается страница логина и чтобы перейти на профиль надо выбрать профильв меню //проблема исправлена инициализацией приложения
export default compose(
  withAuthRedirect,
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(ProfileContainer);
