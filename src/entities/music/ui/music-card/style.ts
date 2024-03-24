import styled from "styled-components";

export const MusicCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 20px 40px;
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

export const MusicTitleContainer = styled.div``;

export const DefaultWrapper = styled.div`
  width: 20%;
  text-align: center;
`;

export const TemporaryMusicThumbnail = styled.div`
  width: 143px;
  height: 80px;
  background-color: ${({ theme }) => theme.color.onBackgroundVariant};
  border-radius: 16px;
`;
