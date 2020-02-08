import React from "react";
import { connect } from "react-redux";
// import Users from ".";
import Users from "./indexClass";
import {
  followAC,
  unfollowAC,
  setUsersAC,
  setCurrentPageAC,
  setTotalUsersCountAC
} from "../../../redux/usersReducer";

const mapStateToProps = state => {
  return {
    users: state.usersPage.users,
    count: state.usersPage.count,
    currentPage: state.usersPage.currentPage,
    totalCount: state.usersPage.totalCount
  };
};
const mapDispatchToProps = dispatch => {
  return {
    follow: userId => {
      dispatch(followAC(userId));
    },
    unfollow: userId => {
      dispatch(unfollowAC(userId));
    },
    setUsers: users => {
      dispatch(setUsersAC(users));
    },
    setCurrentPage: newCurrentPage => {
      dispatch(setCurrentPageAC(newCurrentPage));
    },
    setTotalUsersCount: newCount => {
      dispatch(setTotalUsersCountAC(newCount));
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Users);
