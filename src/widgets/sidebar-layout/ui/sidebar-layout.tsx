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
} from "./style";
import { Title3 } from "@/shared/ui/typo";
import { SideBarMenuItem } from "./sidebar-menu";
import { useAppDispatch, useAppSelector } from "@/shared/model";
import { tabDidSelect, selectedSidebarTabSelector } from "@/entities/sidebar";

export const SideBarLayout = () => {
  const dispatch = useAppDispatch();
  const selectedTab = useAppSelector(selectedSidebarTabSelector);

  return (
    <SideBar>
      <SideBarMenuContainer>
        <SideBarMenuItem
          isSelected={selectedTab === "home"}
          onClick={() => {
            dispatch(tabDidSelect("home"));
          }}
          selected={
            <SideBarMenuWrapper isSelected={selectedTab === "home"}>
              <HomeFillIcon />
              <Title3>홈</Title3>
            </SideBarMenuWrapper>
          }
          unselected={
            <SideBarMenuWrapper>
              <HomeIcon />
              <Title3>홈</Title3>
            </SideBarMenuWrapper>
          }
        />
        <SideBarMenuItem
          isSelected={selectedTab === "music"}
          onClick={() => {
            dispatch(tabDidSelect("music"));
          }}
          selected={
            <SideBarMenuWrapper isSelected={selectedTab === "music"}>
              <MusicFillIcon />
              <Title3>음악</Title3>
            </SideBarMenuWrapper>
          }
          unselected={
            <SideBarMenuWrapper>
              <MusicIcon />
              <Title3>음악</Title3>
            </SideBarMenuWrapper>
          }
        />
        <SideBarMenuItem
          isSelected={selectedTab === "artist"}
          onClick={() => {
            dispatch(tabDidSelect("artist"));
          }}
          selected={
            <SideBarMenuWrapper isSelected={selectedTab === "artist"}>
              <TemporaryArtistCircle />
              <Title3>아티스트</Title3>
            </SideBarMenuWrapper>
          }
          unselected={
            <SideBarMenuWrapper>
              <TemporaryArtistCircle />
              <Title3>아티스트</Title3>
            </SideBarMenuWrapper>
          }
        />
        <SideBarMenuItem
          isSelected={selectedTab === "storage"}
          onClick={() => {
            dispatch(tabDidSelect("storage"));
          }}
          selected={
            <SideBarMenuWrapper isSelected={selectedTab === "storage"}>
              <FolderFillIcon />
              <Title3>보관함</Title3>
            </SideBarMenuWrapper>
          }
          unselected={
            <SideBarMenuWrapper>
              <FolderIcon />
              <Title3>보관함</Title3>
            </SideBarMenuWrapper>
          }
        />
      </SideBarMenuContainer>
    </SideBar>
  );
};
