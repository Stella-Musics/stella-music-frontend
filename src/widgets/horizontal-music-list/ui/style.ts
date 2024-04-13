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
