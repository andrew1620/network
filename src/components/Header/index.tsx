import React from "react";
import css from "./style.module.css";

import OwnerBlock from "./OwnerBlock";
import { Props as HeaderProps } from "./indexContainer";

const Header: React.FC<HeaderProps> = props => {
  return (
    <>
      <div className={css.back}></div>
      <header className={css.header}>
        <div className={css.content}>
          <div className="headerLogo">
            <a className={css.logo} href="/">
              ВК
            </a>
          </div>
          <OwnerBlock {...props} />
        </div>
      </header>
    </>
  );
};
export default Header;
