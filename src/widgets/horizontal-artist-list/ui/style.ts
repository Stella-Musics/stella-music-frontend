import { ScrollArea } from "@/shared/ui/scroll-area/scroll-area";
import styled from "styled-components";

export const HorizontalArtistListContainer = styled(ScrollArea)`
  display: flex;
  flex-direction: row;
  gap: 32px;

  -ms-overflow-style: none;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const ArtistCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  width: fit-content;
`;

export const ArtistProfileImageWrapper = styled.div`
  width: 128px;
  height: 128px;
  border-radius: 16px;
  overflow: hidden;
`;
