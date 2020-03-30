import React from "react";
import css from "./style.module.css";

import Avatar from "../../../../common/Avatar";
import Button from "./Button/index";
import { UserType } from "../../../../../redux/usersReducer";

type PropsType = {
  user: UserType;
  isFollowing: Array<number>;
  follow: (userId: number) => void;
  unfollow: (userId: number) => void;
};

const User: React.FC<PropsType> = ({ user, isFollowing, unfollow, follow }) => {
  return (
    <div className={css.user}>
      <div className={css.photo}>
        <Avatar
          img={user.photos.small !== null ? user.photos.small : null}
          size="80,80"
          pageRef={`/profile/${user.id}`}
        />
      </div>

      <div className={css.info}>
        <span className={css.name}>{user.name}</span>
        <span className={css.status}>{user.status}</span>
      </div>

      <div className={css.button}>
        <Button
          isDisabled={isFollowing.includes(user.id)}
          handleClick={
            user.followed ? () => unfollow(user.id) : () => follow(user.id)
          }
          title={user.followed ? "Удалить из друзей" : "Добавить в друзья"}
        />
      </div>
    </div>
  );
};

export default User;
