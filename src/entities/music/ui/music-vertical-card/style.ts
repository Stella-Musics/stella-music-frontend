import styled from "styled-components";

export const MusicCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px 24px;
  border-top-width: 1px;
  border-top-color: ${({ theme }) => theme.color.onBackgroundVariant};
  border-top-style: solid;
  background-color: ${({ theme }) => theme.color.onBackground};
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 24px;
  width: 60%;
`;

export const MusicTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const DefaultWrapper = styled.div`
  width: 20%;
  text-align: center;
`;

export const TemporaryMusicThumbnail = styled.div`
  width: 100px;
  aspect-ratio: 1.78; // 143 / 80
  background-color: ${({ theme }) => theme.color.onBackgroundVariant};
  border-radius: 8px;
`;
