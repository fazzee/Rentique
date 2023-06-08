import {combineReducers} from "@reduxjs/toolkit";
import {SystemReducer} from "./system/systemSlice";
// import {UserAuthReducer} from "./userAuth/userAuthSlice";

export const rootReducer = combineReducers({
  system: SystemReducer,
  // userAuth: UserAuthReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
