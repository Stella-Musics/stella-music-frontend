import { Headline2, Headline3 } from "@/shared/ui/typo";
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
        <Headline2>Milky Way</Headline2>
        <Headline3 color={theme.color.onBackgroundVariant}>
          스텔라이브
        </Headline3>
      </MusicTitleContainer>
    </MusicHorizontalCardContainer>
  );
};
