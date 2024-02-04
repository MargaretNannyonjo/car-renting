import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <div className="links">
        <Link to="/" className="title">
          VroomVista
        </Link>
        <div className="navbar">
          <Link to="/" className="navs">
            Home
          </Link>

          <Link to="/Cars" className="navs">
            Available Cars
          </Link>

          <Link to="/Blog" className="navs">
            Blog
          </Link>
        </div>
      </div>
    </>
  );
};
