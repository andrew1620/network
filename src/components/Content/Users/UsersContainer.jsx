import React from "react";
import { connect } from "react-redux";
// import Users from ".";
import {
  followAC,
  unfollowAC,
  setUsersAC,
  setCurrentPageAC,
  setTotalUsersCountAC
} from "../../../redux/usersReducer";
import * as axios from "axios";
import Users from "./Users";

class UsersContainer extends React.Component {
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.count}&page=${this.props.currentPage}`
      )
      .then(response => {
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
      });
  }

  handlePageNumClick(number) {
    this.props.setCurrentPage(number);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.count}&page=${number}`
      )
      .then(response => {
        this.props.setUsers(response.data.items);
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
        <Users
          totalCount={this.props.totalCount}
          count={this.props.count}
          currentPage={this.props.currentPage}
          handlePageNumClick={this.handlePageNumClick.bind(this)}
          unfollow={this.props.unfollow}
          follow={this.props.follow}
          users={this.props.users}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.usersPage.users,
    count: state.usersPage.count,
    currentPage: state.usersPage.currentPage,
    totalCount: state.usersPage.totalCount
  };
};
const mapDispatchToProps = dispatch => {
  return {
    follow: userId => {
      dispatch(followAC(userId));
    },
    unfollow: userId => {
      dispatch(unfollowAC(userId));
    },
    setUsers: users => {
      dispatch(setUsersAC(users));
    },
    setCurrentPage: newCurrentPage => {
      dispatch(setCurrentPageAC(newCurrentPage));
    },
    setTotalUsersCount: newCount => {
      dispatch(setTotalUsersCountAC(newCount));
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
