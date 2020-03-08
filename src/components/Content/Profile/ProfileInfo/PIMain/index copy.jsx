import React, { useState } from "react";
import css from "./style.module.css";
import { NavLink } from "react-router-dom";

const PIMain = ({ profile, updateProfileInfo }) => {
  const [toggleDetails, setToggleDetails] = useState(false);

  return (
    <div className={css.mainBox}>
      <div className={css.mainInfo}>
        <div className={css.itemm}>
          <div className={css.leftt}>День рождения</div>
          <div className={css.rightt}>3 декабря 1984 г.</div>
        </div>
        <div className={css.item}>
          <div className={css.leftt}>Город</div>
          <div className={css.rightt}>Санкт-Петербург</div>
        </div>
        <div className={css.item}>
          <div className={css.leftt}>Место учебы</div>
          <div className={css.rightt}>ГУАП</div>
        </div>
      </div>
      <div
        className={css.showDetails}
        onClick={() => setToggleDetails(!toggleDetails)}
      >
        <span>
          {toggleDetails
            ? "Скрыть подробную информацию"
            : "Показать подробную информацию"}
        </span>
      </div>

      {toggleDetails && (
        <MoreInfo profile={profile} updateProfileInfo={updateProfileInfo} />
      )}
    </div>
  );
};

export default PIMain;

const MoreInfo = ({ profile, updateProfileInfo }) => {
  return (
    <div>
      <div className={css.itemBox}>
        <div className={css.itemName}>
          <span>Личная информация</span>
          <span className={css.btnEdit}>
            <NavLink to="/editPIForm">Редактировать</NavLink>
          </span>
        </div>
        <div className={css.itemMore}>
          <div className={css.left}>
            <div>Ищу работу</div>
            <div>Описание</div>
          </div>
          <div className={css.right}>
            <div>{profile.lookingForAJob ? "Да" : "Нет"}</div>
            <div>
              {profile.lookingForAJobDescription
                ? profile.lookingForAJobDescription
                : "Description"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
