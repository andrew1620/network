import React from "react";
import css from "./style.module.css";

import spinner from "../../../assets/img/preloader.svg";
import dottedPreloader from "../../../assets/img/dotPreloader.svg";

type Props = {
  type?: string;
};

const Preloader: React.FC<Props> = ({ type }) => {
  if (!type) type = spinner;
  if (type === "dotted") type = dottedPreloader;
  else type = spinner;

  return (
    <div className={type === spinner ? css.spinnerDiv : css.dottedDiv}>
      <img
        src={type}
        alt="preloader"
        className={type === spinner ? css.spinner : css.dotted}
      />
    </div>
  );
};
export default Preloader;
