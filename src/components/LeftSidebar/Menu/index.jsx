import React from "react";
import MenuItem from "./MenuItem";

// переделать меню, все сделано не как в вк
// -----------------------------------------
const Menu = () => {
  const menuObjects = [
    {
      id: 1,
      iconClass: "profileIcon",
      pageRef: "/profile",
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
      iconClass: "newsIcon",
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

  return <nav className="nav">{menuList}</nav>;
};

export default Menu;
