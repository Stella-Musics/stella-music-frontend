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
          {selectedTab === "home" ? <HomeFillIcon /> : <HomeIcon />}
          <Title3>홈</Title3>
        </SideBarMenuWrapper>
        <SideBarMenuWrapper
          isSelected={selectedTab === "music"}
          onClick={() => {
            dispatch(tabDidSelect("music"));
            navigate("/music");
          }}
        >
          {selectedTab === "music" ? <MusicFillIcon /> : <MusicIcon />}
          <Title3>음악</Title3>
        </SideBarMenuWrapper>
        <SideBarMenuWrapper
          isSelected={selectedTab === "artist"}
          onClick={() => {
            dispatch(tabDidSelect("artist"));
            navigate("/artist");
          }}
        >
          <TemporaryArtistCircle />
          <Title3>아티스트</Title3>
        </SideBarMenuWrapper>
        <SideBarMenuWrapper
          isSelected={selectedTab === "storage"}
          onClick={() => {
            dispatch(tabDidSelect("storage"));
            navigate("/storage");
          }}
        >
          {selectedTab === "storage" ? <FolderFillIcon /> : <FolderIcon />}
          <Title3>보관함</Title3>
        </SideBarMenuWrapper>
      </SideBarMenuContainer>
    </SideBar>
  );
};
