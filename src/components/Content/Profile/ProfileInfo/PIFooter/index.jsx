import React from "react";
import css from "./style.module.css";

const PIFooter = () => {
  return (
    <div className={css.footerBox}>
      <div className={css.item}>
        <div>58</div>
        <div>друзей</div>
      </div>
      <div className={css.item}>
        <div>83</div>
        <div>подписчика</div>
      </div>
      <div className={css.item}>
        <div>15</div>
        <div>подарков</div>
      </div>
      <div className={css.item}>
        <div>283</div>
        <div>аудиозаписи</div>
      </div>
    </div>
  );
};

export default PIFooter;
