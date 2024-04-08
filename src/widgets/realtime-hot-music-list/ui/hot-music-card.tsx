import { RankText, RankType } from "@/widgets/rank-text";
import { HotMusicCardContainer } from "./style";
import { useTheme } from "styled-components";
import { SubTitle1, Title1 } from "@/shared/ui/typo";

export interface Props {
  rankType: RankType;
  rankNumber: number;
  title: string;
  artist: string;
}

export const HotMusicCard = ({
  rankType,
  rankNumber,
  title,
  artist,
}: Props) => {
  const theme = useTheme();

  return (
    <HotMusicCardContainer>
      <RankText rankType={rankType} value={`${rankNumber}`} />
      <div
        style={{
          width: "84px",
          height: "84px",
          borderRadius: "16px",
          backgroundColor: `${theme.color.cardBackground}`,
          minWidth: "84px",
        }}
      />
      <div>
        <Title1
          style={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: 1,
            WebkitBoxOrient: "vertical",
          }}
        >
          {title}
        </Title1>
        <SubTitle1
          color={theme.color.onBackgroundVariant}
          style={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: 1,
            WebkitBoxOrient: "vertical",
          }}
        >
          {artist}
        </SubTitle1>
      </div>
    </HotMusicCardContainer>
  );
};
