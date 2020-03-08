import React from "react";
import css from "./style.module.css";

const ChangesSaved = () => {
  return (
    <div className={css.notification}>
      <span>
        <b>Изменения сохранены</b>
      </span>
      <div>Новые данные будут отражены на Вашей странице.</div>
    </div>
  );
};

export default ChangesSaved;
