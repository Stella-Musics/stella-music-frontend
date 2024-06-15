import { ScrollArea } from "@/shared/ui/scroll-area/scroll-area";
import styled from "styled-components";

export const ArtistPageContainer = styled(ScrollArea)`
  display: flex;
  flex-direction: column;
  gap: 40px;
  background-color: ${({ theme }) => theme.color.background};
  padding: 5%;
  flex-grow: 1;
`;

export const BaseMusicListWrapper = styled.div`
  margin-top: 10%;
`;

export const ArtistGenerationContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  height: fit-content;
`;
