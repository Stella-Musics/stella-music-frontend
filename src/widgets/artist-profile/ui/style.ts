import styled from "styled-components";

export const ArtistProfileContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 40px;
`;

export const ArtistProfileImageWrapper = styled.div`
  width: 15%;
  height: fit-content;
  aspect-ratio: 1 / 1;
  background-color: gray;
  border-radius: 50%;
  overflow: hidden;
`;

export const ArtistProfileInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: first baseline;
  gap: 24px;
`;

export const LinkIconContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
`;

export const LinkIconWrapper = styled.a`
  width: 36px;
  height: 36px;
`;
