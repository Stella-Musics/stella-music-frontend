import styled from "styled-components";

export const TopBannerContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
  flex-grow: 1;
  margin: 60px;
`;

export const Banner = styled.div`
  width: 100%;
  aspect-ratio: 3 / 1;
  height: fit-content;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.color.cardBackground};
`;
