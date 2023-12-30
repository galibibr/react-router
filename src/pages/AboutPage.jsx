import React from "react";
import { Link, Outlet } from "react-router-dom";

const AboutPage = () => {
  return (
    <div>
      <h1 className="font-bold text-center">AboutPage</h1>
      <ul className="font-mono pl-5 list-disc">
        <li>
          <Link to={"contacts"}>Constacts</Link>
        </li>
        <li>
          <Link to={"team"}>Team</Link>
        </li>
      </ul>
      
      <Outlet />
    </div>
  );
};

export default AboutPage;
