import { PayloadAction, createSelector, createSlice } from "@reduxjs/toolkit";
import { ChartSortType, MusicSortType, MusicTabType } from "./types";

interface MusicState {
  selectedMusicTab: MusicTabType;
  selectedMusicSortType: MusicSortType;
  selectedChartSortType: ChartSortType;
}

const initialState: MusicState = {
  selectedMusicTab: "일반",
  selectedMusicSortType: "업로드순",
  selectedChartSortType: "시간",
};

export const musicSlice = createSlice({
  name: "music",
  initialState,
  reducers: {
    musicTabDidSelect: (state, action: PayloadAction<MusicTabType>) => {
      state.selectedMusicTab = action.payload;
      state.selectedMusicSortType = "업로드순";
      state.selectedChartSortType = "시간";
    },
    musicSortTypeDidSelect: (state, action: PayloadAction<MusicSortType>) => {
      state.selectedMusicSortType = action.payload;
    },
    chartSortTypeDidSelect: (state, action: PayloadAction<ChartSortType>) => {
      state.selectedChartSortType = action.payload;
    },
  },
});

const selectedTabInputSelector = (state: RootState) =>
  state.music.selectedMusicTab;
const selectedMusicTypeInputSelector = (state: RootState) =>
  state.music.selectedMusicSortType;
const selectedChartTypeInputSelector = (state: RootState) =>
  state.music.selectedChartSortType;

export const selectedMusicTabSelector = createSelector(
  selectedTabInputSelector,
  (tab) => tab
);

export const selectedMusicTypeSelector = createSelector(
  selectedMusicTypeInputSelector,
  (type) => type
);

export const selectedChartTypeSelector = createSelector(
  selectedChartTypeInputSelector,
  (type) => type
);

export const {
  musicTabDidSelect,
  musicSortTypeDidSelect,
  chartSortTypeDidSelect,
} = musicSlice.actions;
