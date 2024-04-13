import { Title2 } from "@/shared/ui/typo";
import {
  BaseMusicListContainer,
  BaseMusicListHeader,
  DefaultLabelWrapper,
  TitleLabelWrapper,
} from "./style";
import { MusicVerticalCard } from "@/entities/music";

export const BaseMusicList = () => {
  return (
    <BaseMusicListContainer>
      <BaseMusicListHeader>
        <TitleLabelWrapper>
          <Title2>제목</Title2>
        </TitleLabelWrapper>
        <DefaultLabelWrapper>
          <Title2>게시일</Title2>
        </DefaultLabelWrapper>
        <DefaultLabelWrapper>
          <Title2>조회수</Title2>
        </DefaultLabelWrapper>
      </BaseMusicListHeader>
      <MusicVerticalCard />
      <MusicVerticalCard />
      <MusicVerticalCard />
      <MusicVerticalCard />
      <MusicVerticalCard />
      <MusicVerticalCard />
      <MusicVerticalCard />
      <MusicVerticalCard />
      <MusicVerticalCard />
      <MusicVerticalCard />
    </BaseMusicListContainer>
  );
};
