import { ScrollArea } from "@/shared/ui/scroll-area/scroll-area";
import styled from "styled-components";

export const MusicListContainer = styled(ScrollArea)`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${({ theme }) => theme.color.background};
  overflow: scroll;
  padding: 60px 60px 60px 60px;
  gap: 40px;
`;
