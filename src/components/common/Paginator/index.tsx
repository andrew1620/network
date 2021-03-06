import React from "react";
import css from "./style.module.css";
import { connect } from "react-redux";
import { setPortionNumber } from "../../../redux/usersReducer";
import { AppStateType } from "../../../redux/store";

type PropsType = {
  totalCount: number | null;
  count: number;
  currentPage: number;
  portionSize: number;
  portionNumber: number;
  handlePageNumClick: (number: number) => void;
  setPortionNumber: (portionNumber: number) => void;
};

const Paginator: React.FC<PropsType> = ({
  totalCount,
  count,
  currentPage,
  handlePageNumClick,
  portionSize = 10,
  portionNumber,
  setPortionNumber
}) => {
  if (!totalCount) totalCount = 0;
  const pagesAmount = Math.ceil(totalCount / count); //Всего страниц
  const pagesNumbers = []; //кол-во кнопочек с номерами страниц

  for (let i = 1; i <= pagesAmount; i++) {
    pagesNumbers.push(i);
  }

  const portionsAmount = Math.ceil(pagesAmount / portionSize);

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
          className={`${css.page} ${number === currentPage && css.activePage}`}
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
        {"<"}
      </button>
      {pages}
      <button
        onClick={handleBtnRight}
        disabled={portionNumber === portionsAmount}
      >
        {">"}
      </button>
    </div>
  );
};

const mstp = (state: AppStateType) => ({
  portionNumber: state.usersPage.portionNumber
});

export default connect(mstp, { setPortionNumber })(Paginator);
