import { PayloadAction, createSelector, createSlice } from "@reduxjs/toolkit";
import { SideBarTab } from "./types";

interface SideBarState {
  selectedTab?: SideBarTab;
}

const currentURL = window.location.href;
const lastPath = currentURL.substring(currentURL.lastIndexOf("/") + 1);
let currentTab: SideBarTab | undefined;
switch (lastPath) {
  case "":
    currentTab = "home";
    break;
  case "music":
    currentTab = "music";
    break;
  case "artist":
    currentTab = "artist";
    break;
  case "storage":
    currentTab = "storage";
    break;
}

const initialState: SideBarState = {
  selectedTab: currentTab,
};

export const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    tabDidSelect: (state, action: PayloadAction<SideBarTab | undefined>) => {
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
