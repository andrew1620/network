import React from "react";
import { connect } from "react-redux";
// import Users from ".";
import {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toggleIsFetching,
  toggleIsFollowing
} from "../../../redux/usersReducer";
import Users from "./Users";
import Preloader from "../../common/Preloader";
import { usersAPI } from "../../../api/api";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.toggleIsFetching(true);
    usersAPI.getUsers(this.props.count, this.props.currentPage).then(data => {
      this.props.toggleIsFetching(false);
      this.props.setUsers(data.items);
      this.props.setTotalUsersCount(data.totalCount);
    });
  }

  handlePageNumClick(number) {
    this.props.toggleIsFetching(true);
    this.props.setCurrentPage(number);
    usersAPI.getUsers(this.props.count, number).then(data => {
      this.props.toggleIsFetching(false);
      this.props.setUsers(data.items);
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
        {this.props.isFetching ? (
          <Preloader />
        ) : (
          <div>
            <Users
              totalCount={this.props.totalCount}
              count={this.props.count}
              currentPage={this.props.currentPage}
              handlePageNumClick={this.handlePageNumClick.bind(this)}
              unfollow={this.props.unfollow}
              follow={this.props.follow}
              users={this.props.users}
              isFollowing={this.props.isFollowing}
              toggleIsFollowing={this.props.toggleIsFollowing}
            />
          </div>
        )}
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
    isFetching: state.usersPage.isFetching,
    isFollowing: state.usersPage.isFollowing
  };
};

export default connect(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toggleIsFetching,
  toggleIsFollowing
})(UsersContainer);
