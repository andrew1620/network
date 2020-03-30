import React from "react";
import css from "./style.module.css";

import UsersHeader from "./UsersHeader";
import UsersContent from "./UsersContent";
import UsersFooter from "./UsersFooter";

import { UserType } from "../../../redux/usersReducer";

type PropsType = {
  totalCount: number | null;
  count: number;
  currentPage: number;
  users: Array<UserType>;
  isFollowing: Array<number>;
  isFetching: boolean;
  handlePageNumClick: (number: number) => void;
  follow: (userId: number) => void;
  unfollow: (userId: number) => void;
};

const Users: React.FC<PropsType> = props => {
  return (
    <div className={css.users}>
      <UsersHeader
        totalCount={props.totalCount}
        isFetching={props.isFetching}
      />
      <UsersContent
        users={props.users}
        isFollowing={props.isFollowing}
        unfollow={props.unfollow}
        follow={props.follow}
      />
      <UsersFooter
        totalCount={props.totalCount}
        count={props.count}
        currentPage={props.currentPage}
        handlePageNumClick={props.handlePageNumClick}
      />
    </div>
  );
};

export default Users;
