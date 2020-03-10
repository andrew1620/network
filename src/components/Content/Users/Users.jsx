import React from "react";
import css from "./style.module.css";

import Paginator from "../../common/Paginator";
import Avatar from "../../common/Avatar";
import Button from "./Button";

const Users = props => {
  const usersList = props.users.map(user => (
    <div key={user.id} className={css.userBox}>
      <div className={css.photo}>
        <Avatar
          img={user.photos.small !== null ? user.photos.small : null}
          size="large"
          pageRef={`/profile/${user.id}`}
        />
      </div>
      <div className="content">
        <div className="info">
          <span className="name">{user.name}</span>
        </div>

        <Button
          isDisabled={props.isFollowing.includes(user.id)}
          handleClick={
            user.followed
              ? () => props.unfollowThunkCreator(user.id)
              : () => props.followThunkCreator(user.id)
          }
          title={user.followed ? "Удалить из друзей" : "Добавить в друзья"}
        />
      </div>
    </div>
  ));

  return (
    <div>
      <Paginator
        totalCount={props.totalCount}
        count={props.count}
        currentPage={props.currentPage}
        handlePageNumClick={props.handlePageNumClick}
      />

      {usersList}
    </div>
  );
};

export default Users;
