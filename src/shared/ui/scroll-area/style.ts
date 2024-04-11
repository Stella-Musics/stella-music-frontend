import styled from "styled-components";

const BaseScrollArea = styled.div`
  scroll-behavior: smooth;
`;

export const HorizontalScrollArea = styled(BaseScrollArea)`
  overflow-x: auto;
  overflow-y: hidden;
`;

export const VerticalScrollArea = styled(BaseScrollArea)`
  overflow-x: hidden;
  overflow-y: auto;
`;
