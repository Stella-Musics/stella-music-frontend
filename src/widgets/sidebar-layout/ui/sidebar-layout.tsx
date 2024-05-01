import {
  FolderFillIcon,
  FolderIcon,
  HomeFillIcon,
  HomeIcon,
  MusicFillIcon,
  MusicIcon,
} from "@/shared/ui/icons";
import {
  TemporaryArtistCircle,
  SideBar,
  SideBarMenuContainer,
  SideBarMenuItem,
  TabbarIconWrapper,
} from "./style";
import { Body1 } from "@/shared/ui/typo";
import { useAppDispatch, useAppSelector } from "@/shared/model";
import { tabDidSelect, selectedSidebarTabSelector } from "@/entities/sidebar";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { useTheme } from "styled-components";

export const SideBarLayout = () => {
  const dispatch = useAppDispatch();
  const selectedTab = useAppSelector(selectedSidebarTabSelector);
  const navigate = useNavigate();
  const theme = useTheme();
  const isRequiredTabbar = useMediaQuery({ maxWidth: theme.size.small });

  return (
    <SideBar>
      <SideBarMenuContainer>
        <SideBarMenuItem
          isSelected={selectedTab === "home"}
          onClick={() => {
            dispatch(tabDidSelect("home"));
            navigate("/");
          }}
        >
          <TabbarIconWrapper>
            {selectedTab === "home" ? <HomeFillIcon /> : <HomeIcon />}
          </TabbarIconWrapper>
          {!isRequiredTabbar && <Body1>홈</Body1>}
        </SideBarMenuItem>
        <SideBarMenuItem
          isSelected={selectedTab === "music"}
          onClick={() => {
            dispatch(tabDidSelect("music"));
            navigate("/music");
          }}
        >
          <TabbarIconWrapper>
            {selectedTab === "music" ? <MusicFillIcon /> : <MusicIcon />}
          </TabbarIconWrapper>
          {!isRequiredTabbar && <Body1>음악</Body1>}
        </SideBarMenuItem>
        <SideBarMenuItem
          isSelected={selectedTab === "artist"}
          onClick={() => {
            dispatch(tabDidSelect("artist"));
            navigate("/artist");
          }}
        >
          <TemporaryArtistCircle />
          {!isRequiredTabbar && <Body1>아티스트</Body1>}
        </SideBarMenuItem>
        <SideBarMenuItem
          isSelected={selectedTab === "storage"}
          onClick={() => {
            dispatch(tabDidSelect("storage"));
            navigate("/storage");
          }}
        >
          <TabbarIconWrapper>
            {selectedTab === "storage" ? <FolderFillIcon /> : <FolderIcon />}
          </TabbarIconWrapper>
          {!isRequiredTabbar && <Body1>보관함</Body1>}
        </SideBarMenuItem>
      </SideBarMenuContainer>
    </SideBar>
  );
};
