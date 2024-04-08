import { ScrollArea } from "@/shared/ui/scroll-area/scroll-area";
import styled from "styled-components";

export const HomePageContainer = styled(ScrollArea)`
  width: 100%;
  overflow-x: hidden;
  background-color: ${({ theme }) => theme.color.background};
`;
