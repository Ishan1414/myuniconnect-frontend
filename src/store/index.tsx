import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../user/reducer.ts"


export interface KanbasState {
  userReducer: {
    user: any;
  };
}
const store = configureStore({
  reducer: {
    userReducer,
  }
});
export default store;