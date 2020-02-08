import React from "react";
import css from "./style.module.css";
import * as axios from "axios";
import userPhoto from "../../../assets/img/userPhoto.png";

class Users extends React.Component {
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.count}&page=${this.props.currentPage}`
      )
      .then(response => this.props.setUsers(response.data.items));
  }

  handlePageNumClick(number) {
    this.props.setCurrentPage(number);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.count}&page=${number}`
      )
      .then(response => {
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
      });
  }

  render() {
    const pagesAmount = Math.ceil(this.props.totalCount / this.props.count);
    const pagesNumbers = [];
    for (let i = 1; i <= pagesAmount; i++) {
      pagesNumbers.push(i);
    }

    return (
      <div>
        <div>
          {pagesNumbers.map(number => {
            return (
              <span
                className={number === this.props.currentPage && css.activePage}
                onClick={() => {
                  this.handlePageNumClick(number);
                }}
              >
                {number}
              </span>
            );
          })}
        </div>
        {this.props.users.map(user => (
          <div key={user.id} className={css.userBox}>
            <div className={css.photo}>
              <img
                src={user.photos.small == null ? userPhoto : user.photos.small}
                className={css.img}
                alt="avaPhoto"
              />
            </div>
            <div className="content">
              <div className="info">
                <span className="name">{user.name}</span>
                {/* <span>{user.location.city}</span>
              <span>{user.location.country}</span> */}
              </div>
              {user.followed ? (
                <button
                  onClick={() => {
                    this.props.unfollow(user.id);
                  }}
                >
                  Удалить из друзей
                </button>
              ) : (
                <button
                  onClick={() => {
                    this.props.follow(user.id);
                  }}
                >
                  Добавить в друзья
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    );
  }
}

// const Users = ({ users = [], follow, unfollow, setUsers }) => {
//   if (users.length === 0) {
//     axios
//       .get("https://social-network.samuraijs.com/api/1.0/users")
//       .then(response => setUsers(response.data.items));
//   }

//   const usersList = users.map(user => (
//     <div key={user.id} className={css.userBox}>
//       <div className={css.photo}>
//         <img
//           src={user.photos.small == null ? userPhoto : user.photos.small}
//           className={css.img}
//           alt="avaPhoto"
//         />
//       </div>
//       <div className="content">
//         <div className="info">
//           <span className="name">{user.name}</span>
//           {/* <span>{user.location.city}</span>
//           <span>{user.location.country}</span> */}
//         </div>
//         {user.followed ? (
//           <button
//             onClick={() => {
//               unfollow(user.id);
//             }}
//           >
//             Удалить из друзей
//           </button>
//         ) : (
//           <button
//             onClick={() => {
//               follow(user.id);
//             }}
//           >
//             Добавить в друзья
//           </button>
//         )}
//       </div>
//     </div>
//   ));

//   return <div>{usersList}</div>;
// };

export default Users;

const userArr = [
  {
    id: 1,
    followed: true,
    name: "Alex",
    status: "Everything is Perfect",
    location: { city: "Kiev", country: "Ukraine" },
    photoUrl:
      "http://www.rogalyd.no/sites/default/files/media/images/gallery/photo_by_pal_robert_saether.jpg"
  },
  {
    id: 2,
    followed: true,
    name: "Gero",
    status: "I'm hungry",
    location: { city: "Paris", country: "French" },
    photoUrl:
      "http://www.rogalyd.no/sites/default/files/media/images/gallery/photo_by_pal_robert_saether.jpg"
  },
  {
    id: 3,
    followed: true,
    name: "Pasha",
    status: "htttp://youtube/chanel1",
    location: { city: "Moscow", country: "Russia" },
    photoUrl:
      "http://www.rogalyd.no/sites/default/files/media/images/gallery/photo_by_pal_robert_saether.jpg"
  }
];
