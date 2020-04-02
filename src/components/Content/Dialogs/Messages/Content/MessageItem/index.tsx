import React from "react";
import css from "./style.module.css";

import Avatar from "../../../../../common/Avatar";
import { MessageType } from "../../../../../../redux/dialogsReducer";

type UserData = {
  id: number | null;
  name: string | null;
  avatar: string | null;
};
type Props = {
  userData: UserData;
  message: MessageType;
};

const MessageItem: React.FC<Props> = ({ userData, message }) => {
  return (
    <div className={css.container}>
      <div className={css.sidebar}>
        <div className={css.tick}></div>
        <div className={css.avatar}>
          <Avatar
            size="36,36"
            pageRef={`/profile${userData.id}`}
            img={userData.avatar}
          />
        </div>
      </div>
      <div className={css.main}>
        <div className={css.mainHeader}>
          <div className={css.name}>{userData.name}</div>
          <div className={css.time}>{message.time}</div>
          <div className={css.actions}>
            <div className={css.edit}></div>
            <div className={css.star}></div>
          </div>
        </div>
        <div className={css.text}>{message.text}</div>
      </div>
    </div>
  );
};

export default MessageItem;
