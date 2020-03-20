import React from "react";
import { connect } from "react-redux";
import { useEffect } from "react";

import {
  setCurrentPage,
  requireUsers,
  follow,
  unfollow
} from "../../../redux/usersReducer";
import {
  getUsers,
  getCount,
  getCurrentPage,
  getTotalCount,
  getIsFetching,
  getIsFollowing
} from "../../../redux/usersSelectors";
import Users from ".";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";

const UsersContainer = props => {
  useEffect(() => {
    props.requireUsers(props.count, props.currentPage);
  }, []);

  const handlePageNumClick = number => {
    props.requireUsers(props.count, number);
    props.setCurrentPage(number);
  };

  return (
    <div>
      <Users
        totalCount={props.totalCount}
        count={props.count}
        currentPage={props.currentPage}
        handlePageNumClick={handlePageNumClick}
        follow={props.follow}
        unfollow={props.unfollow}
        users={props.users}
        isFollowing={props.isFollowing}
        isFetching={props.isFetching}
      />
    </div>
  );
};

const mstp = state => {
  return {
    users: getUsers(state),
    count: getCount(state),
    currentPage: getCurrentPage(state),
    totalCount: getTotalCount(state),
    isFetching: getIsFetching(state),
    isFollowing: getIsFollowing(state)
  };
};
const mdtp = {
  follow,
  unfollow,
  setCurrentPage,
  requireUsers
};

export default compose(connect(mstp, mdtp), withAuthRedirect)(UsersContainer);
