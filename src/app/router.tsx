import { Route, Routes, useLocation } from "react-router-dom";
import { LocationState } from "@/shared/model";
import { BaseLayout } from "./layout";

export const Router = () => {
  const location = useLocation();
  const background = (location.state as LocationState)?.background;

  return (
    <>
      <Routes location={background || location}>
        <Route element={<BaseLayout />}>
          <Route path="/" element={<div></div>} />
        </Route>
      </Routes>
    </>
  );
};
