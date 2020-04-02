import React, { useEffect } from "react";
import Profile from ".";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { match } from "react-router";

import {
  setUserProfile,
  getUserStatus,
  updateUserStatus,
  uploadPhoto,
  addPost,
  InitialStateType as ProfilePageType
} from "../.././../redux/profileReducer";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { getProfilePage } from "../../../redux/profileSelectors";
import { getAuthUserId } from "../../../redux/authSelectors";
import { AppStateType } from "../../../redux/store";
import { getOwner } from "../../../redux/ownerSelectors";
import { InitialStateType as OwnerType } from "../../../redux/ownerReducer";

type mstpType = {
  profilePage: ProfilePageType;
  authorizedUserId: number;
  owner: OwnerType;
};
type mdtpType = {
  setUserProfile: (userId: number | null) => void;
  getUserStatus: (userId: number) => void;
  updateUserStatus: (newStatus: string) => void;
  uploadPhoto: (photo: any) => void;
  addPost: (postBody: string) => void;
};
type OwnProps = {
  match: match<{ userId: string | undefined }>;
};
export type Props = mstpType & mdtpType & OwnProps;

const ProfileContainer: React.FC<Props> = props => {
  useEffect(() => {
    let userId = props.match.params.userId && +props.match.params.userId;
    if (!userId) {
      userId = props.authorizedUserId;
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

const mapStateToProps = (state: AppStateType) => {
  return {
    profilePage: getProfilePage(state),
    authorizedUserId: getAuthUserId(state),
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
