import React from "react";
import {
  LayoutContainer,
  NavBarHeader,
  SideBarAside,
  SideBarContainer,
} from "./style";
import { Outlet } from "react-router-dom";

export interface Props {
  navbar?: React.ReactNode;
  sidebar?: React.ReactNode;
}

export const Layout = ({ navbar, sidebar }: Props) => {
  return (
    <LayoutContainer>
      {navbar && <NavBarHeader>{navbar}</NavBarHeader>}
      {sidebar ? (
        <SideBarContainer>
          <SideBarAside>{sidebar}</SideBarAside>
          <Outlet />
        </SideBarContainer>
      ) : (
        <Outlet />
      )}
    </LayoutContainer>
  );
};
