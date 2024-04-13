import { Title2, Title3 } from "@/shared/ui/typo";
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
      <Title2>1</Title2>
      <RankChangesContainer>
        {rankType === "up" ? <UpTriangle /> : <DownTriangle />}
        <Title3
          color={
            rankType === "up" ? theme.color.point.red : theme.color.point.blue
          }
        >
          {value}
        </Title3>
      </RankChangesContainer>
    </RankTextContainer>
  );
};
