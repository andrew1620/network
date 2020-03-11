import React from "react";
import css from "./style.module.css";

import Paginator from "../../../common/Paginator";

const UsersFooter = ({
  totalCount,
  count,
  currentPage,
  handlePageNumClick
}) => {
  return (
    <div className={css.usersFooter}>
      <Paginator
        totalCount={totalCount}
        count={count}
        currentPage={currentPage}
        handlePageNumClick={handlePageNumClick}
      />
    </div>
  );
};

export default UsersFooter;
