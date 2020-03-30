import React from "react";
import css from "./style.module.css";

import User from "./User";
import { UserType } from "../../../../redux/usersReducer";

type PropsType = {
  users: Array<UserType>;
  isFollowing: Array<number>;
  follow: (userId: number) => void;
  unfollow: (userId: number) => void;
};

const UsersContent: React.FC<PropsType> = ({
  users = [],
  isFollowing,
  unfollow,
  follow
}) => {
  const usersList = users.map((user: UserType) => (
    <User
      key={user.id}
      user={user}
      isFollowing={isFollowing}
      unfollow={unfollow}
      follow={follow}
    />
  ));

  return <div className={css.container}>{usersList}</div>;
};

export default UsersContent;
