import { Headline3, SubTitle1 } from "@/shared/ui/typo";
import {
  HorizontalMusicListContainer,
  MusicScrollArea,
  MusicListHeaderContainer,
  MusicListSectionContainer,
} from "./style";
import { useTheme } from "styled-components";
import { MusicHorizontalCard } from "@/entities/music";

export interface Props {
  title: string;
  onMoreClick: () => void;
}

export const HorizontalMusicList = ({ title, onMoreClick }: Props) => {
  const theme = useTheme();

  return (
    <MusicListSectionContainer>
      <MusicListHeaderContainer>
        <Headline3>{title}</Headline3>
        <SubTitle1
          color={theme.color.onBackgroundVariant}
          onClick={onMoreClick}
          style={{
            cursor: "pointer",
          }}
        >
          더보기
        </SubTitle1>
      </MusicListHeaderContainer>
      <HorizontalMusicListContainer direction="horizontal">
        <MusicScrollArea>
          <MusicHorizontalCard />
          <MusicHorizontalCard />
          <MusicHorizontalCard />
          <MusicHorizontalCard />
          <MusicHorizontalCard />
          <MusicHorizontalCard />
          <MusicHorizontalCard />
          <MusicHorizontalCard />
          <MusicHorizontalCard />
          <MusicHorizontalCard />
        </MusicScrollArea>
      </HorizontalMusicListContainer>
    </MusicListSectionContainer>
  );
};
