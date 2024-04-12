import { ScrollArea } from "@/shared/ui/scroll-area/scroll-area";
import styled from "styled-components";

export const HomePageContainer = styled(ScrollArea)`
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 100%;
  background-color: ${({ theme }) => theme.color.background};
`;
