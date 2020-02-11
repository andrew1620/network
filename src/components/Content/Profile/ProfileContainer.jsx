import React from "react";
import "./style.css";
import Profile from ".";
import { connect } from "react-redux";
import {
  setUserProfile,
  setUserProfileTC
} from "../.././../redux/profileReducer";
import { withRouter } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

class ProfileContainer extends React.Component {
  componentDidMount() {
    const userId = this.props.match.params.userId
      ? this.props.match.params.userId
      : 2;
    this.props.setUserProfileTC(userId);
  }

  render() {
    return (
      <>
        <Profile {...this.props} profile={this.props.profile} />
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    profile: state.profilePage.profile
  };
};

//Redirect при перезагрузке страницы получает изначально фолс и отправляет на страницу логина но потом в стейте isAuth становится тру и почему-то компонент не перерисовывается и даже при том, что я залогинен на сайте и возвращает тру остается страница логина и чтобы перейти на профиль надо выбрать профильв меню
export default compose(
  // withAuthRedirect,
  withRouter,
  connect(mapStateToProps, {
    setUserProfile,
    setUserProfileTC
  })
)(ProfileContainer);
