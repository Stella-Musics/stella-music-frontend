import styled from "styled-components";

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const NavBarHeader = styled.header`
  width: 100%;
  height: 72px;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.color.onBackground};
  border-bottom-style: solid;
`;

export const SideBarContainer = styled.main`
  display: flex;
  flex-direction: column-reverse;
  height: 100%;
  overflow: hidden;

  ${({ theme }) => theme.media.small} {
    flex-direction: row;
  }
`;

export const SideBarAside = styled.div`
  width: 100%;
  height: ${({ theme }) => theme.size.tabbarHeight}px;
  border-top-width: 1px;
  border-top-color: ${({ theme }) => theme.color.onBackground};
  border-top-style: solid;

  ${({ theme }) => theme.media.small} {
    width: 112px;
    height: 100%;
    border-right-width: 1px;
    border-right-color: ${({ theme }) => theme.color.onBackground};
    border-right-style: solid;
  }
`;
