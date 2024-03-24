import { Title2, Title3 } from "@/shared/ui/typo";
import {
  DefaultWrapper,
  MusicCardContainer,
  MusicTitleContainer,
  TemporaryMusicThumbnail,
  TitleWrapper,
} from "./style";
import { theme } from "@/shared/lib/theme/theme";

export const MusicCard = () => {
  return (
    <MusicCardContainer>
      <TitleWrapper>
        <TemporaryMusicThumbnail />
        <MusicTitleContainer>
          <Title2>제목</Title2>
          <Title3 color={theme.color.onBackgroundVariant}>
            아티스트 이름 | 3:14
          </Title3>
        </MusicTitleContainer>
      </TitleWrapper>
      <DefaultWrapper>
        <Title2>2024.03.16.</Title2>
      </DefaultWrapper>
      <DefaultWrapper>
        <Title2>1,000,000 회</Title2>
      </DefaultWrapper>
    </MusicCardContainer>
  );
};
