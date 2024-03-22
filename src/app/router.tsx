import { Route, Routes, useLocation } from "react-router-dom";
import { LocationState } from "@/shared/model";
import { BaseLayout } from "./layout";
import { HomePage } from "@/pages/home/ui/Page";
import { MusicPage } from "@/pages/music";
import { ArtistPage } from "@/pages/artist";
import { StoragePage } from "@/pages/storage";

export const Router = () => {
  const location = useLocation();
  const background = (location.state as LocationState)?.background;

  return (
    <>
      <Routes location={background || location}>
        <Route element={<BaseLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/music" element={<MusicPage />} />
          <Route path="/artist" element={<ArtistPage />} />
          <Route path="/storage" element={<StoragePage />} />
        </Route>
      </Routes>
    </>
  );
};
