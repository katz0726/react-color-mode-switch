import React, { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { Blog } from "../components/pages/Blog";
import { NotFound } from "../components/pages/error/NotFound";
import { Home } from "../components/pages/Home";
import { HeaderLayout } from "../components/template/HeaderLayout";

export const Router: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HeaderLayout />}>
        <Route index element={<Home />} />
        <Route path="blog" element={<Blog />} />
      </Route>
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
};
