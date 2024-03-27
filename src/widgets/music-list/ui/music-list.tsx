import { MusicSegmentedControlContainer } from "@/widgets/music-segmented-control-container";
import { MusicListContainer } from "./style";
import { BaseMusicList } from "@/widgets/base-music-list";

export const MusicList = () => {
  return (
    <MusicListContainer>
      <MusicSegmentedControlContainer />
      <BaseMusicList />
    </MusicListContainer>
  );
};
