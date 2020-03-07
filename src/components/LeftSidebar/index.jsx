import React from "react";
import css from "./style.module.css";

import Menu from "./Menu";

const LeftSidebar = () => {
  return (
    <aside className={css.leftSidebar}>
      <Menu />
    </aside>
  );
};

export default LeftSidebar;
