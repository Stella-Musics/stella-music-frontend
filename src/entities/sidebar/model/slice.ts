import { PayloadAction, createSelector, createSlice } from "@reduxjs/toolkit";
import { SideBarTab } from "./types";

interface SideBarState {
  selectedTab: SideBarTab;
}

const initialState: SideBarState = {
  selectedTab: "home",
};

export const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    tabDidSelect: (state, action: PayloadAction<SideBarTab>) => {
      state.selectedTab = action.payload;
    },
  },
});

const selectedTabSelector = (state: RootState) => state.sidebar.selectedTab;

export const selectedSidebarTabSelector = createSelector(
  selectedTabSelector,
  (tab) => tab
);

export const { tabDidSelect } = sidebarSlice.actions;
