import { Title3, Body1 } from "@/shared/ui/typo";
import {
  LeadingContainer,
  MusicCardContainer,
  MusicInfoContainer,
  MusicTitleContainer,
  PlayButtonWrapper,
  TemporaryMusicThumbnail,
  TrailingContainer,
} from "./style";
import { theme } from "@/shared/lib/theme/theme";
import { PlayFillIcon } from "@/shared/ui/icons/play-fill";
import { useMediaQuery } from "react-responsive";

export const MusicWideCard = () => {
  const isRequiredResponsive = useMediaQuery({ maxWidth: "650px" });
  return isRequiredResponsive ? (
    <SmallResponsiveMusicWideCard />
  ) : (
    <DefaultMusicWideCard />
  );
};

const DefaultMusicWideCard = () => {
  return (
    <MusicCardContainer>
      <LeadingContainer>
        <TemporaryMusicThumbnail />
        <MusicTitleContainer>
          <Title3>제목</Title3>
          <Body1 color={theme.color.onBackgroundVariant}>
            아티스트 이름 | 3:14
          </Body1>
        </MusicTitleContainer>
      </LeadingContainer>
      <TrailingContainer>
        <Body1>1,000,000 회</Body1>
        <PlayButtonWrapper>
          <PlayFillIcon />
        </PlayButtonWrapper>
      </TrailingContainer>
    </MusicCardContainer>
  );
};

const SmallResponsiveMusicWideCard = () => {
  return (
    <MusicCardContainer>
      <TemporaryMusicThumbnail />
      <MusicInfoContainer>
        <div>
          <Title3>제목</Title3>
          <Body1 color={theme.color.onBackgroundVariant}>
            아티스트 이름 | 3:14
          </Body1>
        </div>
        <PlayButtonWrapper>
          <PlayFillIcon />
        </PlayButtonWrapper>
      </MusicInfoContainer>
    </MusicCardContainer>
  );
};
