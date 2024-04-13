import { Headline3 } from "@/shared/ui/typo";
import { HotMusicListConainer, RealtimeHotMusicListContainer } from "./style";
import { HotMusicCard } from "./hot-music-card";

export const RealtimeHotMusicList = () => {
  return (
    <RealtimeHotMusicListContainer>
      <Headline3>실시간</Headline3>
      <HotMusicListConainer>
        <HotMusicCard
          rankType="up"
          rankNumber={10}
          title={"Milky Way"}
          artist={"스텔라이브"}
        />
        <HotMusicCard
          rankType="down"
          rankNumber={1}
          title={"Hit on Shot"}
          artist={"아카네 리제, 아이리 칸나, 아라하시 타비"}
        />
        <HotMusicCard
          rankType="up"
          rankNumber={2}
          title={"첫사랑"}
          artist={"아라하시 타비"}
        />
      </HotMusicListConainer>
    </RealtimeHotMusicListContainer>
  );
};
