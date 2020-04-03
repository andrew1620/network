import React from "react";
import css from "./style.module.css";

import Menu from "./Menu";

const LeftSidebar: React.FC = () => {
  return (
    <aside className={css.leftSidebar}>
      <Menu />
    </aside>
  );
};

export default LeftSidebar;
