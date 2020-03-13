import { profileAPI } from "../api/api";

const initialState = {
  isOwner: null,
  ownerData: { id: null, fullName: null, photos: {} }
};

const ownerReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_OWNER_DATA:
      return { ...state, ownerData: { ...state.ownerData, ...action.payload } };
    default:
      return state;
  }
};

export default ownerReducer;

const SET_OWNER_DATA = "owner/SET_OWNER_DATA";

export const setOwnerData = data => {
  return { type: SET_OWNER_DATA, payload: data };
};

export const requireOwnerData = () => async (dispatch, getState) => {
  try {
    const userId = getState().auth.userId;
    const data = await profileAPI.getUserProfile(userId);
    const ownerData = {
      id: data.userId,
      fullName: data.fullName,
      photos: { ...data.photos }
    };
    dispatch(setOwnerData(ownerData));
  } catch (err) {
    console.warn("Error in requireOwnerData \n", err);
  }
};
