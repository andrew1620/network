import React from "react";
import Menu from "./Menu";
import css from "./style.module.css";

const LeftSidebar = () => {
  return (
    <aside className={css.leftSidebar}>
      <Menu />
    </aside>
  );
};

export default LeftSidebar;
