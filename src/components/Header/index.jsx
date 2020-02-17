import React from "react";
import css from "./style.module.css";
import LoginBlock from "./LoginBlock";

const Header = props => {
  return (
    <header className={css.header}>
      <div className={css.content}>
        <div className="headerLogo">
          <a className={css.logo} href="/profile">
            VK
          </a>
        </div>
        <LoginBlock {...props} />
      </div>
    </header>
  );
};
export default Header;
