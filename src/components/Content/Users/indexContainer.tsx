import React, { useEffect } from "react";
import { connect } from "react-redux";
import { compose } from "redux";

import {
  setCurrentPage,
  requireUsers,
  follow,
  unfollow,
  UserType,
  SetCurrentPageActionType
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
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { AppStateType } from "../../../redux/store";

type MapStatePropsType = {
  totalCount: number | null;
  count: number;
  currentPage: number;
  users: Array<UserType>;
  isFollowing: Array<number>;
  isFetching: boolean;
};
type MapDispatchPropsType = {
  follow: (userId: number) => void;
  unfollow: (userId: number) => void;
  requireUsers: (count: number, currentPage: number) => void;
  setCurrentPage: (newCurrentPage: number) => SetCurrentPageActionType;
};
type PropsType = MapStatePropsType & MapDispatchPropsType;

const UsersContainer: React.FC<PropsType> = props => {
  useEffect(() => {
    props.requireUsers(props.count, props.currentPage);
  }, []);

  const handlePageNumClick = (number: number) => {
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

const mstp = (state: AppStateType): MapStatePropsType => {
  return {
    users: getUsers(state),
    count: getCount(state),
    currentPage: getCurrentPage(state),
    totalCount: getTotalCount(state),
    isFetching: getIsFetching(state),
    isFollowing: getIsFollowing(state)
  };
};
const mdtp: MapDispatchPropsType = {
  follow,
  unfollow,
  setCurrentPage,
  requireUsers
};

export default compose(connect(mstp, mdtp), withAuthRedirect)(UsersContainer);
