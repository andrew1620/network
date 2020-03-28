import { profileAPI } from "../api/api";

const SET_OWNER_DATA = "owner/SET_OWNER_DATA";

const initialState = {
  isOwner: null,
  ownerData: {
    id: null,
    fullName: null,
    photos: { small: null, large: null }
  } as OwnerDataType
};

type InitialStateType = typeof initialState;

const ownerReducer = (state = initialState, action: any): InitialStateType => {
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

type OwnerDataType = {
  id: number | null;
  fullName: string | null;
  photos: { small: string | null; large: string | null };
};
type SetOwnerDataActionType = {
  type: typeof SET_OWNER_DATA;
  payload: OwnerDataType;
};

export const setOwnerData = (data: OwnerDataType): SetOwnerDataActionType => {
  return { type: SET_OWNER_DATA, payload: data };
};

export const requireOwnerData = () => async (dispatch: any, getState: any) => {
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
