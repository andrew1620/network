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
import {
  getUsers,
  getCount,
  getCurrentPage,
  getTotalCount,
  getIsFetching,
  getIsFollowing
} from "../../../redux/usersSelectors";

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

//Использованы селекторы
const mapStateToProps = state => {
  return {
    users: getUsers(state),
    count: getCount(state),
    currentPage: getCurrentPage(state),
    totalCount: getTotalCount(state),
    isFetching: getIsFetching(state),
    isFollowing: getIsFollowing(state)
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
