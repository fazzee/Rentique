import {createSlice} from "@reduxjs/toolkit";
import {UserAuthInitialState, UserAuthState} from "./userAuthState";
import {REHYDRATE} from "redux-persist/es/constants";
import {RehydrateAppAction} from "../../../types";
import {newState} from "../../../common/utils/newState";

function rehydrate(state: UserAuthState, rehydrateParams: RehydrateAppAction) {
  return newState(rehydrateParams.payload?.system || state, {isAuthenticated: rehydrateParams.payload != null});
}

function userAuthHandler(state: UserAuthState) {
  return newState(state, {isAuthenticated: true});
}

export const {reducer: UserAuthReducer} = createSlice({
  name: "userAuth",
  initialState: UserAuthInitialState,
  reducers: {
    setUserAuth: userAuthHandler,
  },
  extraReducers: (builder) => {
    builder.addCase(REHYDRATE, rehydrate);
  },
});
