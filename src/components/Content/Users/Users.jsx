import React from "react";
import css from "./style.module.css";
import userPhoto from "../../../assets/img/userPhoto.png";
import { NavLink } from "react-router-dom";
import * as axios from "axios";

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
                onClick={() => {
                  axios
                    .delete(
                      `https://social-network.samuraijs.com/api/1.0/follow/${user.id}`,
                      {
                        withCredentials: true,
                        headers: {
                          "API-KEY": "7ebc0e2f-36d6-4ed4-86a2-e15c60502706"
                        }
                      }
                    )
                    .then(response => {
                      if (response.data.resultCode === 0)
                        props.unfollow(user.id);
                    });
                }}
              >
                Удалить из друзей
              </button>
            ) : (
              <button
                onClick={() => {
                  axios
                    .post(
                      `https://social-network.samuraijs.com/api/1.0/follow/${user.id}`,
                      {},
                      {
                        withCredentials: true,
                        headers: {
                          "API-KEY": "7ebc0e2f-36d6-4ed4-86a2-e15c60502706"
                        }
                      }
                    )
                    .then(response => {
                      if (response.data.resultCode === 0) props.follow(user.id);
                    });
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
