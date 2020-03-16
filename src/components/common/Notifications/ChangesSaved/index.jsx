import React from "react";
import css from "./style.module.css";

const ChangesSaved = () => {
  return (
    <div className={css.notification}>
      <span className={css.span}>Изменения сохранены</span>
      <div>Новые данные будут отражены на Вашей странице.</div>
    </div>
  );
};

export default ChangesSaved;
