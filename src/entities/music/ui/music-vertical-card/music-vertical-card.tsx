import { Title3, SubTitle1, Body1 } from "@/shared/ui/typo";
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
          <Title3>제목</Title3>
          <SubTitle1 color={theme.color.onBackgroundVariant}>
            아티스트 이름 | 3:14
          </SubTitle1>
        </MusicTitleContainer>
      </TitleWrapper>
      <DefaultWrapper>
        <Body1>2024.03.16.</Body1>
      </DefaultWrapper>
      <DefaultWrapper>
        <Body1>1,000,000 회</Body1>
      </DefaultWrapper>
    </MusicCardContainer>
  );
};
