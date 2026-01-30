import React from "react";
import DateTime from "./DateTime";

const Nav = () => {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <div className="apple-icon">
          <img src="/navbar-icons/apple.svg" alt="Apple menu" />
        </div>

        <div className="nav-item">Manav Uttekar</div>
        <div className="nav-item">File</div>
        <div className="nav-item">Window</div>
        <div className="nav-item">Terminal</div>
      </div>

      <div className="nav-right">
        <div className="nav-icon">
          <img src="/navbar-icons/wifi.svg" alt="WiFi" />
        </div>
        <div className="nav-item">
          <DateTime />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
