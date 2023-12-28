import React from "react";
import { Link, Outlet, NavLink } from "react-router-dom";

const Layout = () => {
  const setActive = ({ isActive }) => ({ color: isActive ? "skyblue" : "white" });
  return (
    <div>
      <nav className="flex justify-center bg-black/80 gap-7 text-white p-5">
        <NavLink style={setActive} to={"/"}>
          Home
        </NavLink>
        <NavLink style={setActive} to={"/about"}>
          About
        </NavLink>
        <NavLink style={setActive} to={"/blog"}>
          Blog
        </NavLink>
      </nav>

      <main className="p-5">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
