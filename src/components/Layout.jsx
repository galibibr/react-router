import React from "react";
import { Outlet } from "react-router-dom";
import { CustomLink } from "./CustomLink";

const Layout = () => {
   console.log('render layout');
  return (
    <div>
      <nav className="flex justify-center bg-black/80 gap-7 text-white p-5">
        <CustomLink to={"/"}>
          Home
        </CustomLink>
        <CustomLink to={"/about"}>
          About
        </CustomLink>
        <CustomLink to={"/blog"}>
          Blog
        </CustomLink>
      </nav>

      <main className="p-5">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
