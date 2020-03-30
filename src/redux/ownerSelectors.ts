import { AppStateType } from "./store";

export const getOwner = (state: AppStateType) => state.owner;
export const getOwnerData = (state: AppStateType) => state.owner.ownerData;
