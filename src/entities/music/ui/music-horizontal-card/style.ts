import { styled } from "styled-components";

export const ThumbnailImageCard = styled.img`
  width: 160px;
  height: 160px;
  border-radius: 24px;
  background-color: ${({ theme }) => theme.color.cardBackground};
`;

export const MusicHorizontalCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const MusicTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
