import React from "react";
import { connect } from "react-redux";
// import Users from ".";
import {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toggleIsFetching
} from "../../../redux/usersReducer";
import * as axios from "axios";
import Users from "./Users";
import Preloader from "../../common/Preloader";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.toggleIsFetching(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.count}&page=${this.props.currentPage}`,
        { withCredentials: true }
      )
      .then(response => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
      });
  }

  handlePageNumClick(number) {
    this.props.toggleIsFetching(true);
    this.props.setCurrentPage(number);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.count}&page=${number}`,
        { withCredentials: true }
      )
      .then(response => {
        this.props.toggleIsFetching(false);
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
      <>
        {this.props.isFetching ? <Preloader /> : null}
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
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.usersPage.users,
    count: state.usersPage.count,
    currentPage: state.usersPage.currentPage,
    totalCount: state.usersPage.totalCount,
    isFetching: state.usersPage.isFetching
  };
};

export default connect(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toggleIsFetching
})(UsersContainer);
