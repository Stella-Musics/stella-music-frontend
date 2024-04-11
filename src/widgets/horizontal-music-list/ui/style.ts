import { ScrollArea } from "@/shared/ui/scroll-area/scroll-area";
import styled from "styled-components";

export const MusicListSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const MusicListHeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0 60px;
  justify-content: space-between;
  align-items: baseline;
`;

export const HorizontalMusicListContainer = styled(ScrollArea)`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: scroll;
  flex-grow: 1;
  scrollbar-width: none;
  -ms-overflow-style: none;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const MusicScrollArea = styled.div`
  display: flex;
  gap: 16px;
  padding: 0 60px;
`;

export const MusicCell = styled.div`
  width: 240px;
  height: 240px;
  border-radius: 24px;
  background-color: ${({ theme }) => theme.color.cardBackground};
`;
