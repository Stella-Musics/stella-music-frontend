import { ScrollArea } from "@/shared/ui/scroll-area/scroll-area";
import styled from "styled-components";

export const MusicListContainer = styled(ScrollArea)`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  background-color: ${({ theme }) => theme.color.background};
  overflow: scroll;
  padding: 5%;
  gap: 40px;
`;
