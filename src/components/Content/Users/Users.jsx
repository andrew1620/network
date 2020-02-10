import React from "react";
import css from "./style.module.css";
import userPhoto from "../../../assets/img/userPhoto.png";
import { NavLink } from "react-router-dom";

const Users = props => {
  const pagesAmount = Math.ceil(props.totalCount / props.count);
  const pagesNumbers = [];
  for (let i = 1; i <= pagesAmount; i++) {
    pagesNumbers.push(i);
  }

  return (
    <div>
      <div className={css.pagesNumbersBox}>
        {pagesNumbers.map(number => {
          return (
            <span
              className={number === props.currentPage && css.activePage}
              onClick={() => {
                props.handlePageNumClick(number);
              }}
              key={number}
            >
              {number}
            </span>
          );
        })}
      </div>
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
