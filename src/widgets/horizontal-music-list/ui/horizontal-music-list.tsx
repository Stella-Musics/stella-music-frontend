import { Headline1, Title1 } from "@/shared/ui/typo";
import {
  MusicCell,
  HorizontalMusicListContainer,
  MusicScrollArea,
  MusicListHeaderContainer,
  MusicListSectionContainer,
} from "./style";
import { useTheme } from "styled-components";

export interface Props {
  title: string;
  onMoreClick: () => void;
}

export const HorizontalMusicList = ({ title, onMoreClick }: Props) => {
  const theme = useTheme();

  return (
    <MusicListSectionContainer>
      <MusicListHeaderContainer>
        <Headline1>{title}</Headline1>
        <Title1
          color={theme.color.onBackgroundVariant}
          onClick={onMoreClick}
          style={{
            cursor: "pointer",
          }}
        >
          더보기
        </Title1>
      </MusicListHeaderContainer>
      <HorizontalMusicListContainer direction="horizontal">
        <MusicScrollArea>
          <MusicCell />
          <MusicCell />
          <MusicCell />
          <MusicCell />
          <MusicCell />
          <MusicCell />
          <MusicCell />
          <MusicCell />
          <MusicCell />
          <MusicCell />
          <MusicCell />
          <MusicCell />
          <MusicCell />
          <MusicCell />
          <MusicCell />
          <MusicCell />
        </MusicScrollArea>
      </HorizontalMusicListContainer>
    </MusicListSectionContainer>
  );
};
