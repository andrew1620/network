import React, { useState } from "react";
import css from "./style.module.css";

import Info from "./Info";
import { ProfileType } from "../../../../../redux/profileReducer";

type PIMainProps = {
  profile: ProfileType;
};

const PIMain: React.FC<PIMainProps> = ({ profile }) => {
  const [toggleDetails, setToggleDetails] = useState(false);

  return (
    <div className={css.mainBox}>
      <div className={css.mainInfo}>
        <div className={css.item}>
          <span className={css.left}>День рождения</span>
          <span className={css.right}>3 декабря 1984 г.</span>
        </div>
        <div className={css.item}>
          <span className={css.left}>Город</span>
          <span className={css.right}>Санкт-Петербург</span>
        </div>
        <div className={css.item}>
          <span className={css.left}>Место учебы</span>
          <span className={css.right}>ГУАП</span>
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

      {toggleDetails && <MoreInfo profile={profile} />}
    </div>
  );
};

export default PIMain;

type MoreInfoProps = {
  profile: ProfileType;
};
const MoreInfo: React.FC<MoreInfoProps> = ({ profile }) => {
  const main = [
    {
      id: 1,
      label: "Ищу работу",
      description: profile.lookingForAJob ? "Да" : "Нет"
    },
    {
      id: 2,
      label: "Описание",
      description: profile.lookingForAJobDescription
        ? profile.lookingForAJobDescription
        : "Description"
    }
  ];
  const education = [
    {
      id: 1,
      label: "Вуз",
      description: "СПбГУАП"
    },
    {
      id: 2,
      label: "Колледж",
      description: "СПбПК"
    }
  ];
  return (
    <div>
      <Info title="Личная информация" pageRef="/editPIForm" data={main} />
      <Info title="Образование" data={education} />
    </div>
  );
};
