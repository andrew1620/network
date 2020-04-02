import { ThunkAction } from "redux-thunk";

import { profileAPI } from "../api/api";
import { AppStateType } from "./store";

const SET_OWNER_DATA = "owner/SET_OWNER_DATA";

export type OwnerDataType = {
  id: number | null;
  fullName: string | null;
  photos: { small: string | null; large: string | null };
};

const initialState = {
  isOwner: null,
  ownerData: {
    id: null,
    fullName: null,
    photos: { small: null, large: null }
  } as OwnerDataType
};

export type InitialStateType = typeof initialState;

type ActionTypes = SetOwnerDataActionType;

const ownerReducer = (
  state = initialState,
  action: ActionTypes
): InitialStateType => {
  switch (action.type) {
    case SET_OWNER_DATA:
      return {
        ...state,
        ownerData: { ...state.ownerData, ...action.payload }
      };
    default:
      return state;
  }
};

export default ownerReducer;

type SetOwnerDataActionType = {
  type: typeof SET_OWNER_DATA;
  payload: OwnerDataType;
};

export const setOwnerData = (data: OwnerDataType): SetOwnerDataActionType => {
  return { type: SET_OWNER_DATA, payload: data };
};

// -----THUNKS-----

type ThunkType = ThunkAction<void, AppStateType, unknown, ActionTypes>;

export const requireOwnerData = (): ThunkType => async (dispatch, getState) => {
  try {
    const userId = getState().auth.userId;
    const data = await profileAPI.getUserProfile(userId);
    const ownerData: OwnerDataType = {
      id: data.userId,
      fullName: data.fullName,
      photos: { ...data.photos }
    };
    dispatch(setOwnerData(ownerData));
  } catch (err) {
    console.warn("Error in requireOwnerData \n", err);
  }
};
