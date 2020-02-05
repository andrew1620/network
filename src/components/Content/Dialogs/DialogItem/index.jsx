import React from "react";
import "./style.css";
import { NavLink } from "react-router-dom";

const DialogItem = ({ dialogsData = [] }) => {
  const dialogsList = dialogsData.map(dialog => {
    return (
      <NavLink to={`/dialogs/${dialog.id}`}>
        <div className="dialogItemBox">
          <img className="dialogItemPhoto" src={dialog.img} alt="dialogPic" />
          <div style={{ width: "78%" }}>
            <div>
              <span className="dialogItemName">{dialog.name}</span>
            </div>
            <div className="lastMessage">
              <img
                src="https://i09.fotocdn.net/s119/187c53d6c272f6d1/user_xl/2706836280.jpg"
                alt="lastMessPhoto"
                className="lastMessagePhoto"
              />
              <span>Привет</span>
            </div>
          </div>
          <div>12:33</div>
          <div>X</div>
        </div>
        <hr />
      </NavLink>
    );
  });

  return <div>{dialogsList}</div>;
};

export default DialogItem;
