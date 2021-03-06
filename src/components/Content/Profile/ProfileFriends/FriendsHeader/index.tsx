import React from "react";
import css from "./style.module.css";

type Props = {
  friendsAmount: number;
};

const FriendsHeader: React.FC<Props> = ({ friendsAmount }) => {
  return (
    <div className={css.container}>
      <span className={css.friends}>
        Друзья <span className={css.amount}>{friendsAmount}</span>
      </span>
      <span className={css.updates}>Обновления</span>
    </div>
  );
};

export default FriendsHeader;
