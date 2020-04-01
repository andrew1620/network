import { reset } from "redux-form";

import { profileAPI } from "../api/api";
import { requireOwnerData } from "./ownerReducer";
import { PhotosType } from "./commonTypes";
import { ThunkAction } from "redux-thunk";
import { AppStateType } from "./store";

const ADD_POST = "profile/ADD_POST";
const SET_USER_PROFILE = "profile/SET_USER_PROFILE";
const SET_USER_STATUS = "profile/SET_USER_STATUS";
const DELETE_POST = "profile/DELETE_POST";
const TOGGLE_IS_PI_UPDATED = "profile/TOGGLE_IS_PI_UPDATED";
const SET_PHOTO = "profile/SET_PHOTO";
const SET_IS_OWNER = "profile/SET_IS_OWNER";

const dateFormatter = new Intl.DateTimeFormat("ru", {
  year: "numeric",
  month: "short",
  day: "numeric"
});

type PostType = {
  id: number;
  date: string;
  likes: number;
  body: string;
};

export type ProfileType = {
  aboutMe: string | null;
  contacts: {
    facebook: string | null;
    website: string | null;
    vk: string | null;
    twitter: string | null;
    instagram: string | null;
    youtube: string | null;
    github: string | null;
    mainLink: string | null;
  };
  lookingForAJob: boolean | null;
  lookingForAJobDescription: string | null;
  fullName: string | null;
  userId: number | null;
  photos: PhotosType;
};

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
  ] as Array<PostType>,
  profile: { photos: {} } as ProfileType | null,
  userStatus: "",
  isPIUpdated: false,
  isOwner: null as boolean | null
};

type InitialStateType = typeof initialState;

type ActionTypes =
  | AddPostACActionType
  | SetUserProfileACActionType
  | SetUserStatusACActionType
  | DeletePostACActionType
  | ToggleIsPIUpdatedActionType
  | SetPhotoACActionType
  | SetIsOwnerACActionType
  | ResetType;

const profileReducer = (
  state = initialState,
  action: ActionTypes
): InitialStateType => {
  switch (action.type) {
    case ADD_POST:
      const newPost: PostType = {
        id: state.posts[state.posts.length - 1].id + 1,
        date: dateFormatter.format(new Date()),
        likes: Math.floor(Math.random() * 100 + 1),
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
        profile: { ...state.profile, photos: action.payload } as ProfileType //временно
      };
    case SET_IS_OWNER:
      return { ...state, isOwner: action.payload };
    default:
      return state;
  }
};
export default profileReducer;

type AddPostACActionType = {
  type: typeof ADD_POST;
  payload: string;
};
export const addPostAC = (postBody: string): AddPostACActionType => {
  return { type: ADD_POST, payload: postBody };
};

type SetUserProfileACActionType = {
  type: typeof SET_USER_PROFILE;
  payload: ProfileType;
};
export const setUserProfileAC = (
  profile: ProfileType
): SetUserProfileACActionType => {
  return { type: SET_USER_PROFILE, payload: profile };
};

type SetUserStatusACActionType = {
  type: typeof SET_USER_STATUS;
  payload: string;
};
export const setUserStatusAC = (
  newStatus: string
): SetUserStatusACActionType => {
  return { type: SET_USER_STATUS, payload: newStatus };
};

type DeletePostACActionType = {
  type: typeof DELETE_POST;
  payload: number;
};
export const deletePostAC = (postId: number): DeletePostACActionType => {
  return { type: DELETE_POST, payload: postId };
};

type ToggleIsPIUpdatedActionType = {
  type: typeof TOGGLE_IS_PI_UPDATED;
  payload: boolean;
};
export const toggleIsPIUpdated = (
  isPIUpdated: boolean
): ToggleIsPIUpdatedActionType => {
  return { type: TOGGLE_IS_PI_UPDATED, payload: isPIUpdated };
};

type SetPhotoACActionType = {
  type: typeof SET_PHOTO;
  payload: PhotosType;
};
export const setPhotoAC = (photos: PhotosType): SetPhotoACActionType => {
  return { type: SET_PHOTO, payload: photos };
};

type SetIsOwnerACActionType = {
  type: typeof SET_IS_OWNER;
  payload: boolean;
};
export const setIsOwnerAC = (isOwner: boolean): SetIsOwnerACActionType => {
  return { type: SET_IS_OWNER, payload: isOwner };
};

type ResetType = any;

// --------THUNKS----------

type ThunkType = ThunkAction<void, AppStateType, unknown, ActionTypes>;

export const addPost = (postBody: string): ThunkType => dispatch => {
  dispatch(addPostAC(postBody));
  dispatch(reset("addPostForm"));
};

export const setUserProfile = (userId: number | null): ThunkType => {
  return (dispatch, getState) => {
    profileAPI.getUserProfile(userId).then(data => {
      dispatch(setUserProfileAC(data));
      const ownerId = getState().auth.userId;
      if (data.userId === ownerId) dispatch(setIsOwnerAC(true));
      else dispatch(setIsOwnerAC(false));
    });
  };
};
export const getUserStatus = (userId: number): ThunkType => {
  return dispatch => {
    profileAPI.getUserStatus(userId).then(data => {
      data === ""
        ? dispatch(setUserStatusAC("изменить статус"))
        : dispatch(setUserStatusAC(data));
    });
  };
};
export const updateUserStatus = (newStatus: string): ThunkType => {
  return dispatch => {
    profileAPI.updateUserStatus(newStatus).then(data => {
      if (data.resultCode === 0) dispatch(setUserStatusAC(newStatus));
    });
  };
};
export const updateProfileInfo = (info: ProfileType): ThunkType => async (
  dispatch,
  getState
) => {
  const response = await profileAPI.updateProfileInfo(info);
  if (response.data.resultCode === 0) {
    const userId = getState().auth.userId;
    dispatch(setUserProfile(userId));
    dispatch(toggleIsPIUpdated(true));
  }
};

// photo:any
export const uploadPhoto = (photo: any): ThunkType => async dispatch => {
  const data = await profileAPI.uploadPhoto(photo);
  if (data.resultCode === 0) {
    dispatch(setPhotoAC(data.data.photos));
    dispatch(requireOwnerData());
  }
};
