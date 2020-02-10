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
  textAreaValue: "value",
  profile: { photos: { small: null, large: null } }
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_POST":
      const newPost = {
        id: Date.now(), //Временно, пока нет настоящих
        name: "Vasya Pupkin",
        img:
          "https://avatars.mds.yandex.net/get-pdb/1040792/0489ff80-181a-4697-83b4-b0cf25001614/s1200",
        body: state.textAreaValue
      };
      return { ...state, postsArr: [...state.postsArr, newPost] };
    case "UPDATE-TEXTAREA-VALUE":
      return { ...state, textAreaValue: action.payload };
    case SET_USER_PROFILE:
      return { ...state, profile: action.payload };
    default:
      // console.log("there is no such action in profileReducer"); //Будет срабатывать потому что в dispatch в сторе мы прокинули все редьюсеры и в каждый редьюсер отправляется экшен. Меняется только та часть которая пришла остальные возвращаются по дефолту
      return state;
  }
};
export default profileReducer;

const ADD_POST = "ADD_POST";
const UPDATE_TEXTAREA_VALUE = "UPDATE-TEXTAREA-VALUE";
const SET_USER_PROFILE = "SET_USER_PROFILE";

export const addPostActionCreator = () => {
  return { type: ADD_POST };
};
export const updateTextareaValueActionCreator = newValue => {
  return { type: UPDATE_TEXTAREA_VALUE, payload: newValue };
};
export const setUserProfile = profile => {
  return { type: SET_USER_PROFILE, payload: profile };
};

//TC = ThunkCreator
export const setUserProfileTC = userId => {
  return dispatch => {
    profileAPI
      .getUserProfile(userId)
      .then(data => dispatch(setUserProfile(data)));
  };
};
