import React from "react";
import css from "./style.module.css";

import FriendsHeader from "./FriendsHeader";
import Friend from "./Friend";

const ProfileFriends: React.FC = () => {
  const friendsList = friends.map(friend => (
    <Friend key={friend.id} friend={friend} />
  ));

  return (
    <div className={css.friendsBox}>
      <FriendsHeader friendsAmount={6} />
      <div className={css.friendsList}>{friendsList}</div>
    </div>
  );
};

export default ProfileFriends;

const friends = [
  {
    id: 1,
    name: "Миша",
    img:
      "https://avatars.mds.yandex.net/get-zen_doc/235990/pub_5d6554d1027a1500ad1d93bd_5d6554d94e057700ad5e9449/scale_1200"
  },
  {
    id: 2,
    name: "Саня",
    img:
      "https://s1.1zoom.ru/b5050/297/Canada_Mountains_Scenery_488936_1680x1050.jpg"
  },
  {
    id: 3,
    name: "Лера",
    img:
      "https://avatars.mds.yandex.net/get-pdb/195449/0642142b-b08f-414f-b34d-ca70e6586c2a/s1200"
  },
  {
    id: 4,
    name: "Вика",
    img:
      "https://avatars.mds.yandex.net/get-pdb/1927216/ee2d23f7-8f8f-4a5a-a6f9-fbf19ec7bcda/s1200?webp=false"
  },
  {
    id: 5,
    name: "Алексей",
    img:
      "https://avatars.mds.yandex.net/get-pdb/1935703/fe32e1de-92b6-4b58-9b53-0996ba379e23/s1200?webp=false"
  },
  {
    id: 6,
    name: "Паша",
    img: ""
  }
];
