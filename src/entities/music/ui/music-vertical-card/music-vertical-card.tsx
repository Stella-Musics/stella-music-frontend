import { Title2, SubTitle1, Title3 } from "@/shared/ui/typo";
import {
  DefaultWrapper,
  MusicCardContainer,
  MusicTitleContainer,
  TemporaryMusicThumbnail,
  TitleWrapper,
} from "./style";
import { theme } from "@/shared/lib/theme/theme";

export const MusicVerticalCard = () => {
  return (
    <MusicCardContainer>
      <TitleWrapper>
        <TemporaryMusicThumbnail />
        <MusicTitleContainer>
          <Title2>제목</Title2>
          <SubTitle1 color={theme.color.onBackgroundVariant}>
            아티스트 이름 | 3:14
          </SubTitle1>
        </MusicTitleContainer>
      </TitleWrapper>
      <DefaultWrapper>
        <Title3>2024.03.16.</Title3>
      </DefaultWrapper>
      <DefaultWrapper>
        <Title3>1,000,000 회</Title3>
      </DefaultWrapper>
    </MusicCardContainer>
  );
};
