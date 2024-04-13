import { RankText, RankType } from "@/widgets/rank-text";
import { HotMusicCardContainer } from "./style";
import { useTheme } from "styled-components";
import { SubTitle1, Title3 } from "@/shared/ui/typo";

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
          width: "64px",
          height: "64px",
          borderRadius: "8px",
          backgroundColor: `${theme.color.cardBackground}`,
          minWidth: "64px",
        }}
      />
      <div>
        <Title3
          style={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: 1,
            WebkitBoxOrient: "vertical",
          }}
        >
          {title}
        </Title3>
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
