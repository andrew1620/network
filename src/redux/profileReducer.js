import { profileAPI } from "../api/api";

const initialState = {
  postsArr: [
    {
      id: 1,
      name: "Vasya Pupkin",
      img:
        "https://avatars.mds.yandex.net/get-pdb/1040792/0489ff80-181a-4697-83b4-b0cf25001614/s1200",
      body:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla  voluptatum, natus mollitia optio est blanditiis corrupti. In laborum omnis laboriosam blanditiis quod aspernatur error mollitia, ducimus hicimpedit, autem odit? Facere, nisi! Quos in quibusdam doloremque illumunde amet nobis aperiam!"
    },
    {
      id: 2,
      name: "Pashok Surkov",
      img:
        "https://avatars.mds.yandex.net/get-pdb/1040792/0489ff80-181a-4697-83b4-b0cf25001614/s1200",
      body:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla  voluptatum, natus mollitia optio est blanditiis corrupti. In laborum omnis laboriosam blanditiis quod aspernatur error mollitia, ducimus hicimpedit, autem odit? Facere, nisi! Quos in quibusdam doloremque illumunde amet nobis aperiam!"
    },
    {
      id: 3,
      name: "Petter Grick",
      img:
        "https://avatars.mds.yandex.net/get-pdb/1040792/0489ff80-181a-4697-83b4-b0cf25001614/s1200",
      body:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla  voluptatum, natus mollitia optio est blanditiis corrupti. In laborum omnis laboriosam blanditiis quod aspernatur error mollitia, ducimus hicimpedit, autem odit? Facere, nisi! Quos in quibusdam doloremque illumunde amet nobis aperiam!"
    }
  ],
  profile: { photos: { small: null, large: null } },
  userStatus: ""
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      const newPost = {
        id: Date.now(), //Временно, пока нет настоящих
        name: "Vasya Pupkin",
        img:
          "https://avatars.mds.yandex.net/get-pdb/1040792/0489ff80-181a-4697-83b4-b0cf25001614/s1200",
        body: action.payload
      };
      return { ...state, postsArr: [...state.postsArr, newPost] };

    case SET_USER_PROFILE:
      return { ...state, profile: action.payload };
    case SET_USER_STATUS:
      return { ...state, userStatus: action.payload };
    case DELETE_POST:
      return {
        ...state,
        postsArr: state.postsArr.filter(post => post.id !== action.payload)
      };
    default:
      // console.log("there is no such action in profileReducer"); //Будет срабатывать потому что в dispatch в сторе мы прокинули все редьюсеры и в каждый редьюсер отправляется экшен. Меняется только та часть которая пришла остальные возвращаются по дефолту
      return state;
  }
};
export default profileReducer;

const ADD_POST = "ADD_POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_USER_STATUS = "SET_USER_STATUS";
const DELETE_POST = "DELETE_POST";

export const addPostActionCreator = postBody => {
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

//TC = ThunkCreator
export const setUserProfileTC = userId => {
  return dispatch => {
    profileAPI
      .getUserProfile(userId)
      .then(data => dispatch(setUserProfile(data)));
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
