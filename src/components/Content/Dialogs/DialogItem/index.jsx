import React from "react";
import "./style.css";
import { NavLink } from "react-router-dom";

const DialogItem = () => {
  const dialogsList = dialogs.map(dialog => {
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

  return (
    <div>{dialogsList}</div>
    // <div className="dialogItemBox">
    //   <img
    //     className="dialogItemPhoto"
    //     src="https://avatars.mds.yandex.net/get-pdb/1040792/0489ff80-181a-4697-83b4-b0cf25001614/s1200"
    //     alt="dialogPic"
    //   />
    //   <div>
    //     <div>
    //       <span className="dialogItemName">Vasya Pupkin</span>
    //     </div>
    //     <div className="lastMessage">
    //       <img
    //         src="https://i09.fotocdn.net/s119/187c53d6c272f6d1/user_xl/2706836280.jpg"
    //         alt="lastMessPhoto"
    //         className="lastMessagePhoto"
    //       />
    //       <span>Привет</span>
    //     </div>
    //   </div>
    // </div>
  );
};

export default DialogItem;
const dialogs = [
  {
    name: "Petya Rogov",
    img:
      "https://avatars.mds.yandex.net/get-pdb/1040792/0489ff80-181a-4697-83b4-b0cf25001614/s1200",
    id: 1
  },
  {
    name: "Kostik Dzu",
    img:
      "https://avatars.mds.yandex.net/get-pdb/1040792/0489ff80-181a-4697-83b4-b0cf25001614/s1200",
    id: 2
  },
  {
    name: "Pasha Chlenov",
    img:
      "https://avatars.mds.yandex.net/get-pdb/1040792/0489ff80-181a-4697-83b4-b0cf25001614/s1200",
    id: 3
  },
  {
    name: "Pasha Chlenov",
    img:
      "https://avatars.mds.yandex.net/get-pdb/1040792/0489ff80-181a-4697-83b4-b0cf25001614/s1200",
    id: 4
  }
];
