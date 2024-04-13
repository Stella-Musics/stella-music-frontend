import { SubTitle1, Title3 } from "@/shared/ui/typo";
import {
  MusicHorizontalCardContainer,
  MusicTitleContainer,
  ThumbnailImageCard,
} from "./style";
import { useTheme } from "styled-components";

export const MusicHorizontalCard = () => {
  const theme = useTheme();

  return (
    <MusicHorizontalCardContainer>
      <ThumbnailImageCard src="https://avatars.githubusercontent.com/u/74440939?v=4" />
      <MusicTitleContainer>
        <Title3>Milky Way</Title3>
        <SubTitle1 color={theme.color.onBackgroundVariant}>
          스텔라이브
        </SubTitle1>
      </MusicTitleContainer>
    </MusicHorizontalCardContainer>
  );
};
