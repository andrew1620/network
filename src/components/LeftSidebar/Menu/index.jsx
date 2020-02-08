import React from "react";
import "./style.css";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    // переделать меню, все сделано не как в вк
    // -----------------------------------------
    <nav className="nav">
      <div className="refContainer">
        <div className="profileIcon">
          {/* <img
            src="https://sun9-38.userapi.com/c200624/v200624277/593eb/VZ49PY9eRKo.jpg"
            alt="profileIcon"
          /> */}
        </div>
        <NavLink to="/profile">Моя страница</NavLink>
      </div>
      <div className="refContainer">
        <div className="dialogsIcon">
          {/* <img
            src="https://sun9-28.userapi.com/c200624/v200624277/59414/YYnMcKtz34U.jpg"
            alt="dialogsIcon"
          /> */}
        </div>
        <NavLink to="/dialogs">Сообщения</NavLink>
      </div>
      <div className="refContainer">
        <div className="newsIcon">
          {/* <img
            src="https://sun9-17.userapi.com/c200624/v200624277/5940d/-Pby9f7A6BM.jpg"
            alt="newsIcon"
          /> */}
        </div>
        <NavLink to="/news">Новости</NavLink>
      </div>
      <div className="refContainer">
        <div className="newsIcon">
          {/* <img
            src="https://sun9-17.userapi.com/c200624/v200624277/5940d/-Pby9f7A6BM.jpg"
            alt="newsIcon"
          /> */}
        </div>
        <NavLink to="/users">Люди</NavLink>
      </div>
    </nav>
  );
};

export default Menu;
