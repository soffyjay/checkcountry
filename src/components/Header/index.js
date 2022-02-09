import React from "react";
import { BsFillMoonFill, BsMoon } from "react-icons/bs";
import "./style.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header_content">
        <h1>Where in the world?</h1>
        <div className="header_mode">
          <BsFillMoonFill />
          <span>Dark Mode</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
