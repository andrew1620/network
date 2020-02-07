const initialState = {
  users: []
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.payload) return { ...user, followed: true };
          else return user;
        })
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.payload) return { ...user, followed: false };
          else return user;
        })
      };
    case SET_USERS:
      return { ...state, users: [...state.users, ...action.payload] };
    default:
      return state;
  }
};

export default usersReducer;

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

export const followAC = id => {
  return {
    type: FOLLOW,
    payload: id
  };
};
export const unfollowAC = id => {
  return {
    type: UNFOLLOW,
    payload: id
  };
};
export const setUsersAC = users => {
  return { type: SET_USERS, payload: users };
};
