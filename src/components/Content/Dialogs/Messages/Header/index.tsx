import React from "react";
import css from "./style.module.css";

import Avatar from "../../../../common/Avatar";
import { NavLink } from "react-router-dom";
import { InterlocutorType } from "../../../../../redux/dialogsReducer";

type Props = {
  interlocutor: InterlocutorType;
};

const MessagesHeader: React.FC<Props> = ({ interlocutor }) => {
  return (
    <div className={css.container}>
      <NavLink to="/dialogs" className={css.goBack}>
        <span className={css.backArrow}></span>{" "}
        <span className={css.goBackCaption}>Назад</span>
      </NavLink>

      <div className={css.info}>
        <NavLink to={`/profile/${interlocutor.id}`} className={css.nameLink}>
          <span className={css.name}>{interlocutor.name}</span>
        </NavLink>
      </div>
      <div className={css.photoBox}>
        <Avatar size="small" img={interlocutor.avatar} />
      </div>
    </div>
  );
};

export default MessagesHeader;
