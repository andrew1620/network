import React from "react";
import Profile from ".";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "redux";

import {
  setUserProfile,
  getUserStatus,
  updateUserStatus,
  uploadPhoto,
  addPost
} from "../.././../redux/profileReducer";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { useEffect } from "react";
import { getProfilePage } from "../../../redux/profileSelectors";
import { getAuthUserId } from "../../../redux/authSelectors";
import { getOwner } from "../../../redux/ownerSelectors";

const ProfileContainer = props => {
  useEffect(() => {
    let userId = props.match.params.userId;
    if (!userId) {
      userId = props.authorizedUser;
    }
    props.setUserProfile(userId);
    props.getUserStatus(userId);
  }, []);

  return (
    <>
      <Profile {...props} />
    </>
  );
};

const mapStateToProps = state => {
  return {
    profilePage: getProfilePage(state),
    authorizedUser: getAuthUserId(state),
    owner: getOwner(state)
  };
};

const mapDispatchToProps = {
  setUserProfile,
  getUserStatus,
  updateUserStatus,
  uploadPhoto,
  addPost
};

//Redirect при перезагрузке страницы получает изначально фолс и отправляет на страницу логина но потом в стейте isAuth становится тру и почему-то компонент не перерисовывается и даже при том, что я залогинен на сайте и возвращает тру остается страница логина и чтобы перейти на профиль надо выбрать профильв меню //проблема исправлена инициализацией приложения
export default compose(
  withAuthRedirect,
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(ProfileContainer);
