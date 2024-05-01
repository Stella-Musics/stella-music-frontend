import styled from "styled-components";

export const SideBar = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.color.background};
  justify-content: center;
`;

export const SideBarMenuContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  margin: 16px;
  gap: 16px;

  ${({ theme }) => theme.media.small} {
    flex-direction: column;
    justify-content: flex-start;
  }
`;

export const SideBarMenuItem = styled.div<{ isSelected?: boolean }>`
  display: flex;
  flex-direction: column;
  width: 56px;
  height: 56px;
  justify-content: space-evenly;
  align-items: center;
  cursor: pointer;
  z-index: 1;
  border-radius: 16px;
  background-color: ${({ isSelected = false, theme }) =>
    isSelected ? theme.color.cardBackground : "transparent"};

  ${({ theme }) => theme.media.small} {
    width: 80px;
    height: 80px;
  }
`;

export const TemporaryArtistCircle = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.color.onBackgroundVariant};

  @media (max-width: ${({ theme }) => theme.size.small}) {
    width: 16px;
    height: 16px;
  }
`;

export const TabbarIconWrapper = styled.div`
  width: 33px;
  height: 32px;

  @media (max-width: ${({ theme }) => theme.size.small}) {
    width: 16px;
    height: 16px;
  }
`;
