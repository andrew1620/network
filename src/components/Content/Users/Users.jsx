import React from "react";
import css from "./style.module.css";
import userPhoto from "../../../assets/img/userPhoto.png";
import { NavLink } from "react-router-dom";
import Paginator from "../../common/Paginator";

const Users = props => {
  return (
    <div>
      <Paginator
        totalCount={props.totalCount}
        count={props.count}
        currentPage={props.currentPage}
        handlePageNumClick={props.handlePageNumClick}
      />

      {props.users.map(user => (
        <div key={user.id} className={css.userBox}>
          <div className={css.photo}>
            <NavLink to={`/profile/${user.id}`} className={css.navlink}>
              <img
                src={user.photos.small == null ? userPhoto : user.photos.small}
                className={css.img}
                alt="avaPhoto"
              />
            </NavLink>
          </div>
          <div className="content">
            <div className="info">
              <span className="name">{user.name}</span>
              {/* <span>{user.location.city}</span>
              <span>{user.location.country}</span> */}
            </div>
            {user.followed ? (
              <button
                disabled={props.isFollowing.includes(user.id)}
                onClick={() => {
                  props.unfollowThunkCreator(user.id);
                }}
              >
                Удалить из друзей
              </button>
            ) : (
              <button
                disabled={props.isFollowing.includes(user.id)}
                onClick={() => {
                  props.followThunkCreator(user.id);
                }}
              >
                Добавить в друзья
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Users;
