import { profileAPI } from "../api/api";
import { requireOwnerData } from "./ownerReducer";
import { reset } from "redux-form";

const dateFormatter = new Intl.DateTimeFormat("ru", {
  year: "numeric",
  month: "short",
  day: "numeric"
});

const initialState = {
  posts: [
    {
      id: 1,
      date: "2 фев. 2019 г.",
      likes: 2,
      body:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla  voluptatum, natus mollitia optio est blanditiis corrupti. In laborum omnis laboriosam blanditiis quod aspernatur error mollitia, ducimus hicimpedit, autem odit? Facere, nisi! Quos in quibusdam doloremque illumunde amet nobis aperiam!"
    },
    {
      id: 2,
      date: "3 фев. 2019 г.",
      likes: 17,
      body:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla  voluptatum, natus mollitia optio est blanditiis corrupti. In laborum omnis laboriosam blanditiis quod aspernatur error mollitia, ducimus hicimpedit, autem odit? Facere, nisi! Quos in quibusdam doloremque illumunde amet nobis aperiam!"
    },
    {
      id: 3,
      date: "24 фев. 2019 г.",
      likes: 24,
      body:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla  voluptatum, natus mollitia optio est blanditiis corrupti. In laborum omnis laboriosam blanditiis quod aspernatur error mollitia, ducimus hicimpedit, autem odit? Facere, nisi! Quos in quibusdam doloremque illumunde amet nobis aperiam!"
    },
    {
      id: 4,
      date: "30 авг. 2019 г.",
      likes: null,
      body:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla  voluptatum, natus mollitia optio est blanditiis corrupti. In laborum omnis laboriosam blanditiis quod aspernatur error mollitia, ducimus hicimpedit, autem odit? Facere, nisi! Quos in quibusdam doloremque illumunde amet nobis aperiam!"
    }
  ],
  profile: { photos: { small: null, large: null } },
  userStatus: "",
  isPIUpdated: false,
  isOwner: null
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      const newPost = {
        id: state.posts[state.posts.length - 1].id + 1,
        date: dateFormatter.format(new Date()),
        likes: null,
        body: action.payload
      };
      return { ...state, posts: [...state.posts, newPost] };

    case SET_USER_PROFILE:
      return { ...state, profile: action.payload };
    case SET_USER_STATUS:
      return { ...state, userStatus: action.payload };
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter(post => post.id !== action.payload)
      };
    case TOGGLE_IS_PI_UPDATED:
      return { ...state, isPIUpdated: action.payload };
    case SET_PHOTO:
      return {
        ...state,
        profile: { ...state.profile, photos: action.payload }
      };
    case SET_IS_OWNER:
      return { ...state, isOwner: action.payload };
    default:
      return state;
  }
};
export default profileReducer;

const ADD_POST = "profile/ADD_POST";
const SET_USER_PROFILE = "profile/SET_USER_PROFILE";
const SET_USER_STATUS = "profile/SET_USER_STATUS";
const DELETE_POST = "profile/DELETE_POST";
const TOGGLE_IS_PI_UPDATED = "profile/TOGGLE_IS_PI_UPDATED";
const SET_PHOTO = "profile/SET_PHOTO";
const SET_IS_OWNER = "profile/SET_IS_OWNER";

export const addPostAC = postBody => {
  return { type: ADD_POST, payload: postBody };
};
export const setUserProfile = profile => {
  return { type: SET_USER_PROFILE, payload: profile };
};
export const setUserStatus = newStatus => {
  return { type: SET_USER_STATUS, payload: newStatus };
};
export const deletePost = postId => {
  return { type: DELETE_POST, payload: postId };
};
export const toggleIsPIUpdated = isPIUpdated => {
  return { type: TOGGLE_IS_PI_UPDATED, payload: isPIUpdated };
};
export const setPhoto = photos => {
  return { type: SET_PHOTO, payload: photos };
};
export const setIsOwner = isOwner => {
  return { type: SET_IS_OWNER, payload: isOwner };
};

//TC = ThunkCreator

export const addPost = postBody => dispatch => {
  dispatch(addPostAC(postBody));
  dispatch(reset("addPostForm"));
};

export const setUserProfileTC = userId => {
  return (dispatch, getState) => {
    profileAPI.getUserProfile(userId).then(data => {
      dispatch(setUserProfile(data));
      const ownerId = getState().auth.userId;
      if (data.userId === ownerId) dispatch(setIsOwner(true));
      else dispatch(setIsOwner(false));
    });
  };
};

export const getUserStatusTC = userId => {
  return dispatch => {
    profileAPI.getUserStatus(userId).then(data => {
      data === ""
        ? dispatch(setUserStatus("изменить статус"))
        : dispatch(setUserStatus(data));
    });
  };
};
export const updateUserStatusTC = newStatus => {
  return dispatch => {
    profileAPI.updateUserStatus(newStatus).then(data => {
      if (data.resultCode === 0) dispatch(setUserStatus(newStatus));
    });
  };
};
export const updateProfileInfo = info => async (dispatch, getState) => {
  const response = await profileAPI.updateProfileInfo(info);
  if (response.data.resultCode === 0) {
    const userId = getState().auth.userId;
    dispatch(setUserProfileTC(userId));
    dispatch(toggleIsPIUpdated(true));
  }
};
export const uploadPhoto = photo => async (dispatch, getState) => {
  const data = await profileAPI.uploadPhoto(photo);
  const userId = getState().auth.userId;
  if (data.resultCode === 0) {
    dispatch(setPhoto(data.data.photos));
    dispatch(requireOwnerData(userId));
  }
};
