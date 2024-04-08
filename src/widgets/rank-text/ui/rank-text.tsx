import { Headline2, Title1 } from "@/shared/ui/typo";
import {
  DownTriangle,
  RankChangesContainer,
  RankTextContainer,
  UpTriangle,
} from "./style";
import { useTheme } from "styled-components";
import { RankType } from "./types";

export interface Props {
  rankType: RankType;
  value: string;
}

export const RankText = ({ rankType, value }: Props) => {
  const theme = useTheme();

  return (
    <RankTextContainer>
      <Headline2>1</Headline2>
      <RankChangesContainer>
        {rankType === "up" ? <UpTriangle /> : <DownTriangle />}
        <Title1
          color={
            rankType === "up" ? theme.color.point.red : theme.color.point.blue
          }
        >
          {value}
        </Title1>
      </RankChangesContainer>
    </RankTextContainer>
  );
};
