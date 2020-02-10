import React from "react";
import { connect } from "react-redux";
// import Users from ".";
import {
  follow,
  unfollow,
  setCurrentPage,
  toggleIsFollowing,
  getUsersThunkCreator,
  followThunkCreator,
  unfollowThunkCreator
} from "../../../redux/usersReducer";
import Users from "./Users";
import Preloader from "../../common/Preloader";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsersThunkCreator(this.props.count, this.props.currentPage);
  }

  handlePageNumClick(number) {
    this.props.getUsersThunkCreator(this.props.count, number);
    this.props.setCurrentPage(number);
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
              followThunkCreator={this.props.followThunkCreator}
              unfollowThunkCreator={this.props.unfollowThunkCreator}
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
  setCurrentPage,
  toggleIsFollowing,
  getUsersThunkCreator,
  followThunkCreator,
  unfollowThunkCreator
})(UsersContainer);
