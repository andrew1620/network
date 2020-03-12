import React from "react";
import css from "./style.module.css";
import DialogsNavItem from "./DialogsNavItem";

const DialogsNav = () => {
  const items = [
    { id: 1, title: "Все сообщения", isActive: true },
    { id: 2, title: "Непрочитанные", isActive: false },
    { id: 3, title: "Важные", isActive: false }
  ];

  const itemsList = items.map(item => (
    <DialogsNavItem
      key={item.id}
      title={item.title}
      handleClick={() => alert("hi")}
      isActive={item.isActive}
    />
  ));

  return <div className={css.navBox}>{itemsList}</div>;
};
export default DialogsNav;
