import React from "react";
import { connect } from "react-redux";
import {
  follow,
  unfollow,
  setCurrentPage,
  toggleIsFollowing,
  getUsersThunkCreator,
  followThunkCreator,
  unfollowThunkCreator
} from "../../../redux/usersReducer";
import Users from "./Users";
import {
  getUsers,
  getCount,
  getCurrentPage,
  getTotalCount,
  getIsFetching,
  getIsFollowing
} from "../../../redux/usersSelectors";
import { useEffect } from "react";

const UsersContainer = props => {
  useEffect(() => {
    props.getUsersThunkCreator(props.count, props.currentPage);
  }, []);

  const handlePageNumClick = number => {
    props.getUsersThunkCreator(props.count, number);
    props.setCurrentPage(number);
  };

  return (
    <div>
      <Users
        totalCount={props.totalCount}
        count={props.count}
        currentPage={props.currentPage}
        handlePageNumClick={handlePageNumClick}
        unfollow={props.unfollow}
        follow={props.follow}
        users={props.users}
        isFollowing={props.isFollowing}
        toggleIsFollowing={props.toggleIsFollowing}
        followThunkCreator={props.followThunkCreator}
        unfollowThunkCreator={props.unfollowThunkCreator}
      />
    </div>
  );
};

//Использованы селекторы
const mapStateToProps = state => {
  return {
    users: getUsers(state),
    count: getCount(state),
    currentPage: getCurrentPage(state),
    totalCount: getTotalCount(state),
    isFetching: getIsFetching(state),
    isFollowing: getIsFollowing(state)
  };
};

export default connect(mapStateToProps, {
  follow,
  unfollow,
  setCurrentPage,
  toggleIsFollowing,
  getUsersThunkCreator,
  followThunkCreator,
  unfollowThunkCreator
})(UsersContainer);
