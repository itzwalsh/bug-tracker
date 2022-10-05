import React, { useState } from "react";

import "./Navbar.css";

function Navbar(props) {

  return (
    <div className="test">
      <nav className="navbar">
        <a href="/"><img src="./logo.png" alt="Logo" className="logo"/></a>
        <h3 className="site-title">Bug Tracker</h3>
        <ul className="navbar-nav">{props.children}</ul>
      </nav>
    </div>
  );
}

export default Navbar;
