import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ReactComponent as Menu } from '../assets/menu.svg'

import "../styles/Navbar.css";

function NavBar() {
  const [expandNavbar, setExpandNavbar] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);

  return (
    <div className="navbar" id={expandNavbar ? "open" : "close"}>
      <div>
        <button
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            margin: "20px",
            marginRight: "10px",
            color: "black",
          }}
          className="navbar-toggler"
          onClick={() => {
            setExpandNavbar((prev) => !prev);
          }}
        >
          <Menu />
        </button>
      </div>
      <div className="links">
        <Link to="/"> Home </Link>
        <Link to="/projects"> projects </Link>
        <Link to="/experience"> experience </Link>
        <Link to="/contact">contact</Link>
      </div>
    </div>
  );
}

export default NavBar;
