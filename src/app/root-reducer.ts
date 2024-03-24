import { musicSlice } from "@/entities/music";
import { sidebarSlice } from "@/entities/sidebar";
import { combineReducers } from "@reduxjs/toolkit";

export const rootReducer = combineReducers({
  [sidebarSlice.name]: sidebarSlice.reducer,
  [musicSlice.name]: musicSlice.reducer,
});
