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
  SideBarMenuWrapper,
  TabbarIconWrapper,
} from "./style";
import { Body1 } from "@/shared/ui/typo";
import { useAppDispatch, useAppSelector } from "@/shared/model";
import { tabDidSelect, selectedSidebarTabSelector } from "@/entities/sidebar";
import { useNavigate } from "react-router-dom";

export const SideBarLayout = () => {
  const dispatch = useAppDispatch();
  const selectedTab = useAppSelector(selectedSidebarTabSelector);
  const navigate = useNavigate();

  return (
    <SideBar>
      <SideBarMenuContainer>
        <SideBarMenuWrapper
          isSelected={selectedTab === "home"}
          onClick={() => {
            dispatch(tabDidSelect("home"));
            navigate("/");
          }}
        >
          <TabbarIconWrapper>
            {selectedTab === "home" ? <HomeFillIcon /> : <HomeIcon />}
          </TabbarIconWrapper>
          <Body1>홈</Body1>
        </SideBarMenuWrapper>
        <SideBarMenuWrapper
          isSelected={selectedTab === "music"}
          onClick={() => {
            dispatch(tabDidSelect("music"));
            navigate("/music");
          }}
        >
          <TabbarIconWrapper>
            {selectedTab === "music" ? <MusicFillIcon /> : <MusicIcon />}
          </TabbarIconWrapper>
          <Body1>음악</Body1>
        </SideBarMenuWrapper>
        <SideBarMenuWrapper
          isSelected={selectedTab === "artist"}
          onClick={() => {
            dispatch(tabDidSelect("artist"));
            navigate("/artist");
          }}
        >
          <TemporaryArtistCircle />
          <Body1>아티스트</Body1>
        </SideBarMenuWrapper>
        <SideBarMenuWrapper
          isSelected={selectedTab === "storage"}
          onClick={() => {
            dispatch(tabDidSelect("storage"));
            navigate("/storage");
          }}
        >
          <TabbarIconWrapper>
            {selectedTab === "storage" ? <FolderFillIcon /> : <FolderIcon />}
          </TabbarIconWrapper>
          <Body1>보관함</Body1>
        </SideBarMenuWrapper>
      </SideBarMenuContainer>
    </SideBar>
  );
};
