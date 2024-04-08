import { HomeBanner } from "@/widgets/home-banner";
import { HorizontalMusicList } from "@/widgets/horizontal-music-list";
import { HomePageContainer } from "./style";

export const HomePage = () => {
  return (
    <HomePageContainer>
      <HomeBanner></HomeBanner>
      <HorizontalMusicList
        title="최신"
        onMoreClick={() => {}}
      ></HorizontalMusicList>
    </HomePageContainer>
  );
};
