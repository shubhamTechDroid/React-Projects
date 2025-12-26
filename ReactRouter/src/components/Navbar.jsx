import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand " to="/">
          Navbar
        </Link>
        <div className="navlink-box d-flex text-light w-25 justify-content-between  me-3">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/About" className="nav-link">
            About
          </Link>
          <Link to="/Services" className="nav-link">
            Services
          </Link>
          <Link to="/Contact" className="nav-link">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
