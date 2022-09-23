import React, { FC } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../organisms/layoutes/Header";

export const HeaderLayout: FC = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
