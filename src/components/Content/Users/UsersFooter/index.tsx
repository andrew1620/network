import React from "react";
import css from "./style.module.css";

import Paginator from "../../../common/Paginator";

type PropsType = {
  totalCount: number | null;
  count: number;
  currentPage: number;
  handlePageNumClick: (number: number) => void;
};

const UsersFooter: React.FC<PropsType> = ({
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
        portionSize={10}
      />
    </div>
  );
};

export default UsersFooter;
