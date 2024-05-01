import styled from "styled-components";

export const MusicCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 16px 24px;
  cursor: pointer;

  @media only screen and (min-width: 650px) {
    &:hover {
      background-color: ${({ theme }) => theme.color.onBackground};
      border-radius: 8px;
    }
  }

  @media only screen and (max-width: 650px) {
    flex-direction: column;
    align-items: start;
    justify-content: start;
    gap: 16px;
  }
`;

export const LeadingContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

export const TrailingContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 32px;
`;

export const MusicInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

export const MusicTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const TemporaryMusicThumbnail = styled.div`
  width: 100px;
  aspect-ratio: 16 / 9; // 143 / 80
  background-color: ${({ theme }) => theme.color.onBackgroundVariant};
  border-radius: 8px;

  @media only screen and (max-width: 650px) {
    width: 100%;
  }
`;

export const PlayButtonWrapper = styled.div`
  width: 24px;
  height: 24px;
  cursor: pointer;

  @media only screen and (max-width: 650px) {
    width: 16px;
    height: 16px;
  }
`;
