import React from "react";
import css from "./style.module.css";
import userPhoto from "../../../assets/img/userPhoto.png";

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
            >
              {number}
            </span>
          );
        })}
      </div>
      {props.users.map(user => (
        <div key={user.id} className={css.userBox}>
          <div className={css.photo}>
            <img
              src={user.photos.small == null ? userPhoto : user.photos.small}
              className={css.img}
              alt="avaPhoto"
            />
          </div>
          <div className="content">
            <div className="info">
              <span className="name">{user.name}</span>
              {/* <span>{user.location.city}</span>
              <span>{user.location.country}</span> */}
            </div>
            {user.followed ? (
              <button
                onClick={() => {
                  props.unfollow(user.id);
                }}
              >
                Удалить из друзей
              </button>
            ) : (
              <button
                onClick={() => {
                  props.follow(user.id);
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
