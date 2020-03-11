import React from "react";
import css from "./style.module.css";

import Preloader from "../../../common/Preloader";

const UsersHeader = ({ totalCount, isFetching }) => {
  return (
    <div className={css.container}>
      <div className={css.title}>
        <span className={css.people}>Люди</span>
        <span className={css.amount}>{totalCount}</span>
        <span>{isFetching && <Preloader type="dotted" />}</span>
      </div>
    </div>
  );
};

export default UsersHeader;
