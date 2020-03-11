import React from "react";
import css from "./style.module.css";

import User from "./User";

const UsersContent = ({ users = [], isFollowing, unfollow, follow }) => {
  const usersList = users.map(user => (
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
