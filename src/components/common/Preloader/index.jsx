import React from "react";
import css from "./style.module.css";

import spinner from "../../../assets/img/preloader.svg";

const Preloader = () => {
  return (
    <div className={css.small}>
      <img src={spinner} alt="preloader" className={css.img} />
    </div>
  );
};
export default Preloader;

// size must be either 'small' or 'large'. Default - 'small'
