import { useAppDispatch, useAppSelector } from "@/shared/model";
import { SegmentedControlContainer } from "./style";
import {
  allMusicTabType,
  selectedMusicTabSelector,
  selectedMusicTypeSelector,
  selectedChartTypeSelector,
  chartSortTypeDidSelect,
  musicSortTypeDidSelect,
  musicTabDidSelect,
  allMusicSortType,
  allChartSortType,
  MusicSortType,
} from "@/entities/music";
import { SegmentedControl } from "@/shared/ui/segmented-control";
import { Dropdown } from "@/shared/ui/dropdown";
import { useMediaQuery } from "react-responsive";

export const MusicSegmentedControlContainer = () => {
  const dispatch = useAppDispatch();
  const selectedMusicTab = useAppSelector(selectedMusicTabSelector);
  const selectedMusicType = useAppSelector(selectedMusicTypeSelector);
  const selectedChartType = useAppSelector(selectedChartTypeSelector);
  const isRequiredResponsive = useMediaQuery({ maxWidth: "650px" });

  return (
    <SegmentedControlContainer>
      <SegmentedControl
        items={allMusicTabType}
        selectedItem={selectedMusicTab}
        didSelect={(item) => {
          dispatch(musicTabDidSelect(item));
        }}
      />
      {isRequiredResponsive ? (
        <Dropdown
          items={
            selectedMusicTab === "일반" ? allMusicSortType : allChartSortType
          }
          selectedItem={
            selectedMusicTab === "일반" ? selectedMusicType : selectedChartType
          }
          didSelect={(item) => {
            const isMusicType = (x: any): x is MusicSortType =>
              allMusicSortType.includes(x);
            if (isMusicType(item)) {
              dispatch(musicSortTypeDidSelect(item));
            } else {
              dispatch(chartSortTypeDidSelect(item));
            }
          }}
        />
      ) : (
        <SegmentedControl
          items={
            selectedMusicTab === "일반" ? allMusicSortType : allChartSortType
          }
          selectedItem={
            selectedMusicTab === "일반" ? selectedMusicType : selectedChartType
          }
          didSelect={(item) => {
            const isMusicType = (x: any): x is MusicSortType =>
              allMusicSortType.includes(x);
            if (isMusicType(item)) {
              dispatch(musicSortTypeDidSelect(item));
            } else {
              dispatch(chartSortTypeDidSelect(item));
            }
          }}
        />
      )}
    </SegmentedControlContainer>
  );
};
