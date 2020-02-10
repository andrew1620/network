import React from "react";
import "./style.css";
import Profile from ".";
import { connect } from "react-redux";
import {
  setUserProfile,
  setUserProfileTC
} from "../.././../redux/profileReducer";
import { withRouter } from "react-router-dom";

class ProfileContainer extends React.Component {
  componentDidMount() {
    const userId = this.props.match.params.userId
      ? this.props.match.params.userId
      : 2;
    this.props.setUserProfileTC(userId);
    // profileAPI
    //   .getUserProfile(userId)
    //   .then(data => this.props.setUserProfile(data));
    // axios
    //   .get("https://social-network.samuraijs.com/api/1.0/profile/" + userId)
    //   .then(response => this.props.setUserProfile(response.data));
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

const WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {
  setUserProfile,
  setUserProfileTC
})(WithUrlDataContainerComponent);
