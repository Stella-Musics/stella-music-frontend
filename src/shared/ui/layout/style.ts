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
  flex-direction: row;
  height: 100%;
`;

export const SideBarAside = styled.aside`
  width: 112px;
  height: 100%;
  border-right-width: 1px;
  border-right-color: ${({ theme }) => theme.color.onBackground};
  border-right-style: solid;
`;
