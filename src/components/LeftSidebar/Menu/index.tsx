import React from "react";
import MenuItem from "./MenuItem";

const Menu: React.FC = () => {
  const menuObjects = [
    {
      id: 1,
      iconClass: "profileIcon",
      pageRef: "/",
      navlinkInner: "Моя страница"
    },
    {
      id: 2,
      iconClass: "dialogsIcon",
      pageRef: "/dialogs",
      navlinkInner: "Сообщения"
    },
    {
      id: 3,
      iconClass: "newsIcon",
      pageRef: "/news",
      navlinkInner: "Новости"
    },
    {
      id: 4,
      iconClass: "peopleIcon",
      pageRef: "/users",
      navlinkInner: "Люди"
    }
  ];

  const menuList = menuObjects.map(item => (
    <MenuItem
      key={item.id}
      iconClass={item.iconClass}
      pageRef={item.pageRef}
      navlinkInner={item.navlinkInner}
    />
  ));

  return <nav>{menuList}</nav>;
};

export default Menu;
