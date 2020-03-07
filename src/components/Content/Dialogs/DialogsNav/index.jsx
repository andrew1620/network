import React from "react";
import css from "./style.module.css";

const DialogsNav = () => {
  return (
    <div className={css.navBox}>
      <div>Все сообщения</div>
      <div>Непрочитанные</div>
      <div>Важные</div>
    </div>
  );
};
export default DialogsNav;
