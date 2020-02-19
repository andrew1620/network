import React, { useState } from "react";
import css from "./style.module.css";

const Paginator = ({
  totalCount,
  count,
  currentPage,
  handlePageNumClick,
  portionSize = 10
}) => {
  const pagesAmount = Math.ceil(totalCount / count);
  const pagesNumbers = [];

  for (let i = 1; i <= pagesAmount; i++) {
    pagesNumbers.push(i);
  }

  const portionCount = Math.ceil(pagesAmount / count);
  const [portionNumber, setPortionNumber] = useState(1);
  const leftBorderPagesNumbers = (portionNumber - 1) * portionSize + 1;
  const rigthBorderPagesNumbers = portionNumber * portionSize;

  const pages = pagesNumbers
    .filter(
      number =>
        number >= leftBorderPagesNumbers && number <= rigthBorderPagesNumbers
    )
    .map(number => {
      return (
        <span
          className={number === currentPage && css.activePage}
          onClick={() => {
            handlePageNumClick(number);
          }}
          key={number}
        >
          {number}
        </span>
      );
    });

  const handleBtnLeft = () => {
    setPortionNumber(portionNumber - 1);
  };
  const handleBtnRight = () => {
    setPortionNumber(portionNumber + 1);
  };

  return (
    <div className={css.pagesNumbersBox}>
      <button onClick={handleBtnLeft} disabled={portionNumber <= 1}>
        {"<--"}
      </button>
      {pages}{" "}
      <button onClick={handleBtnRight} disabled={portionNumber >= portionCount}>
        {"-->"}
      </button>{" "}
    </div>
  );
};

export default Paginator;
