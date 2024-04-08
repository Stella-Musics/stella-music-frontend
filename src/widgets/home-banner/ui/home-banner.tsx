import { RealtimeHotMusicList } from "@/widgets/realtime-hot-music-list";
import { Banner, TopBannerContainer } from "./style";
import { useMedia } from "@/shared/lib/hooks/media";

export const HomeBanner = () => {
  const isExtraLargeMedia = useMedia({ type: "extraLarge" });

  return (
    <TopBannerContainer>
      <Banner />
      {isExtraLargeMedia && <RealtimeHotMusicList />}
    </TopBannerContainer>
  );
};
