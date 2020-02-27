import React from "react";
import css from "./style.module.css";
import OwnerBlock from "./OwnerBlock";

const Header = props => {
  return (
    <header className={css.header}>
      <div className={css.content}>
        <div className="headerLogo">
          <a className={css.logo} href="/profile">
            VK
          </a>
        </div>
        <OwnerBlock {...props} />
      </div>
    </header>
  );
};
export default Header;
